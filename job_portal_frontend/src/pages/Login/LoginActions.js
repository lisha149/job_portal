import axios from "axios";
import { toast } from "react-toastify";
import * as constants from "./LoginConstants";

export const login = (userData) => async (dispatch) => {
  try {
    dispatch({ type: constants.USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const loginData = { email: userData.email, password: userData.password };
    const { data } = await axios.post("/user/auth", loginData, config);

    dispatch({ type: constants.USER_LOGIN_SUCCESS, payload: data });

    sessionStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    toast.error(error.response.data.message);

    dispatch({
      type: constants.USER_LOGIN_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const adminLogin = (userData) => async (dispatch) => {
  try {
    dispatch({ type: constants.USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const loginData = { email: userData.email, password: userData.password };
    const { data } = await axios.post("/admin/auth", loginData, config);

    dispatch({ type: constants.USER_LOGIN_SUCCESS, payload: data });

    sessionStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    toast.error(error.response.data.message);

    dispatch({
      type: constants.USER_LOGIN_FAIL,
      error: error.response ? error.response.data.message : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  sessionStorage.removeItem("userInfo");
  dispatch({ type: constants.USER_LOGOUT });
};
