import axios from "axios";
import { toast } from "react-toastify";
import * as constants from "./CategoryConstants";

export const listCategory = () => async (dispatch) => {
  try {
    dispatch({
      type: constants.CATEGORY_LIST_REQUEST
    });

    const { data } = await axios.get("/public/category");

    dispatch({
      type: constants.CATEGORY_LIST_SUCCESS,
      payload: data.data
    });
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch({
      type: constants.CATEGORY_LIST_FAIL,
      error: error.response ? error.response.data.message : error.message
    });
  }
};

export const listJobByCategory = (id) => async (dispatch) => {
  try {
    dispatch({
      type: constants.CATEGORY_JOB_LIST_REQUEST
    });

    const { data } = await axios.get(`/public/job/category/${id}`);

    dispatch({
      type: constants.CATEGORY_JOB_LIST_SUCCESS,
      payload: data.data
    });
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch({
      type: constants.CATEGORY_JOB_LIST_FAIL,
      error: error.response ? error.response.data.message : error.message
    });
  }
};
export const createCategoryAction =
  (categoryData, navigate) => async (dispatch, getState) => {
    try {
      dispatch({
        type: constants.CATEGORY_CREATE_REQUEST
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

      const createData = { name: categoryData.name };
      const { data } = await axios.post(`/admin/category`, createData, config);
      dispatch({
        type: constants.CATEGORY_CREATE_SUCCESS,
        payload: data
      });
      navigate("/categories");
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch({
        type: constants.CATEGORY_CREATE_FAIL,
        error: error.response ? error.response.data.message : error.message
      });
    }
  };

export const updateCategoryAction =
  (categoryData, id, navigate) => async (dispatch, getState) => {
    try {
      dispatch({
        type: constants.CATEGORY_UPDATE_REQUEST
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
      const updateData = { name: categoryData.name };

      const { data } = await axios.patch(
        `/admin/category/${id}`,
        updateData,
        config
      );

      dispatch({
        type: constants.CATEGORY_UPDATE_SUCCESS,
        payload: data
      });
      navigate("/categories");
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch({
        type: constants.CATEGORY_UPDATE_FAIL,
        error: error.response ? error.response.data.message : error.message
      });
    }
  };

export const deleteCategoryeAction =
  (id, navigate) => async (dispatch, getState) => {
    try {
      dispatch({
        type: constants.CATEGORY_DELETE_REQUEST
      });

      const {
        userLogin: { userInfo }
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.data.token}`
        }
      };

      const { data } = await axios.delete(`/admin/category/${id}`, config);

      dispatch({
        type: constants.CATEGORY_DELETE_SUCCESS,
        payload: data
      });
      navigate("/categories");
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch({
        type: constants.CATEGORY_DELETE_FAIL,
        error: error.response ? error.response.data.message : error.message
      });
    }
  };

export const singleCategory = (id) => async (dispatch) => {
  try {
    dispatch({ type: constants.CATEGORY_REQUEST });
    const { data } = await axios.get(`/public//category/${id}`);

    dispatch({ type: constants.CATEGORY_SUCCESS, payload: data.data });
  } catch (error) {
    toast.error(error.response.data.message);

    dispatch({
      type: constants.CATEGORY_FAIL,
      error: error.response ? error.response.data.message : error.message
    });
  }
};
