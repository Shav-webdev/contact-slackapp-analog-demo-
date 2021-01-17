import { createAction } from "redux-actions";
import { APP_SHOW_LOADER, APP_HIDE_LOADER } from "./constants";

export const showLoader = createAction(APP_SHOW_LOADER);
export const hideLoader = createAction(APP_HIDE_LOADER);
