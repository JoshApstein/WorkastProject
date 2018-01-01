// init state (no search yet, spinner, { [searchTerm]: [array] })
const initialState = {
  searchTerm: '',
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
      return {
        ...newState,
        isFetching: false,
        currentGifs: action.data,
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
    default:
      return state;
  }
};
