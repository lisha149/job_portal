import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useForm } from "react-hook-form";
import Field from "../../components/Field";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { createCategoryAction, listCategory } from "./CategoryActions";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

const CreateCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categoryCreate = useSelector((state) => state.categoryCreate);
  const { loading } = categoryCreate;

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const createOptions = {
    name: {
      required: " ***Required"
    }
  };
  const onFormSubmit = (data) => {
    dispatch(createCategoryAction(data, navigate));
  };

  useEffect(() => {
    dispatch(listCategory());
  }, [dispatch]);

  return (
    <div className="bg-slate-100 w-full h-screen content">
      <form
        className="xl:w-1/2 xs:w-full xs:p-5 p-10 bg-slate-200 m-auto shadow-md my-16"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <ToastContainer />
        {loading && <Loading />}
        <h1 className="xs:text-xl lg:text-2xl font-bold text-gray-700 p-4">
          Add Category
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
        <div className="flex justify-between items-center content-center p-4">
          <Button icon={faPlusCircle} name="Create" />
        </div>
      </form>
    </div>
  );
};

export default CreateCategory;
