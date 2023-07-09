import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEdit, FiTrash } from "react-icons/fi";
import { deleteResumeInfo } from "../DatabaseFunctions";
import requests from "../APIs/request";

const ResumeCard = ({resumeInfo, getResumesForDashboard}) => {
  console.log(getResumesForDashboard)
  const { RESUME_ID, USER_ID, RESUME_TITLE, DATE_CREATED } = resumeInfo;
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState();

  const toggleOptions = (option) => {
    setShowOptions(option);
  };

  const deleteResume = (user_id, resume_id) => {
    requests.deleteResume(user_id, resume_id).then(response => {
      console.log("called")
      getResumesForDashboard(user_id);
    });

  };

  return (
    <div
      className="w-60 h-32 cursor-pointer shadow-md rounded-md relative m-2 border-4 border-blue-100 transition-all delay-200 hover:transition-all"
      onMouseOver={() => {
        toggleOptions(true);
      }}
      onMouseLeave={() => {
        toggleOptions(false);
      }}
    >
      {showOptions ? (
        <div className="absolute rounded-md w-full h-full flex flex-row justify-end items-end z-10">
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
        </div>
      ) : null}
      <h2 className="font-man p-3 text-black">{RESUME_TITLE}</h2>
    </div>
  );
};

export default ResumeCard;
