import * as constants from "./JobConstants";

export const jobListReducer = (state = { jobs: [] }, action) => {
  switch (action.type) {
    case constants.JOB_LIST_REQUEST:
      return { loading: true };
    case constants.JOB_LIST_SUCCESS:
      return { loading: false, jobs: action.payload };
    case constants.JOB_LIST_FAIL:
      return { loading: false, error: action.error };

    default:
      return state;
  }
};

export const jobCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.JOB_CREATE_REQUEST:
      return { loading: true };
    case constants.JOB_CREATE_SUCCESS:
      return { loading: false, success: true, job: action.payload };
    case constants.JOB_CREATE_FAIL:
      return { loading: false, error: action.error };
    default:
      return state;
  }
};

export const jobUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.JOB_UPDATE_REQUEST:
      return { loading: true };
    case constants.JOB_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case constants.JOB_UPDATE_FAIL:
      return { loading: false, error: action.error, success: false };
    default:
      return state;
  }
};

export const jobDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.JOB_DELETE_REQUEST:
      return { loading: true };
    case constants.JOB_DELETE_SUCCESS:
      return { loading: false, success: true };
    case constants.JOB_DELETE_FAIL:
      return { loading: false, error: action.error, success: false };

    default:
      return state;
  }
};
