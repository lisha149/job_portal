import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { HOME_PAGE } from "../../routes/routes";

const PageNotFound = () => {
  return (
    <main>
      <div className="bg-slate-100 w-full h-screen content">
        <div>
          <h1 className="text-3xl text-center m-10">Page not found</h1>
          <p className="text-2xl text-center">
            Oops! Looks like you followed a bad link. If you think this is a
            problem with us, please tell us.
          </p>
          <div className=" flex justify-center m-20">
            <div className="flex justify-between items-center content-center p-4">
              <Link to={HOME_PAGE}>
                <Button icon={faArrowLeft} name="Go back to Home Page" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PageNotFound;
