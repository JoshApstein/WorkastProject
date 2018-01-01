import expect from 'expect';
import reducer from './reducer';

const initState = {
  searchTerm: '',
  hasSearched: false,
  isFetching: false,
  gifs: {},
};

describe('reducer', () => {
  it('should return initial state if none', () => {
    expect(reducer(undefined, {})).toEqual(initState);
  });
  describe('request', () => {
    it('should update isFetching', () => {
      expect(reducer({ isFetching: false }, { type: 'FETCH_GIFS_REQUEST' }).isFetching).toBeTruthy();
    });
  });
  describe('success', () => {
    it('should update isFetching', () => {
      expect(reducer({ gifs: {}, isFetching: true, searchTerm: 'dogs' }, { type: 'FETCH_GIFS_SUCCESS', data: ['imgs'] }).isFetching).toBeFalsy();
    });
  });
  describe('error', () => {
    it('should update isFetching', () => {
      expect(reducer({ isFetching: true }, { type: 'FETCH_GIFS_ERROR' }).isFetching).toBeFalsy();
    });
  });
  describe('change value', () => {
    it('should update searchTerm', () => {
      expect(reducer({ searchTerm: 'first' }, { type: 'CHANGE_SEARCH_VALUE', val: 'second' }).searchTerm).toEqual('second');
    });
  });
});
