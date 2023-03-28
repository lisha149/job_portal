import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_PAGE } from "../../routes/routes";
import { signup } from "./SignupActions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Field from "../../components/Field";
import Loading from "../../components/Loading";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userSignup = useSelector((state) => state.userSignup);
  const { loading, userInfo } = userSignup;

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const signupOptions = {
    name: {
      required: " ***Required",
      minLength: {
        value: 3,
        message: " ***At-least 3 characters"
      }
    },
    email: {
      required: " ***Required",
      pattern: {
        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
        message: " ***Invalid Email"
      }
    },
    password: {
      required: " ***Required",
      minLength: {
        value: 5,
        message: " ***At-least 5 characters"
      }
    },
    gender: {
      required: " ***Please select one"
    }
  };

  const onFormSubmit = (data) => {
    dispatch(signup(data));
  };

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
          New User? Register
        </h1>

        {/* name */}

        <Field name="name" Name="Name" />

        <div>
          <input
            name="name"
            className="bg-gray-100  box-border border border-gray-400 text-gray-600 p-2 rounded-md focus:outline ml-3 mb-3 w-2/3 "
            {...register("name", signupOptions.name)}
          />
          <span className="text-red-400 ">
            {errors?.name && errors.name.message}
          </span>
        </div>

        {/* email */}

        <Field name="email" Name="Email" />

        <div>
          <input
            type="email"
            name="email"
            className="bg-gray-100  box-border border border-gray-400 text-gray-600 p-2 rounded-md focus:outline ml-3 mb-3 w-2/3 "
            {...register("email", signupOptions.email)}
          />
          <span className="text-red-400 ">
            {errors?.email && errors.email.message}
          </span>
        </div>

        {/* password */}

        <Field name="password" Name="Password" />

        <div>
          <input
            type="password"
            name="password"
            className="bg-gray-100 box-border border border-gray-400 text-gray-600 p-2 rounded-md focus:outline ml-3 mb-3 w-2/3"
            {...register("password", signupOptions.password)}
          />
          <span className="text-red-400 ">
            {errors?.password && errors.password.message}
          </span>
        </div>

        {/* gender */}
        <div>
          <Field name="gender" Name="Gender" />

          <div className="flex px-4 gap-4 pb-4">
            <input
              type="radio"
              name="gender"
              value="Male"
              {...register("gender", signupOptions.gender)}
            />
            <label htmlFor="male" className="text-gray-500 ">
              Male
            </label>

            <input
              type="radio"
              name="gender"
              value="Female"
              {...register("gender", signupOptions.gender)}
            />
            <label htmlFor="female" className="text-gray-500 ">
              Female
            </label>
            <span className="text-red-400 ">
              {errors?.gender && errors.gender.message}
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center content-center">
          <button
            type="submit"
            className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-6 ml-4 mt-2 rounded-full md:mr-1"
          >
            Signup
          </button>
          <div className="flex justify-end gap-4 mr-4">
            <p className="text-gray-600 xs:text-base ">
              Already Have an Account?
            </p>
            <Link to={LOGIN_PAGE} className="text-blue-600 hover:underline  ">
              Login
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
