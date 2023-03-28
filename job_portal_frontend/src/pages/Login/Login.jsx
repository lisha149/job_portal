import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FORGOT_PASSWORD, SIGNUP_PAGE } from "../../routes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { adminLogin, login } from "./LoginActions";
import Loading from "../../components/Loading";
import Field from "../../components/Field";

const Login = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo } = userLogin;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (data) => {
    if (data.user === "admin") {
      dispatch(adminLogin(data));
    } else {
      dispatch(login(data));
    }
  };

  const loginOptions = {
    email: {
      required: " ***Email is required",
      pattern: {
        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
        message: " ***Invalid Email",
      },
    },
    password: {
      required: " ***Password is required",
      minLength: {
        value: 5,
        message: " ***At-least 5 characters",
      },
    },
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo) {
      navigate("/jobs");
    }
  }, [navigate, userInfo]);

  return (
    <div className="bg-slate-100 w-full h-screen content">
      {loading && <Loading />}
      <form
        className="xl:w-1/2 xs:w-full xs:p-5  p-10 bg-slate-200 m-auto shadow-md my-16"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <ToastContainer />

        <h1 className="xs:text-xl lg:text-2xl font-bold text-gray-700 p-4">
          Login to your account
        </h1>

        {/* email */}

        <Field name="email" Name="Email" />
        <div>
          <input
            type="email"
            name="email"
            className="bg-gray-100  box-border border border-gray-400 text-gray-600 p-2 rounded-md focus:outline ml-3 mb-3 w-2/3 "
            {...register("email", loginOptions.email)}
          />
          <span className="text-red-400 ">
            {errors?.email && errors.email.message}
          </span>
        </div>

        {/* password */}

        <Field name="password" Name="Password" />

          <div>       
          <input
              type= "password"
            name="password"
            className="bg-gray-100 box-border border border-gray-400 text-gray-600 p-2 rounded-md focus:outline ml-3 mb-3 w-2/3"
            {...register("password", loginOptions.password)}
          />
          <span className="text-red-400 ">
            {errors?.password && errors.password.message}
          </span>
        </div>

        <div className="p-2 ml-3 mb-3 ">
          <input
            type="checkbox"
            name="user"
            value="admin"
            {...register("user")}
          />
          <label htmlFor="user"> Login as admin</label>
          <br></br>
        </div>

        <div className="flex justify-between items-center content-center">
          <button
            type="submit"
            className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-6 ml-4 mt-2 rounded-full"
          >
            Login
          </button>
          <div className="flex justify-end gap-4 md:gap-2">
            <Link to={FORGOT_PASSWORD} className="text-red-600 hover:underline">
              Forgot Password?
            </Link>
            <Link to={SIGNUP_PAGE} className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
