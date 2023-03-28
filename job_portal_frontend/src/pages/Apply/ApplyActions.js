import axios from "axios";
import * as constants from "./ApplyConstants";

export const apply = (jobData, id) => async (dispatch, getState) => {
  try {
    dispatch({ type: constants.APPLY_JOB_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${userInfo.data.token}`,
      },
    };
    const { cv, coverLetter } = jobData;

    const applyData = {
      jobId: id,
      cv: cv[0],
      coverLetter: coverLetter[0],
      applicantId: userInfo.data.id,
    };

    const { data } = await axios.post(
      "/user/applications/apply",
      applyData,
      config
    );

    dispatch({ type: constants.APPLY_JOB_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: constants.APPLY_JOB_FAIL,
      error: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
