import { takeEvery, put, call } from "redux-saga/effects";
import { hideLoader, showLoader } from "../../actions/app.actions";
import { message } from "antd";
import {
  AUTH_CREATE_WORKSPACE,
  AUTH_DELETE_WORKSPACE,
  AUTH_GET_WORKSPACES,
  AUTH_UPDATE_WORKSPACE,
  GET_WORKSPACE,
} from "../../actions/constants";
import {
  createWorkspace,
  deleteWorkspace,
  getWorkspaces,
  updateWorkspace,
} from "./workspaces.services";
import {
  authAddWorkspaceToStateAction,
  authDeleteWorkspaceFromStateAction,
  authGetLimitedWorkspaceAction,
  authUpdateStateWorkspaceAction,
} from "../../actions/auth.actions";

export function* workspaceSagaWatcher() {
  yield takeEvery(AUTH_CREATE_WORKSPACE, createWorkspaceWorker);
  yield takeEvery(AUTH_UPDATE_WORKSPACE, updateWorkspaceWorker);
  yield takeEvery(AUTH_DELETE_WORKSPACE, deleteWorkspaceWorker);
  yield takeEvery(AUTH_GET_WORKSPACES, getWorkspacesWorker);
  yield takeEvery(GET_WORKSPACE, getWorkspaceWorker);
}

/*Workspaces*/

export function* createWorkspaceWorker(data) {
  yield put(showLoader());
  try {
    const payload = yield call(() => createWorkspace(data.payload));
    yield put(authGetLimitedWorkspaceAction(payload.workspaces));
    yield put(hideLoader());
  } catch (e) {
    yield put(hideLoader());
    message.error(e?.message || "Operation failed!");
  }
}
export function* getWorkspaceWorker(workspaceId) {
  yield put(showLoader());
  try {
  } catch (e) {
    yield put(hideLoader());
    message.error(e?.message || "Operation failed!");
  }
}
export function* getWorkspacesWorker(data) {
  yield put(showLoader());
  try {
    const payload = yield call(() => getWorkspaces(data.payload));
    yield put(authGetLimitedWorkspaceAction(payload.workspaces));
    yield put(hideLoader());
  } catch (e) {
    yield put(hideLoader());
    message.error(e?.message || "Operation failed!");
  }
}
export function* updateWorkspaceWorker(workspace) {
  yield put(showLoader());
  const payload = yield call(() => updateWorkspace(workspace.payload));
  yield put(authGetLimitedWorkspaceAction(payload.workspaces));
  yield put(hideLoader());
  try {
  } catch (e) {
    yield put(hideLoader());
    message.error(e?.message || "Operation failed!");
  }
}
export function* deleteWorkspaceWorker(workspace) {
  yield put(showLoader());
  try {
    const payload = yield call(() => deleteWorkspace(workspace.payload));
    yield put(authGetLimitedWorkspaceAction(payload.workspaces));
    yield put(hideLoader());
  } catch (e) {
    yield put(hideLoader());
    message.error(e?.message || "Operation failed!");
  }
}
