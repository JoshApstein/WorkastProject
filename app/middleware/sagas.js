import { put, call, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/action';
import fetchGifs from '../api/api';

export function* fetchGifsFromApi(action) {
  try {
    const fetchedData = yield call(fetchGifs, action.term);
    yield put(actions.fetchGifsSuccess(fetchedData.data));
  } catch (e) {
    yield put(actions.fetchGifsError(e.message));
  }
}

export default function* takeAllRequests() {
  yield takeEvery('FETCH_GIFS_REQUEST', fetchGifsFromApi);
}
