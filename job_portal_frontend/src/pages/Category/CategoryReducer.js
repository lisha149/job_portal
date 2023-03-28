import * as constants from "./CategoryConstants";

export const categoryListReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case constants.CATEGORY_LIST_REQUEST:
      return { loading: true };
    case constants.CATEGORY_LIST_SUCCESS:
      return { loading: false, categories: action.payload };
    case constants.CATEGORY_LIST_FAIL:
      return { loading: false, error: action.error };

    default:
      return state;
  }
};
export const categoryJobListReducer = (state = { jobs: [] }, action) => {
  switch (action.type) {
    case constants.CATEGORY_JOB_LIST_REQUEST:
      return { loading: true };
    case constants.CATEGORY_JOB_LIST_SUCCESS:
      return { loading: false, jobs: action.payload };
    case constants.CATEGORY_JOB_LIST_FAIL:
      return { loading: false, error: action.error };

    default:
      return state;
  }
};

export const categoryCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.CATEGORY_CREATE_REQUEST:
      return { loading: true };
    case constants.CATEGORY_CREATE_SUCCESS:
      return { loading: false, success: true, category: action.payload };
    case constants.CATEGORY_CREATE_FAIL:
      return { loading: false, error: action.error };
    default:
      return state;
  }
};

export const categoryUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.CATEGORY_UPDATE_REQUEST:
      return { loading: true };
    case constants.CATEGORY_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case constants.CATEGORY_UPDATE_FAIL:
      return { loading: false, error: action.error, success: false };
    default:
      return state;
  }
};

export const categoryDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.CATEGORY_DELETE_REQUEST:
      return { loading: true };
    case constants.CATEGORY_DELETE_SUCCESS:
      return { loading: false, success: true };
    case constants.CATEGORY_DELETE_FAIL:
      return { loading: false, error: action.error, success: false };

    default:
      return state;
  }
};

export const categoryReducer = (
  state = {
    category: []
  },
  action
) => {
  switch (action.type) {
    case constants.CATEGORY_REQUEST:
      return { loading: true };
    case constants.CATEGORY_SUCCESS:
      return { loading: false, category: action.payload };
    case constants.CATEGORY_FAIL:
      return { loading: false, error: action.error };

    default:
      return state;
  }
};
