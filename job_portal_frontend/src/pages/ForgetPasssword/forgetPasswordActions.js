import axios from "axios";
import { toast } from "react-toastify";
import * as constants from "./forgetPasswordConstants";

export const forgetPasswordAction = (userData) => async (dispatch) => {
  try {
    dispatch({
      type: constants.FORGET_PASSWORD_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const forgetData = {
      email: userData.email,
    };
    const { data } = await axios.post(
      `/user/auth/forgot-password`,
      forgetData,
      config
    );
    console.log(data.message);
    dispatch({
      type: constants.FORGET_PASSWORD_SUCCESS,
      payload: data,
    });
    toast.info(`${data.message}`);
  } catch (error) {
    toast.error(error.response.data.message);

    dispatch({
      type: constants.FORGET_PASSWORD_FAIL,
      error: error.response ? error.response.data.message : error.message,
    });
  }
};
