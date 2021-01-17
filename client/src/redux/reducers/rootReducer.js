import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { authReducer } from "./authReducer";
import { workspaceReducer } from "./workspaceReducer";

export const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  workspace: workspaceReducer,
});
