import { takeLatest, all, put, call } from 'redux-saga/effects';
import { route } from 'preact-router';
import { callNames } from '../../api';
import { user, connectivity } from '../modules';

function* fetchUserRepositories({ payload: { args: { userName } } }) {
  yield put(connectivity.actions.requestApiCall(
    callNames.FETCH_USER_REPOSITORIES,
    { userName },
    user.actions.FETCH_REPOSITORIES
  ));
}

function* redirectToProfileAndFetchRepositories(action) {
  route('/profile');
  yield call(fetchUserRepositories, action);
}

function* watchFetchUserSucceeded() {
  yield takeLatest(user.actions.FETCH_USER.SUCCEEDED, redirectToProfileAndFetchRepositories);
}

function* userSaga() {
  yield all([
    watchFetchUserSucceeded()
  ]);
}

export default userSaga;
