import * as contants from "./SingleJobConstants";

export const jobReducer = (
  state = {
    job: [],
  },
  action
) => {
  switch (action.type) {
    case contants.JOB_REQUEST:
      return { loading: true };
    case contants.JOB_SUCCESS:
      return { loading: false, job: action.payload };
    case contants.JOB_FAIL:
      return { loading: false, error: action.error };

    default:
      return state;
  }
};
