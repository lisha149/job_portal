import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Field from "../../components/Field";
import Loading from "../../components/Loading";
import { LOGIN_PAGE, SIGNUP_PAGE } from "../../routes/routes";
import { forgetPasswordAction } from "./forgetPasswordActions";

const ForgetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userForgotPassword = useSelector((state) => state.userForgotPassword);
  const { loading } = userForgotPassword;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (data) => {
    dispatch(forgetPasswordAction(data, navigate));
  };

  const forgetPasswordOptions = {
    email: {
      required: " ***Email is required",
      pattern: {
        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
        message: " ***Invalid Email",
      },
    },
  };
  return (
    <div className="bg-slate-100 w-full h-screen content">
      {loading && <Loading />}
      <form
        className="xl:w-1/2 xs:w-full xs:p-5  p-10 bg-slate-200 m-auto shadow-md my-16"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <ToastContainer />

        <h1 className="xs:text-xl lg:text-2xl font-bold text-gray-700 p-4">
          Forget Password?
        </h1>

        {/* email */}

        <Field name="email" Name="Email" />
        <div>
          <input
            type="email"
            name="email"
            className="bg-gray-100  box-border border border-gray-400 text-gray-600 p-2 rounded-md focus:outline ml-3 mb-3 w-2/3 "
            {...register("email", forgetPasswordOptions.email)}
          />
          <span className="text-red-400 ">
            {errors?.email && errors.email.message}
          </span>
        </div>

        <div className="flex justify-between items-center content-center">
          <button
            type="submit"
            className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-6 ml-4 mt-2 rounded-full"
          >
            Submit
          </button>
          <div className="flex justify-end gap-4 md:gap-2">
            <Link to={LOGIN_PAGE} className="text-blue-600 hover:underline">
              Login
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

export default ForgetPassword;
