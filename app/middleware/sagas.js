import { put, call, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions/action';
import fetchGifs from '../api/api';

// generator saga to handle api request
export function* fetchGifsFromApi(action) {
  try {
    // store result of fetchGifs(action.term) and update state
    const fetchedData = yield call(fetchGifs, action.term);
    yield put(actions.fetchGifsSuccess(fetchedData.data));
  } catch (e) {
    // else give error message
    yield put(actions.fetchGifsError(e.message));
  }
}

// main generator for all actions
export default function* takeAllRequests() {
  yield takeLatest('FETCH_GIFS_REQUEST', fetchGifsFromApi);
}
