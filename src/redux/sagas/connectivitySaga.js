import { call, put, takeEvery, all } from 'redux-saga/effects';
import { calls } from '../../api';
import { asJS } from '../../helper/immutableHelper';
import { connectivity } from '../modules';

function* callApi(callName, args) {
  try {
    const response = yield call(calls[callName], args);
    return { data: response };
  } catch (error) {
    return { error };
  }
}

function* startApiCall(action) {
  const callName = action.payload.callName;
  const args = { ...asJS(action.payload.args) };
  yield put(connectivity.actions.announceApiCall(action.payload.actions.REQUESTED, args));
  const { data, error } = yield call(callApi, callName, args);

  if (error) {
    yield put(connectivity.actions.failApiCall(action.payload.actions.FAILED, args, error));
  } else {
    yield put(
      connectivity.actions.fulfillApiCall(
        action.payload.actions.SUCCEEDED,
        args,
        data.data
      )
    );
  }
}

function* watchCallRequests() {
  yield takeEvery(connectivity.actions.API_CALL_REQUESTED, startApiCall);
}

function* connectivitySaga() {
  yield all([
    watchCallRequests()
  ]);
}

export default connectivitySaga;
