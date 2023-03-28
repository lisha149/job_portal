import * as constants from "./ApplyConstants";

export const userJobApplyReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.APPLY_JOB_REQUEST:
      return { loading: true };
    case constants.APPLY_JOB_SUCCESS:
      return { loading: false, jobInfo: action.payload, success: true };
    case constants.APPLY_JOB_FAIL:
      return { loading: false, error: action.error };

    default:
      return state;
  }
};
