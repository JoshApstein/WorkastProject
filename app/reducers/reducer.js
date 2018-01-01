const initialState = {
  searchTerm: '',
  page: 0,
  isFetching: false,
  hasSearched: false,
  gifs: {},
};

// reducer function to update state
export default (state = initialState, action) => {
  switch (action.type) {
    case ('FETCH_GIFS_REQUEST'): {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ('FETCH_GIFS_SUCCESS'): {
      const newState = state;
      newState.gifs[state.searchTerm] = action.data;
      const firstTen = action.data.slice(0, 10);
      return {
        ...newState,
        page: 1,
        gifsLength: action.data.length,
        isFetching: false,
        currentGifs: firstTen,
        hasSearched: true,
      };
    }
    case ('FETCH_GIFS_ERROR'): {
      return {
        ...state,
        isFetching: false,
      };
    }
    case ('CHANGE_SEARCH_VALUE'): {
      return {
        ...state,
        searchTerm: action.val,
      };
    }
    case ('CHANGE_PAGE'): {
      return {
        ...state,
        currentGifs: state.gifs[state.searchTerm].slice((action.currPage-1) * 10, action.currPage * 10),
        page: action.currPage,
      };
    }
    default:
      return state;
  }
};
