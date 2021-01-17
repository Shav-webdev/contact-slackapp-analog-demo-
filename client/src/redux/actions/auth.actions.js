import { createAction } from "redux-actions";
import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_REGISTER,
  AUTH_AUTH_SUCCESS,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_OUT_SUCCESS,
  AUTH_AUTO_LOGIN_SUCCESS,
  AUTH_CREATE_WORKSPACE,
  AUTH_UPDATE_WORKSPACE,
  AUTH_DELETE_WORKSPACE,
  AUTH_GET_WORKSPACES,
  AUTH_GET_LIMITED_WORKSPACES_STATE,
  AUTH_ADD_WORKSPACE_TO_STATE,
  AUTH_DELETE_WORKSPACE_FROM_STATE,
  AUTH_UPDATE_STATE_WORKSPACE,
} from "./constants";

export const authRegister = createAction(AUTH_REGISTER);
export const authLogin = createAction(AUTH_LOGIN);
export const authLogout = createAction(AUTH_LOGOUT);
export const signInSuccess = createAction(AUTH_SIGN_IN_SUCCESS);
export const authSuccess = createAction(AUTH_AUTH_SUCCESS);
export const autoLoginSuccess = createAction(AUTH_AUTO_LOGIN_SUCCESS);
export const signOutSuccess = createAction(AUTH_SIGN_OUT_SUCCESS);

/*---------------------------- Workspaces ---------------------------------*/
export const authGetWorkspacesAction = createAction(AUTH_GET_WORKSPACES);
export const authGetLimitedWorkspaceAction = createAction(
  AUTH_GET_LIMITED_WORKSPACES_STATE
);
export const authCreateWorkspaceAction = createAction(AUTH_CREATE_WORKSPACE);
export const authAddWorkspaceToStateAction = createAction(
  AUTH_ADD_WORKSPACE_TO_STATE
);
export const authUpdateWorkspaceAction = createAction(AUTH_UPDATE_WORKSPACE);
export const authUpdateStateWorkspaceAction = createAction(
  AUTH_UPDATE_STATE_WORKSPACE
);
export const authDeleteWorkspaceAction = createAction(AUTH_DELETE_WORKSPACE);
export const authDeleteWorkspaceFromStateAction = createAction(
  AUTH_DELETE_WORKSPACE_FROM_STATE
);
