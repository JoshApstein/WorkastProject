import expect from 'expect';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/action';
import fetchGifs from '../api/api';
import mainSaga, { fetchGifsFromApi } from './sagas';

describe('main saga', () => {
  it('sends all request actions to generator', () => {
    const gen = mainSaga();
    expect(gen.next().value).toEqual(takeEvery('FETCH_GIFS_REQUEST', fetchGifsFromApi));
  });
  describe('fetching gifs saga', () => {
    const gen = fetchGifsFromApi({ term: 'some search term' });
    it('calls the api', () => {
      expect(gen.next().value).toEqual(call(fetchGifs, 'some search term'));
    });
    describe('Api success', () => {
      it('should return data', () => {
        expect(gen.next({ data: ['some', 'data'] }).value).toEqual(put(actions.fetchGifsSuccess(['some', 'data'])));
      });
    });
    describe('Api error', () => {
      const genNoTerm = fetchGifsFromApi({ term: '' });
      it('should return exception', () => {
        expect(genNoTerm.next().value).toEqual(call(fetchGifs, ''));
        expect(genNoTerm.next().value).toEqual(put(actions.fetchGifsError('Cannot read property \'data\' of undefined')));
      });
    });
  });
});
