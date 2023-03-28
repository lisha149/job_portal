import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { apply } from "./ApplyActions";
import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Field from "../../components/Field";
import Loading from "../../components/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Apply = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const userJobApply = useSelector((state) => state.userJobApply);
  const { error, jobInfo, success, loading } = userJobApply;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const applyOptions = {
    cv: {
      required: " ***Required",
    },
    coverLetter: {
      required: " ***Required",
    },
  };

  const onFormSubmit = (data) => {
    dispatch(apply(data, id));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (success) {
      toast.success("Application Applied Succesfully!");
      setTimeout(() => {
        navigate("/jobs")
        }, "2000");
    }
    if (!userInfo) {
      toast.warning("Please login to apply for job");
      setTimeout(() => {
      navigate("/login")
      }, "2000");
    }
  }, [error, jobInfo, success, userInfo]);

  return (
    <div className="bg-slate-100 w-full h-screen content">
    
      <form
        className="xl:w-1/2 xs:w-full xs:p-5 p-10 bg-slate-200 m-auto shadow-md my-16"
        onSubmit={handleSubmit(onFormSubmit)}
      >

        <ToastContainer />
          {loading && <Loading />}
        <h1 className="xs:text-xl lg:text-2xl font-bold text-gray-700 p-4">
          Apply
        </h1>

        {/* cv */}

        <Field name="cv" Name="CV" />

        <div>
          <input
            type="file"
            name="cv"
            className="bg-gray-100  box-border border border-gray-400 text-gray-600 p-2 rounded-md focus:outline ml-3 mb-3 w-2/3 "
            {...register("cv", applyOptions.cv)}
          />
          <span className="text-red-400 ">
            {errors?.cv && errors.cv.message}
          </span>
        </div>

        {/* cover letter */}

        <Field name="coverLetter" Name="Cover Letter" />

        <div>
          <input
            type="file"
            name="coverLetter"
            className="bg-gray-100  box-border border border-gray-400 text-gray-600 p-2 rounded-md focus:outline ml-3 mb-3 w-2/3 "
            {...register("coverLetter", applyOptions.coverLetter)}
          />
          <span className="text-red-400 ">
            {errors?.coverLetter && errors.coverLetter.message}
          </span>
        </div>

        <div className="flex justify-between items-center content-center p-4">
        <button disabled={!userInfo} className="bg-slate-500 hover:bg-slate-700  text-white xs:text-sm font-bold sm:py-2 sm:px-6 rounded-full xs:px-3 xs:py-2 sm:text-base">
      <span className="sm:text-base text-white md:mr-3 xs:text-sm xs:mr-2">
        <FontAwesomeIcon icon={faEnvelopeCircleCheck}/>
      </span>
     Apply Now
    </button>
        </div>


      </form>
    </div>
  );
};

export default Apply;
