import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  faEye,
  faTrash,
  faPencil,
  faFolder,
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteJobAction } from "./JobActions";
import Button from "../../components/Button";
import { ToastContainer } from "react-toastify";
import {
  BoldestTypography,
  BoldTypography,
  NormalTypography
} from "../../components/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "../../components/Loading";
import { listJobByCompany } from "../Company/CompanyActions";
import { COMPANY_PAGE } from "../../routes/routes";

const CompanyJob = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const jobListByCompany = useSelector((state) => state.jobListByCompany);
  const { loading, jobs } = jobListByCompany;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const jobDelete = useSelector((state) => state.jobDelete);
  const { loading: loadingDelete } = jobDelete;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      dispatch(deleteJobAction(id, navigate));
    }
  };
  useEffect(() => {
    dispatch(listJobByCompany(id));
  }, [dispatch, id]);

  return (
    <div className="bg-slate-100 w-full h-screen content xl:px-8 xs:px-3">
       <div className="bg-slate-300 shadow-md p-4">
        <h1 className="text-gray-600 font-semibold text-5xl xs:text-xl sm:text-2xl px-7 pt-6 pb-2">
        Job List 
        </h1>
        <p className="text-gray-600 font-normal text-3xl xs:text-lg px-7 pb-2">
        Here is a list of job list with job posts in Jobs Nepal. The list shows the latest online job vacancy. Click on view details to apply for jobs posted by hiring companies in Nepal.
        </p>
      </div>
      <ToastContainer />

      {loading && <Loading />}
      {loadingDelete && <Loading />}

      <div className="grid md:grid-cols-3 md:gap-4 m-12 xs:grid-cols-1 xs:my-14 xs:w-full xs:mx-0">
        {jobs?.length && Array.isArray(jobs) ? (
          jobs.map((job) => {
            return (
              <div
                className="border border-gray-300 border-solid xs:m-4 m-6 bg-slate-200 p-4"
                key={job.id}
              >
                <div>
                  <BoldestTypography title={job.title} />
                </div>
              <div>
                  <BoldTypography title="Experience:" />
                  <NormalTypography value={job.experience} />
                </div>

                <div>
                  <BoldTypography title="Requirements:" />
                  <NormalTypography value={job.vacancyNumber} />
                </div>
                <div>
                  <BoldTypography title="Status:" />
                  <NormalTypography value={job.status} />
                </div>
                <div className="float-right">
                  <Link to={`/jobs/${job.id}`}>
                    <Button icon={faEye} name="View Details" />
                  </Link>
                </div>

                {userInfo?.data.isAdmin && (
                  <div>
                    <div className="flex md:mt-12 xll:m-0">
                      <Link to={`/jobs/${job.id}/applications`}>
                        <Button icon={faFolder} name="Applications" />
                      </Link>
                    </div>
                    <div className="flex xs:gap-2 md:gap-4 mt-2">
                      <div className="float-right">
                        <button
                          onClick={() => deleteHandler(`${job.id}`)}
                          className="bg-red-500 hover:bg-red-700 text-white xs:text-sm font-bold sm:py-2 sm:px-6 rounded-full xs:px-3 xs:py-2 sm:text-base"
                        >
                          <span className="sm:text-base xs:text-sm text-white md:mr-3 xs:mr-2">
                            <FontAwesomeIcon icon={faTrash} />
                          </span>
                          Delete
                        </button>
                      </div>
                      <div>
                        <Link to={`/jobs/${job.id}/edit`}>
                          <Button icon={faPencil} name="Edit" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="m-auto">
          <span className=" text-gray-700 font-bold xs:text-base sm:text-lg md:text-xl flex justify-center">
          No Job Avaailable Right Now!!!
        </span>
        <div className=" flex justify-center m-10">
        <div className="flex justify-between items-center content-center p-4">
          <Link to={COMPANY_PAGE}>
            <Button icon={faArrowLeft} name="Go back" />
          </Link>
        </div>
      </div>
      </div>
        )}
      </div>
    </div>
  );
};

export default CompanyJob;
