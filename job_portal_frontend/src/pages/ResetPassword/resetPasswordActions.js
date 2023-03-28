import axios from "axios";
import { toast } from "react-toastify";
import * as constants from "./resetPasswordConstants";

export const resetPasswordAction =
  (userData, navigate, token) => async (dispatch) => {
    try {
      dispatch({
        type: constants.RESET_PASSWORD_REQUEST
      });

      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      const resetData = {
        newPassword: userData.newPassword,
        confirmPassword: userData.confirmPassword
      };
      const { data } = await axios.post(
        `/user/auth/reset-password/${token}`,
        resetData,
        config
      );
      dispatch({
        type: constants.RESET_PASSWORD_SUCCESS,
        payload: data
      });
      toast.success(`${data.message}`);
      setTimeout(() => {
      navigate("/login")
      toast.info("PLease login")
      }, "2000");
    } catch (error) {
      toast.error(error.response.data.message);

      dispatch({
        type: constants.RESET_PASSWORD_FAIL,
        error: error.response ? error.response.data.message : error.message
      });
    }
  };
