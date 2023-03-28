import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  faEye,
  faPlusCircle,
  faTrash,
  faPencil,
  faFolder
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { deleteJobAction, listJobs } from "./JobActions";
import Button from "../../components/Button";
import { toast, ToastContainer } from "react-toastify";
import {
  BoldestTypography,
  BoldTypography,
  NormalTypography
} from "../../components/Typography";
import { CREATE_JOB } from "../../routes/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "../../components/Loading";
import Pagination from "react-js-pagination";
const Jobs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const jobList = useSelector((state) => state.jobList);
  const { loading, jobs } = jobList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const jobDelete = useSelector((state) => state.jobDelete);
  const { loading: loadingDelete } = jobDelete;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      if (!userInfo) {
        toast.info("Please login as ADMIN");
      }
      dispatch(deleteJobAction(id, navigate));
    }
  };
  const [currentPage, setCurrentPage] = useState(1);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  useEffect(() => {
    dispatch(listJobs(currentPage));
  }, [dispatch, currentPage]);

  return (
    <div className="bg-slate-100 w-full content xl:px-8 xs:px-3">
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

      {userInfo?.data.isAdmin && (
        <div className="float-right m-6">
          <Link to={CREATE_JOB}>
            <Button icon={faPlusCircle} name="Add New Job" />
          </Link>
        </div>
      )}
      <div className="grid md:grid-cols-3 md:gap-4 m-12 xs:grid-cols-1 xs:my-14 xs:w-full xs:mx-0">
        {jobs?.data?.length > 0 &&
          jobs.data.map((job) => {
            return (
              <div
                className="border border-gray-300 border-solid xs:m-4 m-6 bg-slate-200 p-4"
                key={job.id}
              >
                <div>
                  <BoldestTypography title={job.title} />
                </div>
                <Link to={job.Company.website}>
                <span className=" text-blue-600 font-bold  xs:text-base sm:text-lg ">
   {job.Company.name}
    </span>
    </Link>
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
                  <Link to={`${job.id}`}>
                    <Button icon={faEye} name="View Details" />
                  </Link>
                </div>

                {userInfo?.data.isAdmin && (
                  <div>
                    <div className="flex md:mt-12 xll:m-0">
                      <Link to={`${job.id}/applications`}>
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
                        <Link to={`${job.id}/edit`}>
                          <Button icon={faPencil} name="Edit" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
      </div>
      {jobs?.resultPerPage < jobs?.jobCount && (
        <div className="flex justify-center items-center m-4">
          <Pagination
            className="flex"
            activePage={currentPage}
            itemsCountPerPage={jobs?.resultPerPage}
            totalItemsCount={jobs?.jobCount}
            onChange={setCurrentPageNo}
            nextPageText="Next"
            prevPageText="Prev"
            firstPageText="1st"
            lastPageText="Last"
            itemClass="page-item"
            linkClass="page-link"
            activeClass="pageItemActive"
            activeLinkClass="pageLinkActive"
          />
        </div>
      )}
    </div>
  );
};

export default Jobs;
