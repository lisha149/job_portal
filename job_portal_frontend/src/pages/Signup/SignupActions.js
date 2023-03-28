import axios from "axios";
import { toast } from "react-toastify";
import { USER_LOGIN_SUCCESS } from "../Login/LoginConstants";
import * as constants from "./SignupConstants";

export const signup = (userData) => async (dispatch) => {
  try {
    dispatch({ type: constants.USER_SIGNUP_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const signupData = {
      name: userData.name,
      email: userData.email,
      password: userData.password,
      gender: userData.gender,
    };

    const { data } = await axios.post(
      "/public/auth/signup",
      signupData,
      config
    );
    dispatch({ type: constants.USER_SIGNUP_SUCCESS, payload: data });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    window.sessionStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    toast.error(error.response.data.message);

    dispatch({
      type: constants.USER_SIGNUP_FAIL,
      error: error.response ? error.response.data.message : error.message,
    });
  }
};
