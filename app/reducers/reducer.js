const initialState = {
  searchTerm: '',
  page: 0,
  isFetching: false,
  gifsLength: 0,
  gifs: {},
};

// reducer function to update state
export default (state = initialState, action) => {
  switch (action.type) {
    // we're getting some data
    case ('FETCH_GIFS_REQUEST'): {
      return {
        ...state,
        isFetching: true,
      };
    }
    // we got some data
    case ('FETCH_GIFS_SUCCESS'): {
      const newState = state;
      newState.gifs[state.searchTerm || 'trending'] = action.data;
      const firstTen = action.data.slice(0, 10);
      return {
        ...newState,
        page: 1,
        gifsLength: action.data.length,
        isFetching: false,
        currentGifs: firstTen,
      };
    }
    // we didnt get any data
    case ('FETCH_GIFS_ERROR'): {
      return {
        ...state,
        isFetching: false,
      };
    }
    // whatever the input has is reflected in state
    case ('CHANGE_SEARCH_VALUE'): {
      return {
        ...state,
        searchTerm: action.val,
      };
    }
    // the page of the current search or trending is reflected in state
    // and so are the gifs themselves based off of current page
    case ('CHANGE_PAGE'): {
      return {
        ...state,
        currentGifs: state.gifs[state.searchTerm].slice((action.currPage - 1) * 10, action.currPage * 10), // eslint-disable-line
        page: action.currPage,
      };
    }
    default:
      return state;
  }
};
