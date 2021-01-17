import {APP_SHOW_LOADER, APP_HIDE_LOADER} from "../actions/constants"

const initialState = {
  loading: false
}

export const appReducer = (state = initialState, action) => {
  switch (action.type){
    case APP_SHOW_LOADER:
      return {...state, loading: true}
    case APP_HIDE_LOADER:
      return {...state, loading: false}
    default: return state;
  }
}