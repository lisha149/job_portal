import axios from "axios";
import { toast } from "react-toastify";
import * as constants from "./applicationConstants";

export const listApplications = (id) => async (dispatch, getState) => {
  try {
    console.log(id);
    dispatch({
      type: constants.APPLICATION_LIST_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.data.token}`,
      },
    };

    const { data } = await axios.get(`/admin/job/${id}/applications`, config);
    console.log(data.data);

    dispatch({
      type: constants.APPLICATION_LIST_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch({
      type: constants.APPLICATION_LIST_FAIL,
      error: error.response ? error.response.data.message : error.message,
    });
  }
};

export const deleteApplicationAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: constants.APPLICATION_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.data.token}`,
      },
    };

    const { data } = await axios.delete(`/admin/applications/${id}`, config);

    dispatch({
      type: constants.APPLICATION_DELETE_SUCCESS,
      payload: data,
    });
    toast.success("Applications Deleted Successfully");
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch({
      type: constants.APPLICATION_DELETE_FAIL,
      error: error.response ? error.response.data.message : error.message,
    });
  }
};
