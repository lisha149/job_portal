import * as constants from "./resetPasswordConstants";

export const resetPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.RESET_PASSWORD_REQUEST:
      return { loading: true };
    case constants.RESET_PASSWORD_SUCCESS:
      return { loading: false, success: true, reset: action.payload };
    case constants.RESET_PASSWORD_FAIL:
      return { loading: false, error: action.error };
    default:
      return state;
  }
};
