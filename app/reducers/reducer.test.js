import expect from 'expect';
import reducer from './reducer';

const initState = {
  searchTerm: '',
  isFetching: false,
  gifsLength: 0,
  page: 0,
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
    const actual = reducer({ gifs: {}, isFetching: true, searchTerm: 'dogs' }, { type: 'FETCH_GIFS_SUCCESS', data: ['imgs'] });
    it('should update isFetching', () => {
      expect(actual.isFetching).toBeFalsy();
    });
    it('should update page', () => {
      expect(actual.page).toBe(1);
    });
    it('should update gifsLength', () => {
      expect(actual.gifsLength).toBeGreaterThan(0);
    });
    it('should update currentGifs', () => {
      expect(actual.gifs.dogs.length).toBeGreaterThan(0);
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
  describe('change page', () => {
    it('should update page', () => {
      expect(reducer({ gifs: { dog: [1, 2, 3] }, isFetching: true, searchTerm: 'dog' }, { type: 'CHANGE_PAGE', currPage: 1 }).page).toBe(1);
    });
    it('should update curent gifs', () => {
      const arr = [];
      for (let i = 0; i < 30; i += 1) arr.push(i);
      expect(reducer({
        gifs: {
          dog: arr,
        },
        page: 2,
        currentGifs: arr.slice(0, 10),
        isFetching: true,
        searchTerm: 'dog',
      }, { type: 'CHANGE_PAGE', currPage: 2 }).currentGifs).toEqual(arr.slice(10, 20));
    });
  });
});
