import { takeEvery, all, put, call } from 'redux-saga/effects';
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

function* fetchUserNotes({ payload: { args: { userName } } }) {
  yield put(connectivity.actions.requestApiCall(
    callNames.FETCH_NOTES,
    { userName },
    user.actions.FETCH_USER_NOTES
  ));
}

function* redirectToProfileAndFetchDependencies(action) {
  route('/github-profile-search/profile');
  yield call(fetchUserRepositories, action);
  yield call(fetchUserNotes, action);
}

function* watchFetchUserSucceeded() {
  yield takeEvery(user.actions.FETCH_USER.SUCCEEDED, redirectToProfileAndFetchDependencies);
}

function* userSaga() {
  yield all([
    watchFetchUserSucceeded()
  ]);
}

export default userSaga;
