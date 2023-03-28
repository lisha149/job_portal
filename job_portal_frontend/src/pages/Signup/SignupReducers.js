import * as constants from "./SignupConstants";

export const userSignupReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.USER_SIGNUP_REQUEST:
      return { loading: true };
    case constants.USER_SIGNUP_SUCCESS:
      return { loading: true, userInfo: action.payload };
    case constants.USER_SIGNUP_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
