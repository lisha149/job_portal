import React from "react";
import { faSearch, faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { LOGIN_PAGE, SIGNUP_PAGE } from "../../routes/routes";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Home = () => {
  const navigate=useNavigate()
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const onFormSubmit=(data)=>{
    navigate(`/search/${data.job}`)
  }
  const {
    register,
    handleSubmit,
  } = useForm();

  return (
    <div className="bg-slate-100 w-full h-screen content">
  
      <div className="bg-slate-300 shadow-md p-4">
      <div className="float-right text-right">
        <p className="text-blue-900 font-bold md:text-2xl xs:text-lg px-7  pt-6 pb-2">
        Choose a job you love, and you will never</p>
        <p className="text-blue-900 font-bold md:text-2xl xs:text-lg px-7 pb-2">
          have to work a day in your life.
        </p>
        </div>
        <div>
        <h1 className="text-gray-600 font-semibold text-5xl xs:text-xl sm:text-2xl px-7 pt-6">
        Find jobs, vacancy, career online.
        </h1> 
        <section id="search">
          
    <form className="px-7 pt-3 pb-2" onSubmit={handleSubmit(onFormSubmit)}>
    <input type="search" name="job" placeholder="Search by Job Title"  className="bg-gray-100  box-border border border-gray-400 text-gray-600 p-2 rounded-md focus:outline  mr-2 w-1/4"
            {...register("job")}/>
            <button className="bg-slate-500 hover:bg-slate-700  text-white xs:text-sm font-bold p-2 sm:text-base rounded-md" >
      <span className="text-bold text-white m-2">
        <FontAwesomeIcon icon={faSearch} />
      </span>
    </button>
    </form>
        </section>
      </div>
      </div> 

      <h1 className="text-5xl xs:text-2xl font-bold text-center text-gray-500 pt-24">
        Create A Better Future For Yourself
      </h1>
      <h2 className="text-2xl xs:text-xl font-semibold text-center text-gray-500 pt-4">
        We Can Help You Succeed
      </h2>
      <p className="text-lg xs:text-base font-semibold text-center text-gray-500 pt-2">
        Join The Best. Be The Best.
      </p>
      {!userInfo && (
        <div className="pt-16 flex items-center justify-center gap-6">
          <Link to={LOGIN_PAGE}>
            <Button icon={faUser} name="Login" />
          </Link>
          <Link to={SIGNUP_PAGE}>
            <Button icon={faUserPlus} name="Signup" />
          </Link>
        </div>
      )}
      </div>
     ) 
};

export default Home;
