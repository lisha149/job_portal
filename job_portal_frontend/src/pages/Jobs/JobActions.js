import axios from "axios";
import { toast } from "react-toastify";
import * as constants from "./JobConstants";

export const listJobs = (currentPage) => async (dispatch) => {
  try {
    dispatch({
      type: constants.JOB_LIST_REQUEST
    });

    const { data } = await axios.get(`/public/job?page=${currentPage}`);

    dispatch({
      type: constants.JOB_LIST_SUCCESS,
      payload: data
    });
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch({
      type: constants.JOB_LIST_FAIL,
      error: error.response ? error.response.data.message : error.message
    });
  }
};

export const createJobAction =
  (jobData, navigate) => async (dispatch, getState) => {
    try {
      dispatch({
        type: constants.JOB_CREATE_REQUEST
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
      const createData = {
        title: jobData.title,
        vacancyNumber: jobData.vacancyNumber,
        description: jobData.description,
        companyId: jobData.companyId,
        categoryId: jobData.categoryId,
        experience: jobData.experience,
        deadlineDate: jobData.deadlineDate,
        salary: jobData.salary
      };
     
      const { data } = await axios.post(`/admin/job`, createData, config);
      dispatch({
        type: constants.JOB_CREATE_SUCCESS,
        payload: data
      });
      navigate("/jobs");
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch({
        type: constants.JOB_CREATE_FAIL,
        error: error.response ? error.response.data.message : error.message
      });
    }
  };

export const updateJobAction =
  (jobData, id, navigate) => async (dispatch, getState) => {
    try {
      dispatch({
        type: constants.JOB_UPDATE_REQUEST
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
      const updateData = {
        title: jobData.title,
        vacancyNumber: jobData.vacancyNumber,
        description: jobData.description,
        jobId: jobData.jobId,
        categoryId: jobData.categoryId,
        experience: jobData.experience,
        deadlineDate: jobData.deadlineDate,
        salary: jobData.salary
      };

      const { data } = await axios.patch(
        `/admin/job/${id}`,
        updateData,
        config
      );

      dispatch({
        type: constants.JOB_UPDATE_SUCCESS,
        payload: data
      });
      navigate("/jobs");
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch({
        type: constants.JOB_UPDATE_FAIL,
        error: error.response ? error.response.data.message : error.message
      });
    }
  };

export const deleteJobAction = (id, navigate) => async (dispatch, getState) => {
  try {
    dispatch({
      type: constants.JOB_DELETE_REQUEST
    });

    const {
      userLogin: { userInfo }
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.data.token}`
      }
    };

    const { data } = await axios.delete(`/admin/job/${id}`, config);

    dispatch({
      type: constants.JOB_DELETE_SUCCESS,
      payload: data
    });
    navigate("/jobs");
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch({
      type: constants.JOB_DELETE_FAIL,
      error: error.response ? error.response.data.message : error.message
    });
  }
};
