import * as constants from "./changePasswordConstants";

export const changePasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.CHANGE_PASSWORD_REQUEST:
      return { loading: true };
    case constants.CHANGE_PASSWORD_SUCCESS:
      return { loading: false, success: true, changePassword: action.payload };
    case constants.CHANGE_PASSWORD_FAIL:
      return { loading: false, error: action.error, success: false };
    default:
      return state;
  }
};
