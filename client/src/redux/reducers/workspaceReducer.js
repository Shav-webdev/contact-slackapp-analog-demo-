import {
  AUTH_ADD_WORKSPACE_TO_STATE,
  AUTH_DELETE_WORKSPACE_FROM_STATE,
  AUTH_GET_LIMITED_WORKSPACES_STATE,
  AUTH_UPDATE_STATE_WORKSPACE,
} from "../actions/constants";

const initialState = {
  workspaces: [],
};

export const workspaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ADD_WORKSPACE_TO_STATE:
      return {
        ...state,
        workspaces: [action.payload, ...state.workspaces],
      };
    case AUTH_UPDATE_STATE_WORKSPACE:
      // const updatedData = state.promotions.filter(
      //   promotion => promotion.id === action.payload
      // );
      // console.log("lastData", updatedData);
      return {
        ...state,
        workspaces: state.workspaces.map((workspace, idx) => {
          return workspace._id === action.payload._id
            ? { ...workspace, ...action.payload }
            : workspace;
        }),
      };
    case AUTH_DELETE_WORKSPACE_FROM_STATE:
      const filtered = state.workspaces.filter(
        workspace => workspace._id !== action.payload
      );
      return {
        ...state,
        workspaces: [...filtered],
      };
    case AUTH_GET_LIMITED_WORKSPACES_STATE:
      return {
        ...state,
        workspaces: [...action.payload],
      };
    default:
      return state;
  }
};
