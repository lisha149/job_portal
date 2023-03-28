import * as constants from "./forgetPasswordConstants";

export const forgetPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.FORGET_PASSWORD_REQUEST:
      return { loading: true };
    case constants.FORGET_PASSWORD_SUCCESS:
      return { loading: false, success: true, password: action.payload };
    case constants.FORGET_PASSWORD_FAIL:
      return { loading: false, error: action.error };
    default:
      return state;
  }
};
