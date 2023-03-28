import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Button from "../../components/Button";
import Field from "../../components/Field";
import Loading from "../../components/Loading";
import { createCompanyAction, listCompany } from "./CompanyActions";

const CreateCompany = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const companyCreate = useSelector((state) => state.companyCreate);
  const { loading } = companyCreate;

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const createOptions = {
    name: {
      required: " ***Required"
    },
    website: {
      required: " ***Required"
    },
    contactNumber: {
      required: " ***Required",
      minLength: {
        value: 10,
        message: " ***10 digit number",
      },
  
    },
    location: {
      required: " ***Required"
    },
    email: {
      required: " ***Required",
      pattern: {
        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
        message: " ***Invalid Email"
      }
    }
  };
  const onFormSubmit = (data) => {
    dispatch(createCompanyAction(data, navigate));
  };

  useEffect(() => {
    dispatch(listCompany());
  }, [dispatch]);
  return (
    <div className="bg-slate-100 w-full h-screen content">
      <form
        className="xl:w-1/2 xs:w-full p-8 bg-slate-200 m-auto shadow-md my-2"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <ToastContainer />
        {loading && <Loading />}
        <h1 className="xs:text-xl lg:text-2xl font-bold text-gray-700 p-2">
          Add Company
        </h1>

        {/* name */}
        <Field name="name" Name="Name" />

        <div>
          <input
            type="text"
            name="name"
            className="bg-gray-100  box-border border border-gray-400 text-gray-600 p-2 rounded-md focus:outline ml-3 mb-3 w-2/3 "
            {...register("name", createOptions.name)}
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
            {...register("email", createOptions.email)}
          />
          <span className="text-red-400 ">
            {errors?.email && errors.email.message}
          </span>
        </div>

        {/* website  */}
        <Field name="website" Name="Website" />

        <div>
          <input
            type="text"
            name="website"
            className="bg-gray-100  box-border border border-gray-400 text-gray-600 p-2 rounded-md focus:outline ml-3 mb-3 w-2/3 "
            {...register("website", createOptions.website)}
          />
          <span className="text-red-400 ">
            {errors?.website && errors.website.message}
          </span>
        </div>

        {/* contactNumber */}
        <Field name="contactNumber" Name="Contact" />

        <div>
          <input
            type="number"
            name="contactNumber"
            className="bg-gray-100  box-border border border-gray-400 text-gray-600 p-2 rounded-md focus:outline ml-3 mb-3 w-2/3 "
            {...register("contactNumber", createOptions.contactNumber)}
          />
          <span className="text-red-400 ">
            {errors?.contactNumber && errors.contactNumber.message}
          </span>
        </div>

        {/* location */}
        <Field name="location" Name="Location" />

        <div>
          <input
            type="text"
            name="name"
            className="bg-gray-100  box-border border border-gray-400 text-gray-600 p-2 rounded-md focus:outline ml-3 mb-3 w-2/3 "
            {...register("location", createOptions.location)}
          />
          <span className="text-red-400 ">
            {errors?.location && errors.location.message}
          </span>
        </div>

        <div className="flex justify-between items-center content-center p-4">
          <Button icon={faPlusCircle} name="Create" />
        </div>
      </form>
    </div>
  );
};

export default CreateCompany;
