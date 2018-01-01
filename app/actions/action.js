export const fetchGifsRequest = term => ({ type: 'FETCH_GIFS_REQUEST', term });
export const fetchGifsSuccess = data => ({ type: 'FETCH_GIFS_SUCCESS', data });
export const fetchGifsError = err => ({ type: 'FETCH_GIFS_ERROR', err });
export const changeSearchValue = val => ({ type: 'CHANGE_SEARCH_VALUE', val });
export const changePage = currPage => ({ type: 'CHANGE_PAGE', currPage });
