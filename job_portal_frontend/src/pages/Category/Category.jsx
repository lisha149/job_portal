import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  faPencil,
  faPlusCircle,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { BoldestTypography } from "../../components/Typography";
import { deleteCategoryeAction, listCategory } from "./CategoryActions";
import { CREATE_CATEGORY } from "../../routes/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer } from "react-toastify";
import Loading from "../../components/Loading";

const Category = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categoryList = useSelector((state) => state.categoryList);
  const { loading, categories } = categoryList;

  const categoryDelete = useSelector((state) => state.categoryDelete);
  const { loading: loadingDelete } = categoryDelete;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      dispatch(deleteCategoryeAction(id, navigate));
    }
  };

  useEffect(() => {
    dispatch(listCategory());
  }, [dispatch]);

  return (
    <div className="bg-slate-100 w-full h-screen content xl:px-8 xs:px-3">
       <div className="bg-slate-300 shadow-md p-4">
        <h1 className="text-gray-600 font-semibold text-5xl xs:text-xl sm:text-2xl px-7 pt-6 pb-2">
        Job List by Categories
        </h1>
        <p className="text-gray-600 font-normal text-3xl xs:text-lg px-7 pb-2">
        Here is a list of job categories with job posts in Jobs Nepal. The list shows the latest online job vacancy by categories. Click on specific job category to view list of latest jobs posted by hiring companies in Nepal.
        </p>
      </div>
      <ToastContainer />

      {loading && <Loading />}
      {loadingDelete && <Loading />}

      {userInfo?.data.isAdmin && (
        <div className="float-right m-4">
          <Link to={CREATE_CATEGORY}>
            <Button icon={faPlusCircle} name="Add New Category" />
          </Link>
        </div>
      )}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 sm:gap-4 md:gap-4 mt-10 xs:grid-cols-1 xs:my-14 xs:w-full xs:mx-0 ">
        {" "}
        {categories?.length &&
          categories.map((category) => {
            return (
              <Link to={`/categories/jobs/${category.id}`} key={category.id}>
                <div
                  className="border border-gray-300 border-solid m-6 xs:m-4 bg-slate-200 px-4 pb-14 pt-7 hover:scale-105 ease-out duration-300"
                  key={category.id}
                >
                  <div>
                    <BoldestTypography title={category.name} />
                  </div>

                  {userInfo?.data.isAdmin && (
                    <div className=" my-3">
                      <div className="float-right ">
                        <button
                          onClick={() => deleteHandler(`${category.id}`)}
                          className="bg-red-500 hover:bg-red-700 text-white xs:text-sm font-bold sm:py-2 sm:px-6 rounded-full xs:px-3 xs:py-2 sm:text-base"
                        >
                          <span className="sm:text-base xs:text-sm text-white md:mr-3 xs:mr-2">
                            <FontAwesomeIcon icon={faTrash} />
                          </span>
                          Delete
                        </button>
                      </div>
                      <div className="float-right mr-2">
                        <Link to={`${category.id}/edit`}>
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

export default Category;
