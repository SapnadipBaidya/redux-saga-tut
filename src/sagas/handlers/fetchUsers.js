import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import fetchGetUsers from "../requests/fetchUsers";

function* handleGetUsers() {//this is worker saga
  try {
    const users = yield call(fetchGetUsers);
    console.log(users)
    yield put({ type: "GET_USERS_SUCCESS", users: users });
    //put is dispatching a new action with the result from the previous yield. here (users) is the result from previous yield
  } catch (err) {
    
    yield put({ type: "GET_USERS_FAILED", message: err.message });
  }
}

function* watcherUserSaga() {//this is watcher saga
  yield takeLatest("GET_USERS_REQUESTED", handleGetUsers);
}

export default watcherUserSaga;
