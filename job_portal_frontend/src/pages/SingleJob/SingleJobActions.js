import axios from "axios";
import { toast } from "react-toastify";
import * as constants from "./SingleJobConstants";

export const singleJob = (id) => async (dispatch) => {
  try {
    dispatch({ type: constants.JOB_REQUEST });
    const { data } = await axios.get(`/public//job/${id}`);

    dispatch({ type: constants.JOB_SUCCESS, payload: data.data });
  } catch (error) {
    toast.error(error.response.data.message);

    dispatch({
      type: constants.JOB_FAIL,
      error: error.response ? error.response.data.message : error.message,
    });
  }
};
