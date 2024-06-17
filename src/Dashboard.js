import ResumeCard from "./components/ResumeCard";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import requests from "./APIs/request";

const Dashboard = () => {
  const { user_id } = useParams();
  const [resumeList, setResumeList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getResumesForDashboard(user_id);
    // console.log(resumeList);
  }, []);

  const getResumesForDashboard = (user_id) => {
    requests.getMyResumes(user_id).then((response) => {
      if (response.data) {
        setResumeList(response.data.resumes);
      }
    });
  };

  const logOut = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div className="w-100 h-auto flex flex-col justify-center items-center relative">
      <div className="w-11/12 h-28 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">My Resumes</h1>
        <div className="flex">
          <Link to={`/edit/${user_id}`}>
            <button
              className="w-56 h-10 rounded-md bg-violet-400 text-white transition-all hover:bg-violet-500"
              type="button"
            >
              Create New Resume
            </button>
             
          </Link>
          <div className="mx-2">
            <button
              onClick={() => {
                logOut();
              }}
              className="w-32 h-10 bg-blue-500 text-white rounded-md"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
      <div className="w-11/12 h-96 my-2 flex flex-row justify-start items-center flex-wrap md:flex-row md:items-start lg:flex-row">
        {resumeList.length > 0 ? (
          <>
            {resumeList.map((resume) => (
              <ResumeCard
                key={resume.RESUME_ID}
                resumeInfo={resume}
                getResumesForDashboard={getResumesForDashboard}
              />
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Dashboard;
