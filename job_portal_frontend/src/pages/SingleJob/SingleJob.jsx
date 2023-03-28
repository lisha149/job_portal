import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { singleJob } from "./SingleJobActions";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  BoldestTypography,
  BoldTypography,
  NormalTypography
} from "../../components/Typography";
import Loading from "../../components/Loading";
import { ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SingleJob = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const jobDetails = useSelector((state) => state.jobDetails);
  const { loading, job } = jobDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(singleJob(id));
  }, [id, dispatch]);

  return (
    <div className="bg-slate-100 w-full h-screen content xl:px-8 xs:px-3">
      {loading && <Loading />}
      <ToastContainer />
      <div className="shadow-md p-8 mx-20 my-6 xs:mx-2" key={job?.id}>
        <div className="pb-4 px-1">
          <BoldestTypography title={job?.title} />
        </div>

        <div className="p-2 xs:p-1">
          <div className="pb-3">
            <Link to={job?.Company?.website}>
              <span className="text-blue-600 font-bold xs:text-base sm:text-lg md:text-xl ">
                {job?.Company?.name}
              </span>
            </Link>
          </div>
          <div className="pb-1">
            <BoldTypography title="Experience:" />
            <NormalTypography value={job?.experience} />
          </div>

          <div className="pb-1">
            <BoldTypography title="Requirements:" />
            <NormalTypography value={job?.vacancyNumber} />
          </div>
          <div className="pb-1">
            <BoldTypography title="Status:" />
            <NormalTypography value={job?.status} />
          </div>

          <div className="pb-1">
            <BoldTypography title="Salary:" />
            <NormalTypography value={job?.salary} />
          </div>
          <div className="pb-1">
            <BoldTypography title="Description:" />
            <NormalTypography value={job?.description} />
          </div>
          <div className="pb-1">
            <BoldTypography title="Deadline Date:" />
            <NormalTypography value={job?.deadlineDate} />
          </div>

          {userInfo?.data?.isAdmin === true ? null : (
            <div className="flex justify-end">
              <Link to={`/jobs/${job?.id}/apply-job`}>
                <button
                  className="bg-slate-500 hover:bg-slate-700  text-white xs:text-sm font-bold sm:py-2 sm:px-6 rounded-full xs:px-3 xs:py-2 sm:text-base"
                  disabled={job?.status == "Inactive"}
                >
                  <span className="sm:text-base text-white md:mr-3 xs:text-sm xs:mr-2">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  Apply Now
                </button>{" "}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
