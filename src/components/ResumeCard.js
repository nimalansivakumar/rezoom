import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEdit, FiEye, FiTrash } from "react-icons/fi";
import { deleteResumeInfo } from "../DatabaseFunctions";
import requests from "../APIs/request";

const ResumeCard = ({ resumeInfo, getResumesForDashboard }) => {
  const { RESUME_ID, USER_ID, RESUME_TITLE, DATE_CREATED } = resumeInfo;
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState();

  const toggleOptions = (option) => {
    setShowOptions(option);
  };

  const deleteResume = (user_id, resume_id) => {
    requests.deleteResume(user_id, resume_id).then((response) => {
      console.log("called");
      getResumesForDashboard(user_id);
    });
  };

  return (
    <div
      className="w-1/3 h-64 cursor-pointer shadow-md rounded-md relative m-2 border-4 border-blue-100"
      onMouseOver={() => {
        toggleOptions(true);
      }}
      onMouseLeave={() => {
        toggleOptions(false);
      }}
    >
      {showOptions ? (
        <div className="absolute rounded-md w-full h-full flex flex-row justify-between items-end z-10 transition-all">
          <Link
            to={`/edit/${USER_ID}/update/${RESUME_ID}`}
            className="w-1/2 h-8 flex justify-center items-center rounded-sm text-white m-2  bg-green-400 hover:bg-green-500"
          >
            <button className="">
              <FiEdit className="mx-2" />
            </button>
          </Link>
          <button
            onClick={() => {
              deleteResume(USER_ID, RESUME_ID);
            }}
            className="w-1/2 h-8 flex justify-center items-center rounded-sm text-white m-2  bg-red-400 hover:bg-red-500"
          >
            <FiTrash className="mx-2" />
          </button>
          <Link to={`/edit/${USER_ID}/view/${RESUME_ID}`} className="w-1/2 h-8 flex justify-center items-center rounded-sm text-white m-2  bg-blue-400 hover:bg-blue-500"> 
            <button>
              <FiEye className="mx-2" />
            </button>
          </Link>
        </div>
      ) : null}
      <h2 className="font-man p-3 text-black font-bold text-3xl">
        {RESUME_TITLE}
      </h2>
    </div>
  );
};

export default ResumeCard;
