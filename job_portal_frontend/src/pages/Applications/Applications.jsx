import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Loading from "../../components/Loading";
import {
  BoldestTypography,
  BoldTypography,
  NormalTypography
} from "../../components/Typography";
import {
  deleteApplicationAction,
  listApplications
} from "./applicationActions";

const Applications = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const applicationList = useSelector((state) => state.applicationList);
  const { loading, applications } = applicationList;
  console.log("yesma vako", applications);
  const applicationDelete = useSelector((state) => state.applicationDelete);
  const { loading: loadingDelete, success } = applicationDelete;

  useEffect(() => {
    dispatch(listApplications(id));
  }, [dispatch, id, success]);

  const deleteHandler = (applicationId) => {
    if (window.confirm("Are you sure you want to delete?")) {
      dispatch(deleteApplicationAction(applicationId, navigate));
      if (success) {
        navigate(`/jobs/${id}/applications`);
      }
    }
  };

  return (
    <div className="bg-slate-100 w-full h-screen content">
      <ToastContainer />

      {loading && <Loading />}
      {loadingDelete && <Loading />}

      <div className="grid md:grid-cols-3 sm:grid-cols-2 sm:gap-4 md:gap-4 mt-10 xs:grid-cols-1 xs:my-14 xs:w-full xs:mx-0 xl:px-8 xs:px-3">
        {applications?.length && Array.isArray(applications) ? (
          applications.map((application) => {
            return (
              <div
                className="border border-gray-300 border-solid m-6 xs:m-4 bg-slate-200 px-2 py-3"
                key={application.id}
              >
                <div>
                  <BoldestTypography title={application.Jobs[0].title} />
                </div>
                <div>
                  <BoldTypography title="Applied Date:" />
                  <NormalTypography
                    value={application.createdAt.substring(0, 10)}
                  />
                </div>
                <div>
                  <BoldTypography title="CV: " />
                  <a href={`http://localhost:5000/uploads/${application?.cv}`}>
                    <span className=" text-blue-600 hover:underline xs:text-sm  sm:text-base ">
                      View CV
                    </span>
                  </a>
                </div>
                <div>
                  <BoldTypography title="Cover Letter: " />
                  <a
                    href={`http://localhost:5000/uploads/${application?.coverLetter}`}
                  >
                    <span className=" text-blue-600 hover:underline xs:text-sm  sm:text-base ">
                      View Cover Letter
                    </span>
                  </a>
                </div>

                <div className="float-right my-2 ">
                  <button
                    onClick={() => deleteHandler(`${application.id}`)}
                    className="bg-red-500 hover:bg-red-700 text-white xs:text-sm font-bold sm:py-2 sm:px-6 rounded-full xs:px-3 xs:py-2 sm:text-base"
                  >
                    <span className="sm:text-base xs:text-sm text-white md:mr-3 xs:mr-2">
                      <FontAwesomeIcon icon={faTrash} />
                    </span>
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="m-auto">
            <BoldestTypography title="Noone has applied yet!!!" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Applications;
