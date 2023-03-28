import { configureStore } from "@reduxjs/toolkit";
import {
  applicationDeleteReducer,
  applicationListReducer
} from "./pages/Applications/applicationReducer";
import { userJobApplyReducer } from "./pages/Apply/ApplyReducer";
import {
  categoryCreateReducer,
  categoryDeleteReducer,
  categoryJobListReducer,
  categoryListReducer,
  categoryReducer,
  categoryUpdateReducer
} from "./pages/Category/CategoryReducer";
import { changePasswordReducer } from "./pages/ChangePassword/changePasswordReducers";
import {
  companyCreateReducer,
  companyDeleteReducer,
  companyJobListReducer,
  companyListReducer,
  CompanyReducer,
  companyUpdateReducer
} from "./pages/Company/CompanyReducer";
import { forgetPasswordReducer } from "./pages/ForgetPasssword/forgetPasswordReducer";
import {
  jobCreateReducer,
  jobDeleteReducer,
  jobListReducer,
  jobUpdateReducer
} from "./pages/Jobs/JobReducer";
import { userLoginReducer } from "./pages/Login/LoginReducer";
import { resetPasswordReducer } from "./pages/ResetPassword/resetPasswordReducer";
import { userSignupReducer } from "./pages/Signup/SignupReducers";
import { jobReducer } from "./pages/SingleJob/SingleJobReducer";

const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));

const userInfoFromStorage = userInfo || null;

const preloadedState = {
  userLogin: { userInfo: userInfoFromStorage }
};

export const store = configureStore({
  reducer: {
    userLogin: userLoginReducer,
    userSignup: userSignupReducer,
    jobList: jobListReducer,
    userJobApply: userJobApplyReducer,
    jobDetails: jobReducer,
    categoryDetails: categoryReducer,
    companyDetails: CompanyReducer,
    categoryList: categoryListReducer,
    categoryCreate: categoryCreateReducer,
    categoryUpdate: categoryUpdateReducer,
    categoryDelete: categoryDeleteReducer,
    companyList: companyListReducer,
    companyCreate: companyCreateReducer,
    companyUpdate: companyUpdateReducer,
    companyDelete: companyDeleteReducer,
    jobCreate: jobCreateReducer,
    jobUpdate: jobUpdateReducer,
    jobDelete: jobDeleteReducer,
    applicationList: applicationListReducer,
    applicationDelete: applicationDeleteReducer,
    jobListByCategory: categoryJobListReducer,
    jobListByCompany: companyJobListReducer,
    userForgotPassword: forgetPasswordReducer,
    userResetPassword: resetPasswordReducer,
    userChangePassword: changePasswordReducer
  },
  preloadedState
});
