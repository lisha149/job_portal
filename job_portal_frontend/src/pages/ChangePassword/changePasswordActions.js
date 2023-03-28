import axios from "axios";
import { toast } from "react-toastify";
import * as constants from "./changePasswordConstants";
import {USER_LOGOUT} from "../Login/LoginConstants";


export const changePasswordAction =
  (userData,navigate) => async (dispatch, getState) => {
    try {
      console.log(userData);
      dispatch({
        type: constants.CHANGE_PASSWORD_REQUEST
      });
      const {
        userLogin: { userInfo }
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.data.token}`
        }
      };

      const changePasswordData = {
        oldPassword: userData.oldPassword,
        password: userData.password,
        confirmPassword: userData.confirmPassword
      };
      const { data } = await axios.put(
        `/user/auth/change-password`,
        changePasswordData,
        config
      );
      dispatch({
        type: constants.CHANGE_PASSWORD_SUCCESS,
        payload: data
      });
      toast.success("Passowrd Reset Successfully")
      dispatch({ type:USER_LOGOUT });
      setTimeout(() => {
        toast.info("Please login again");
        navigate("/login");
      }, "2000"); 
   

    } catch (error) {
      dispatch({
        type: constants.CHANGE_PASSWORD_FAIL,
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      });
    }
  };
