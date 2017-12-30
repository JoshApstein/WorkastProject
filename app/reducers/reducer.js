const initialState = {
  searchTerm: '',
  isFetching: false,
  gifs: {},
};

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
    default:
      return state;
  }
};
