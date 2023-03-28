import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faLink } from "@fortawesome/free-solid-svg-icons";
import {
  CATEGORY_PAGE,
  CHANGE_PASSWORD,
  COMPANY_PAGE,
  CONTACT_PAGE,
  HOME_PAGE,
  JOB_PAGE,
  SERVICE_PAGE
} from "../routes/routes";
import Nav from "./Nav";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../pages/Login/LoginActions";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const logoutHandler = () => {
    dispatch(logout());
    setToggle(!toggle);
    navigate("/");
  };
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10 ">
      <div className="md:flex bg-white items-center justify-between py-4 px-8">
        {/* logo */}
        <div className=" font-bold md:text-2xl cursor-pointer  text-slate-600 screen xs:text-xl">
          <div>
            <span className="lg:text-3xl md:text-xl text-slate-600 mr-2">
              <Link to="/">
                <FontAwesomeIcon icon={faLink} />
              </Link>
            </span>
            <Link to="/">
              <span className="md:text-xl lg:text-3xl">jobKhoj</span>
            </Link>
          </div>
          <div className="flex items-center justify-between gap-6 md:hidden lg:hidden xl:hidden 2xl:hidden">
            {userInfo?.data?.isAdmin === true ? (
              <li className="md:ml-8 text-xl xs:text-lg xs:flex xs:justify-center">
                <button
                  onClick={logoutHandler}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  Logout
                </button>
              </li>
            ) : userInfo ? (
              <div className="dropdown lg:text-xl md:text-lg ">
                <button className="text-gray-600 hover:text-gray-400 duration-500 border-none  lg:text-xl md:text-lg">
                  My Account
                </button>
                <div className="dropdown-content right-0  lg:text-lg md:text-base">
                  <Link
                    to={CHANGE_PASSWORD}
                    className="text-gray-600 duration-500 pl-4 pr-20 py-3 block hover:bg-slate-200 "
                  >
                    Change Password
                  </Link>

                  <button
                    onClick={logoutHandler}
                    className="text-gray-600 duration-500 pl-4 pr-28 py-3 block hover:bg-slate-200 "
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : null}
            <div>
              {toggle ? (
                <Link onClick={toggleHandler}>
                  <span className=" lg:hidden md:hidden  text-3xl text-slate-600 ">
                    <FontAwesomeIcon icon={faClose} />
                  </span>
                </Link>
              ) : (
                <Link onClick={toggleHandler}>
                  <span className=" lg:hidden md:hidden text-3xl text-slate-600 ">
                    <FontAwesomeIcon icon={faBars} />
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* desktop nav */}

        <ul className="flex lg:items-center lg:gap-6  md:gap-3 desktop-nav">
          <Nav route={HOME_PAGE} name="Home" />
          <Nav route={CATEGORY_PAGE} name="Category" />
          <Nav route={COMPANY_PAGE} name="Company" />
          <Nav route={JOB_PAGE} name="Jobs" />
          <Nav route={SERVICE_PAGE} name="Services" />
          <Nav route={CONTACT_PAGE} name="Contact Us" />

          {userInfo?.data?.isAdmin === true ? (
            <li className="lg:text-xl md:text-lg nav-link">
              <button
                onClick={logoutHandler}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                Logout
              </button>
            </li>
          ) : userInfo ? (
            <div className="dropdown float-right ">
              <button className="text-gray-800 hover:text-gray-400 duration-500 border-none  lg:text-xl md:text-lg">
                My Account
              </button>
              <div className="dropdown-content right-0  lg:text-lg md:text-base">
                <Link
                  to={CHANGE_PASSWORD}
                  className="text-gray-800 duration-500 pl-4 pr-20 py-3 block hover:bg-slate-200 "
                >
                  Change Password
                </Link>

                <button
                  onClick={logoutHandler}
                  className="text-gray-800 duration-500 pl-4 pr-28 py-3 block hover:bg-slate-200 "
                >
                  Logout
                </button>
              </div>
            </div>
          ) : null}
        </ul>

        {/* mobile nav */}

        <ul
          className={
            toggle
              ? "md:hidden lg:hidden xl:hidden 2xl:hidden mobile-nav mobile-menu"
              : "md:hidden lg:hidden xl:hidden 2xl:hidden hidden"
          }
        >
          <Nav route={HOME_PAGE} name="Home" toggle={toggleHandler} />
          <Nav route={CATEGORY_PAGE} name="Category" toggle={toggleHandler} />
          <Nav route={COMPANY_PAGE} name="Company" toggle={toggleHandler} />
          <Nav route={JOB_PAGE} name="Jobs" toggle={toggleHandler} />
          <Nav route={SERVICE_PAGE} name="Services" toggle={toggleHandler} />
          <Nav route={CONTACT_PAGE} name="Contact Us" toggle={toggleHandler} />
        </ul>
      </div>
    </div>
  );
};

export default Header;
