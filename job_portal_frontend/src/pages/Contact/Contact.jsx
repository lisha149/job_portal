import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="bg-slate-100 w-full h-screen content xl:px-8 xs:px-3">
      <div className="bg-slate-300 shadow-md p-4">
        <h1 className="text-gray-500 font-semibold xl:text-3xl  xs:text-xl sm:text-2xl px-7 pt-6 pb-2">
          Contact Us
        </h1>
        <p className="text-gray-500 font-normal xl:text-2xl xs:text-lg px-7 pb-2">
          Take your career to the next level.
        </p>
      </div>
      <div className=" xs:text-sm xs:w-full xs:m-auto xs:my-8 md:w-1/2 xll:w-1/3 px-7 bg-slate-200 md:m-auto shadow-md md:my-16 py-7">
        <div>
          <span className="xs:text-lg xl:text-2xl text-gray-500 mr-3">
            <FontAwesomeIcon icon={faLocationDot} className="pr-3" />
            Gusingal, Lalitpur, Nepal
          </span>
        </div>
        <div className="pt-4">
          <span className="xs:text-lg xl:text-2xl text-gray-500 mr-3 ">
            <FontAwesomeIcon icon={faPhone} className="pr-3" />
            +977-9813253677
          </span>
        </div>
        <div className="pt-4">
          <span className="xs:text-lg xl:text-2xl text-gray-500 mr-3 ">
            <FontAwesomeIcon icon={faEnvelope} className="pr-3" />
            palishashakya@mailinator.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
