import * as constants from "./applicationConstants";

export const applicationListReducer = (
  state = { applications: [] },
  action
) => {
  switch (action.type) {
    case constants.APPLICATION_LIST_REQUEST:
      return { loading: true };
    case constants.APPLICATION_LIST_SUCCESS:
      return { loading: false, applications: action.payload };
    case constants.APPLICATION_LIST_FAIL:
      return { loading: false, error: action.error };

    default:
      return state;
  }
};

export const applicationDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.APPLICATION_DELETE_REQUEST:
      return { loading: true };
    case constants.APPLICATION_DELETE_SUCCESS:
      return { loading: false, success: true };
    case constants.APPLICATION_DELETE_FAIL:
      return { loading: false, error: action.error, success: false };

    default:
      return state;
  }
};
