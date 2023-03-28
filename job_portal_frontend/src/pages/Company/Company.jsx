import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  BoldestTypography,
  BoldTypography,
  NormalTypography
} from "../../components/Typography";
import { deleteCompanyAction, listCompany } from "./CompanyActions";
import Loading from "../../components/Loading";
import { ToastContainer } from "react-toastify";
import { CREATE_COMPANY } from "../../routes/routes";
import {
  faPencil,
  faPlusCircle,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Company = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const companyList = useSelector((state) => state.companyList);
  const { loading, companies } = companyList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const companyDelete = useSelector((state) => state.companyDelete);
  const { loading: loadingDelete } = companyDelete;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      dispatch(deleteCompanyAction(id, navigate));
    }
  };

  useEffect(() => {
    dispatch(listCompany());
  }, [dispatch]);

  return (
    <div className="bg-slate-100 w-full h-screen content xl:px-8 xs:px-3">
      <div className="bg-slate-300 shadow-md p-4">
        <h1 className="text-gray-600 font-semibold text-5xl xs:text-xl sm:text-2xl px-7 pt-6 pb-2">
        Job List by Companies
        </h1>
        <p className="text-gray-600 font-normal text-3xl xs:text-lg px-7 pb-2">
        Here is a list of job Companies with job posts in Jobs Nepal. The list shows the latest online job vacancy by companies. Click on specific company to view list of latest jobs posted by hiring companies in Nepal.
        </p>
      </div>
      <ToastContainer />

      {loading && <Loading />}
      {loadingDelete && <Loading />}

      {userInfo?.data.isAdmin && (
        <div className="float-right m-6">
          <Link to={CREATE_COMPANY}>
            <Button icon={faPlusCircle} name="Add New Company" />
          </Link>
        </div>
      )}
      <div className="grid md:grid-cols-2 xll:grid-cols-3 md:gap-4 m-10 xs:grid-cols-1 xs:my-14 xs:w-full xs:mx-0 " >
        {loading && <Loading />}
        {companies?.length &&
          companies.map((company) => {
            return (
              <Link to={`/companies/jobs/${company.id}`} key={company.id}>
                <div
                  className="border border-gray-300 border-solid xl:m-6 xs:m-4 bg-slate-200 p-4 h-60"
                  key={company.id}
                >
                  <div>
                    <BoldestTypography title={company.name} />
                  </div>

                  <div>
                    <BoldTypography title="Website:" />
                    <Link to={company.website}>
                      <NormalTypography value={company.website} />
                    </Link>
                  </div>

                  <div>
                    <BoldTypography title="Contact No.:" />
                    <NormalTypography value={company.contactNumber} />
                  </div>

                  <div>
                    <BoldTypography title="Email:" />

                    <NormalTypography value={company.email} />
                  </div>

                  <div>
                    <BoldTypography title="Location:" />
                    <NormalTypography value={company.location} />
                  </div>

                  {userInfo?.data.isAdmin && (
                    <div className="mt-3">
                      <div className="float-right mr-2 ">
                        <button
                          onClick={() => deleteHandler(`${company.id}`)}
                          className="bg-red-500 hover:bg-red-700 text-white xs:text-sm font-bold sm:py-2 sm:px-6 rounded-full xs:px-3 xs:py-2 sm:text-base"
                        >
                          <span className="sm:text-base xs:text-sm text-white md:mr-3 xs:mr-2">
                            <FontAwesomeIcon icon={faTrash} />
                          </span>
                          Delete
                        </button>
                      </div>
                      <div className="float-right mr-2">
                        <Link to={`${company.id}/edit`}>
                          <Button icon={faPencil} name="Edit" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Company;
