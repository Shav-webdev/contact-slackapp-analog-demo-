import { spawn } from "redux-saga/effects";
import "./sagas/auth/auth.sagas";
import { authSagaWatcher } from "./sagas/auth/auth.sagas";
import { workspaceSagaWatcher } from "./sagas/workspaces/workspaces.sagas";

export function* rootSaga() {
  yield spawn(authSagaWatcher);
  yield spawn(workspaceSagaWatcher);
}
