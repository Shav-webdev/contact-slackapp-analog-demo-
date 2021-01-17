import { takeEvery, put, call } from "redux-saga/effects";
import { delay } from "../../../services";
import { hideLoader, showLoader } from "../../actions/app.actions";
import { setAuthDataToLocalStorage } from "../../../services";
import { history } from "../../../routes/history";
import { message } from "antd";
import {
  AUTH_REGISTER,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_AUTO_LOGIN_SUCCESS,
} from "../../actions/constants";
import {
  signInSuccess,
  authSuccess,
  signOutSuccess,
} from "../../actions/auth.actions";
import { login, register, authLogoutSession } from "./auth.services";

export function* authSagaWatcher() {
  yield takeEvery(AUTH_REGISTER, authRegister);
  yield takeEvery(AUTH_LOGIN, authLogin);
  yield takeEvery(AUTH_LOGOUT, authLogoutWorker);
  yield takeEvery(AUTH_AUTO_LOGIN_SUCCESS, autoLogin);
}

export function* authRegister(data) {
  yield put(showLoader());
  try {
    const response = yield call(() => register(JSON.stringify(data.payload)));
    if (response) {
      message.success(
        response && response.message
          ? response.message
          : "Account created. Please login to continue."
      );
      history.push("/");
      yield put(hideLoader());
    }
    yield put(hideLoader());
  } catch (e) {
    yield put(hideLoader());
    message.error(e?.message || "Failed to register !");
    console.log(e?.message || "Failed to register !");
    console.log(e || "Failed to register !");
  }
}

export function* authLogin(data) {
  yield put(showLoader());
  try {
    const payload = yield call(() => login(JSON.stringify(data.payload)));
    if (!payload) {
      yield put(hideLoader());
    } else {
      localStorage.setItem("selectedMenuItem", "/dashboard/overview");
      const responseAuth = payload.auth;
      setAuthDataToLocalStorage(responseAuth);
      yield put(authSuccess(responseAuth.token));
      yield put(signInSuccess(responseAuth));
      history.push("/dashboard/overview");
      yield put(hideLoader());
      autoLogOut(responseAuth.expiresIn);
    }
  } catch (e) {
    yield put(hideLoader());
    message.error(e?.message || "Auth failed !");
    console.log(e?.message || "Auth failed !");
  }
}

export function* autoLogin() {
  try {
    const auth = JSON.parse(localStorage.getItem("auth"));
    if (auth) {
      if (!auth.token) {
        authLogoutWorker();
      } else {
        const expirationDate = new Date(auth["expiresIn"]).getTime();
        if (expirationDate <= new Date().getTime()) {
          authLogoutWorker();
        } else {
          yield put(authSuccess(auth.token));
          yield put(signInSuccess(auth));
          autoLogOut(expirationDate - new Date().getTime() / 1000);
        }
      }
    }
  } catch (e) {
    console.log(e);
  }
}

export function* autoLogOut(time) {
  yield call(delay(time));
  authLogoutWorker();
}

export function* authLogoutWorker() {
  yield put(showLoader());
  yield call(authLogoutSession);
  history.push("/");
  localStorage.removeItem("auth");
  yield put(signOutSuccess());
  yield put(hideLoader());
}
