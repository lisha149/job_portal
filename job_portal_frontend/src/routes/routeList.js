import Apply from "../pages/Apply/Apply";
import Category from "../pages/Category/Category";
import ChangePassword from "../pages/ChangePassword/ChangePassword";
import Company from "../pages/Company/Company";
import Contact from "../pages/Contact/Contact";
import ForgetPassword from "../pages/ForgetPasssword/ForgetPassword";
import Home from "../pages/Home/Home";
import CategoryJob from "../pages/Jobs/CategoryJob";
import CompanyJob from "../pages/Jobs/CompanyJob";
import Jobs from "../pages/Jobs/Jobs";
import Login from "../pages/Login/Login";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import SearchResult from "../pages/Search/SearchResult";
import Services from "../pages/Services/Services";
import Signup from "../pages/Signup/Signup";
import SingleJob from "../pages/SingleJob/SingleJob";
import * as routes from "./routes";

export const routeList = [
  {
    path: routes.HOME_PAGE,
    element: <Home />
  },
  {
    path: routes.LOGIN_PAGE,
    element: <Login />
  },
  {
    path: routes.SIGNUP_PAGE,
    element: <Signup />
  },
  {
    path: routes.JOB_PAGE,
    element: <Jobs />
  },
  {
    path: routes.SERVICE_PAGE,
    element: <Services />
  },
  {
    path: routes.CONTACT_PAGE,
    element: <Contact />
  },
  {
    path: routes.APPLY_PAGE,
    element: <Apply />
  },
  {
    path: routes.VIEW_PAGE,
    element: <SingleJob />
  },
  {
    path: routes.CATEGORY_PAGE,
    element: <Category />
  },
  {
    path: routes.COMPANY_PAGE,
    element: <Company />
  },
  {
    path: routes.CATEGORY_JOB_PAGE,
    element: <CategoryJob />
  },
  {
    path: routes.COMPANY_JOB_PAGE,
    element: <CompanyJob />
  },
  {
    path: routes.FORGOT_PASSWORD,
    element: <ForgetPassword />
  },
  {
    path: routes.RESET_PASSWORD,
    element: <ResetPassword />
  },
  {
    path: routes.CHANGE_PASSWORD,
    element: <ChangePassword />
  },
  {
    path: routes.SEARCH_JOB,
    element: <SearchResult />
  }
];
