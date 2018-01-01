import expect from 'expect';
import * as actions from './action';

describe('actions', () => {
  it('should create action to fetch with term', () => {
    const expectedAction = { type: 'FETCH_GIFS_REQUEST', term: 'test' };
    expect(actions.fetchGifsRequest('test')).toEqual(expectedAction);
  });
  it('should create action for success', () => {
    const expectedAction = { type: 'FETCH_GIFS_SUCCESS', data: ['some', 'array'] };
    expect(actions.fetchGifsSuccess(['some', 'array'])).toEqual(expectedAction);
  });
  it('should create action for error', () => {
    const expectedAction = { type: 'FETCH_GIFS_ERROR', err: 'some error message' };
    expect(actions.fetchGifsError('some error message')).toEqual(expectedAction);
  });
  it('should create action for changing value', () => {
    const expectedAction = { type: 'CHANGE_SEARCH_VALUE', val: 'narwhals' };
    expect(actions.changeSearchValue('narwhals')).toEqual(expectedAction);
  });
  it('should create action for changing page', () => {
    const expectedAction = { type: 'CHANGE_PAGE', currPage: 1 };
    expect(actions.changePage(1)).toEqual(expectedAction);
  });
});
