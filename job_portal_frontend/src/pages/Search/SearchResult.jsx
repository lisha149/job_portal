import { faEye, faFolder, faPencil, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useForm } from 'react-hook-form';
import { Link, useParams,useNavigate } from "react-router-dom";
import { BoldestTypography, BoldTypography, NormalTypography } from '../../components/Typography';
import Button from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteJobAction } from '../Jobs/JobActions';

const SearchResult = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [searchResults, setSearchResults] = useState();
  const [error, setError] = useState(false);
   
      const {
        register,
        handleSubmit,
      } = useForm();

      const onFormSubmit=(data)=>{
        navigate(`/search/${data.job}`)
        window.location.reload()
      }

      const deleteHandler = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
          dispatch(deleteJobAction(id, navigate));
        }
      };
      const {query} = useParams()

      useEffect(() => {
        const searchJob = async () => {
          try {
            const  result = await axios.get(`http://localhost:5000/api/v1/public/search?job=${query}`); 
            setSearchResults(result.data.data);  
            } catch (error) {
             setError(error.response?.data?.message);
             toast.error(error)
             }
            };
            searchJob();
           }, [error]);
    
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
                <button className="bg-slate-500 hover:bg-slate-700  text-white xs:text-sm font-bold p-2 sm:text-base rounded-md">
          <span className="text-bold text-white m-2">
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </button>
        </form>
            </section>
          </div>
          </div> 
          <div className='w-1/2 p-6'>
          {searchResults?.length && Array.isArray(searchResults) ? (searchResults.map((searchResult) => 
        {
          return(<div className="border border-gray-300 border-solid xs:m-4 m-6 bg-slate-200 pt-4 pb-16 px-4"
          key={searchResult.id}>
           <div>
                  <BoldestTypography title={searchResult.title} />
                </div>
               
                <div>
                  <BoldTypography title="Experience:" />
                  <NormalTypography value={searchResult.experience} />
                </div>

                <div>
                  <BoldTypography title="Requirements:" />
                  <NormalTypography value={searchResult.vacancyNumber} />
                </div>
                <div>
                  <BoldTypography title="Status:" />
                  <NormalTypography value={searchResult.status} />
                </div>
                <div className="float-right">
                  <Link to={`/jobs/${searchResult.id}`}>
                    <Button icon={faEye} name="View Details" />
                  </Link>
                </div>

                {userInfo?.data.isAdmin && (
                  <div>
                    <div className="flex md:mt-12 xll:m-0">
                      <Link to={`/jobs/${searchResult.id}/applications`}>
                        <Button icon={faFolder} name="Applications" />
                      </Link>
                    </div>
                    <div className="flex xs:gap-2 md:gap-4 mt-2">
                      <div className="float-right">
                        <button
                          onClick={() => deleteHandler(`${searchResult.id}`)}
                          className="bg-red-500 hover:bg-red-700 text-white xs:text-sm font-bold sm:py-2 sm:px-6 rounded-full xs:px-3 xs:py-2 sm:text-base"
                        >
                          <span className="sm:text-base xs:text-sm text-white md:mr-3 xs:mr-2">
                            <FontAwesomeIcon icon={faTrash} />
                          </span>
                          Delete
                        </button>
                      </div>
                      <div>
                      <Link to={`/jobs/${searchResult.id}/edit`}>
                          <Button icon={faPencil} name="Edit" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
        </div>)
        })):(
          <div className="p-6">
              <span className=" text-gray-700 font-bold xs:text-base sm:text-lg md:text-xl flex">
              Sorry !  There are no jobs matching your search.
            </span>
            <span className=" text-gray-600 font-bold xs:text-base sm:text-lg md:text-xl ">
              Please try again later.
            </span>
          </div>
        )}
          </div>
          </div>
         ) 
}

export default SearchResult;
