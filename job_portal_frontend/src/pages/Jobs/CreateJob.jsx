import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import Field from "../../components/Field";
import Select from "react-select";
import { listCategory } from "../Category/CategoryActions";
import { listCompany } from "../Company/CompanyActions";
import { createJobAction } from "./JobActions";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateConverter from "../../components/DateConverter";
import Loading from "../../components/Loading";

const CreateJob = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categoryList = useSelector((state) => state.categoryList);
  const { categories } = categoryList;

  const companyList = useSelector((state) => state.companyList);
  const { companies } = companyList;

  const jobCreate = useSelector((state) => state.jobCreate);
  const { loading } = jobCreate;

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      select: {},
    },
  });

  const createOptions = {
    title: {
      required: " ***Required",
    },
    description: {
      required: " ***Required",
    },
    vacancyNumber: {
      required: " ***Required",
    },
    experience: {
      required: " ***Required",
    },
    salary: {
      required: " ***Required",
    },
  };

  const onFormSubmit = (data) => {
    data.categoryId = data.categoryId.value;
    data.companyId = data.companyId.value;
    data.deadlineDate = DateConverter(data.deadlineDate);
    dispatch(createJobAction(data, navigate));
  };

  const category = Array.isArray(categories)
    ? categories.map((category) => {
        return { value: category.id, label: category.name };
      })
    : [];

  const company = Array.isArray(companies)
    ? companies.map((company) => {
        return { value: company.id, label: company.name };
      })
    : [];

  useEffect(() => {
    dispatch(listCategory());
    dispatch(listCompany());
  }, [dispatch]);

  return (
    <div className="bg-slate-100 w-full h-screen content m-6">
      <form
        className="xl:w-1/2 xs:w-full p-8 bg-slate-200 m-auto shadow-md my-2"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        {loading && <Loading />}
        <ToastContainer />
        <h1 className="xs:text-xl lg:text-2xl font-bold text-gray-700 p-2">
          Add Job
        </h1>
        {/* title */}
        <Field name="title" Name="Title" />
        <div>
          <input
            type="text"
            name="title"
            className="bg-gray-100  box-border border border-gray-400 text-gray-600 p-2 rounded-md focus:outline ml-3 mb-3 w-2/3 "
            {...register("title", createOptions.title)}
          />
          <span className="text-red-400 ">
            {errors?.title && errors.title.message}
          </span>
        </div>
        {/* description */}
        <Field name="description" Name="Description" />
        <div>
          <textarea
            name="description"
            rows="4"
            cols="50"
            className="bg-gray-100  box-border border border-gray-400 text-gray-600 p-2 rounded-md focus:outline ml-3 mb-3 w-2/3 "
            {...register("description", createOptions.description)}
          />
          <span className="text-red-400 ">
            {errors?.description && errors.description.message}
          </span>
        </div>
        {/* vacancyNumber  */}
        <Field name="vacancyNumber" Name="Vacancy No." />
        <div>
          <input
            type="number"
            name="vacancyNumber"
            className="bg-gray-100  box-border border border-gray-400 text-gray-600 p-2 rounded-md focus:outline ml-3 mb-3 w-2/3 "
            {...register("vacancyNumber", createOptions.vacancyNumber)}
          />
          <span className="text-red-400 ">
            {errors?.vacancyNumber && errors.vacancyNumber.message}
          </span>
        </div>
        {/* experience */}
        <Field name="experience" Name="Experience" />
        <div>
          <input
            type="text"
            name="experience"
            className="bg-gray-100  box-border border border-gray-400 text-gray-600 p-2 rounded-md focus:outline ml-3 mb-3 w-2/3 "
            {...register("experience", createOptions.experience)}
          />
          <span className="text-red-400 ">
            {errors?.experience && errors.experience.message}
          </span>
        </div>

        <Field name="salary" Name="Salary" />
        <div>
          <input
            type="number"
            name="salary"
            className="bg-gray-100  box-border border border-gray-400 text-gray-600 p-2 rounded-md focus:outline ml-3 mb-3 w-2/3 "
            {...register("salary", createOptions.salary)}
          />
          <span className="text-red-400 ">
            {errors?.salary && errors.salary.message}
          </span>
        </div>
        {/* category */}
        <Field name="categoryId" Name="Category" />
        <Controller
          name="categoryId"
          render={({ field }) => (
            <Select
              {...field}
              options={category}
              className="bg-gray-100  box-border border border-gray-400 text-gray-600  rounded-md w-2/3 p-2 ml-2 mb-3 focus:outline"
            />
          )}
          control={control}
          defaultValue=""
        />

        {/* company */}
        <Field name="companyId" Name="Company" />
        <Controller
          name="companyId"
          render={({ field }) => (
            <Select
              {...field}
              options={company}
              className="bg-gray-100  box-border border border-gray-400 text-gray-600  rounded-md w-2/3 p-2 ml-2 mb-3 focus:outline"
            />
          )}
          control={control}
          defaultValue=""
        />
        <Field name="deadlineDate" Name="Deadline" />

        <Controller
          control={control}
          name="deadlineDate"
          render={({ field }) => (
            <DatePicker
              minDate={new Date()}
              className="bg-gray-100  box-border border border-gray-400 text-gray-600  rounded-md w-2/3 p-2 ml-2 mb-3 focus:outline"
              placeholderText="Select date"
              onChange={(date) => field.onChange(date)}
              selected={field.value}
              dateFormat="yyyy-MM-dd"
            />
          )}
        />
        <div className="flex justify-between items-center content-center p-4">
          <Button icon={faPlusCircle} name="Create" />
        </div>
      </form>
    </div>
  );
};

export default CreateJob;
