import axios from "axios";
import { toast } from "react-toastify";
import * as constants from "./CompanyConstants";

export const listCompany = () => async (dispatch) => {
  try {
    dispatch({
      type: constants.COMPANY_LIST_REQUEST
    });

    const { data } = await axios.get("/public/company");

    dispatch({
      type: constants.COMPANY_LIST_SUCCESS,
      payload: data.data
    });
  } catch (error) {
    toast.error(error.response.data.message);

    dispatch({
      type: constants.COMPANY_LIST_FAIL,
      error: error.response ? error.response.data.message : error.message
    });
  }
};

export const listJobByCompany = (id) => async (dispatch) => {
  try {
    dispatch({
      type: constants.COMPANY_JOB_LIST_REQUEST
    });

    const { data } = await axios.get(`/public/job/company/${id}`);

    dispatch({
      type: constants.COMPANY_JOB_LIST_SUCCESS,
      payload: data.data
    });
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch({
      type: constants.COMPANY_JOB_LIST_FAIL,
      error: error.response ? error.response.data.message : error.message
    });
  }
};
export const createCompanyAction =
  (companyData, navigate) => async (dispatch, getState) => {
    try {
      dispatch({
        type: constants.COMPANY_CREATE_REQUEST
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
        name: companyData.name,
        location: companyData.location,
        contactNumber: companyData.contactNumber,
        website: companyData.website,
        email: companyData.email
      };
      const { data } = await axios.post(`/admin/company`, createData, config);
      dispatch({
        type: constants.COMPANY_CREATE_SUCCESS,
        payload: data
      });
      navigate("/companies");
    } catch (error) {
      toast.error(error.response.data.message);

      dispatch({
        type: constants.COMPANY_CREATE_FAIL,
        error: error.response ? error.response.data.message : error.message
      });
    }
  };

export const updateCompanyAction =
  (companyData, id, navigate) => async (dispatch, getState) => {
    try {
      dispatch({
        type: constants.COMPANY_UPDATE_REQUEST
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
        name: companyData.name,
        location: companyData.location,
        contactNumber: companyData.contactNumber,
        website: companyData.website,
        email: companyData.email
      };

      const { data } = await axios.patch(
        `/admin/company/${id}`,
        updateData,
        config
      );

      dispatch({
        type: constants.COMPANY_UPDATE_SUCCESS,
        payload: data
      });
      navigate("/companies");
    } catch (error) {
      toast.error(error.response.data.message);

      dispatch({
        type: constants.COMPANY_UPDATE_FAIL,
        error: error.response ? error.response.data.message : error.message
      });
    }
  };

export const deleteCompanyAction =
  (id, navigate) => async (dispatch, getState) => {
    try {
      dispatch({
        type: constants.COMPANY_DELETE_REQUEST
      });

      const {
        userLogin: { userInfo }
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.data.token}`
        }
      };

      const { data } = await axios.delete(`/admin/company/${id}`, config);

      dispatch({
        type: constants.COMPANY_DELETE_SUCCESS,
        payload: data
      });
      navigate("/companies");
    } catch (error) {
      toast.error(error.response.data.message);

      dispatch({
        type: constants.COMPANY_DELETE_FAIL,
        error: error.response ? error.response.data.message : error.message
      });
    }
  };

export const singleCompany = (id) => async (dispatch) => {
  try {
    dispatch({ type: constants.COMPANY_REQUEST });
    const { data } = await axios.get(`/public//company/${id}`);

    dispatch({ type: constants.COMPANY_SUCCESS, payload: data.data });
  } catch (error) {
    toast.error(error.response.data.message);

    dispatch({
      type: constants.COMPANY_FAIL,
      error: error.response ? error.response.data.message : error.message
    });
  }
};
