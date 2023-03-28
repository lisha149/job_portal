import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Field from "../../components/Field";
import Loading from "../../components/Loading";
import { resetPasswordAction } from "./resetPasswordActions";

const ResetPassword = () => {
  const { token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userResetPassword = useSelector((state) => state.userResetPassword);
  const { loading } = userResetPassword;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (data) => {
    dispatch(resetPasswordAction(data, navigate, token));
  };

  const resetPasswordOptions = {
    newPassword: {
      required: " ***Required",
      minLength: {
        value: 5,
        message: " ***At-least 5 characters",
      },
    },
    confirmPassword: {
      required: " ***Required",
      minLength: {
        value: 5,
        message: " ***At-least 5 characters",
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

        {/* newPassword */}

        <Field name="newPassword" Name="New Password" />
        <div>
          <input
            type="password"
            name="newPassword"
            className="bg-gray-100  box-border border border-gray-400 text-gray-600 p-2 rounded-md focus:outline ml-3 mb-3 w-2/3 "
            {...register("newPassword", resetPasswordOptions.newPassword)}
          />
          <span className="text-red-400 ">
            {errors?.newPassword && errors.newPassword.message}
          </span>
        </div>
        <Field name="confirmPassword" Name="Confirm Password" />
        <div>
          <input
            type="password"
            name="confirmPassword"
            className="bg-gray-100  box-border border border-gray-400 text-gray-600 p-2 rounded-md focus:outline ml-3 mb-3 w-2/3 "
            {...register(
              "confirmPassword",
              resetPasswordOptions.confirmPassword
            )}
          />
          <span className="text-red-400 ">
            {errors?.confirmPassword && errors.confirmPassword.message}
          </span>
        </div>

        <div className="flex justify-between items-center content-center">
          <button
            type="submit"
            className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-6 ml-4 mt-2 rounded-full"
          >
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
