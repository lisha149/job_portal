import * as constants from "./CompanyConstants";

export const companyListReducer = (state = { companies: [] }, action) => {
  switch (action.type) {
    case constants.COMPANY_LIST_REQUEST:
      return { loading: true };
    case constants.COMPANY_LIST_SUCCESS:
      return { loading: false, companies: action.payload };
    case constants.COMPANY_LIST_FAIL:
      return { loading: false, error: action.error };

    default:
      return state;
  }
};

export const companyJobListReducer = (state = { jobs: [] }, action) => {
  switch (action.type) {
    case constants.COMPANY_JOB_LIST_REQUEST:
      return { loading: true };
    case constants.COMPANY_JOB_LIST_SUCCESS:
      return { loading: false, jobs: action.payload };
    case constants.COMPANY_JOB_LIST_FAIL:
      return { loading: false, error: action.error };

    default:
      return state;
  }
};

export const companyCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.COMPANY_CREATE_REQUEST:
      return { loading: true };
    case constants.COMPANY_CREATE_SUCCESS:
      return { loading: false, success: true, company: action.payload };
    case constants.COMPANY_CREATE_FAIL:
      return { loading: false, error: action.error };
    default:
      return state;
  }
};

export const companyUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.COMPANY_UPDATE_REQUEST:
      return { loading: true };
    case constants.COMPANY_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case constants.COMPANY_UPDATE_FAIL:
      return { loading: false, error: action.error, success: false };
    default:
      return state;
  }
};

export const companyDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.COMPANY_DELETE_REQUEST:
      return { loading: true };
    case constants.COMPANY_DELETE_SUCCESS:
      return { loading: false, success: true };
    case constants.COMPANY_DELETE_FAIL:
      return { loading: false, error: action.error, success: false };

    default:
      return state;
  }
};

export const CompanyReducer = (
  state = {
    company: []
  },
  action
) => {
  switch (action.type) {
    case constants.COMPANY_REQUEST:
      return { loading: true };
    case constants.COMPANY_SUCCESS:
      return { loading: false, company: action.payload };
    case constants.COMPANY_FAIL:
      return { loading: false, error: action.error };

    default:
      return state;
  }
};
