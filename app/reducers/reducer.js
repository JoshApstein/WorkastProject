// init state (no search yet, spinner, { [searchTerm]: [array] })
const initialState = {
  searchTerm: '',
  isFetching: false,
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
      return {
        ...state,
        isFetching: false,
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
    default:
      return state;
  }
};
