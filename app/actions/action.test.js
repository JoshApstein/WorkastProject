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
});
