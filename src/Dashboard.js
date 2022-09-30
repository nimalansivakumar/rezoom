import ResumeCard from "./components/ResumeCard";
import { useEffect, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

import { getUserResumes } from "./DatabaseFunctions";

const Dashboard = ({ user }) => {
  const [resumeList, setResumeList] = useState([]);

  useEffect(() => {
    const fetchUserResumes = async () => {
      let list = await getUserResumes(user.username);
      setResumeList(list);
    };
    fetchUserResumes();
  }, []);

  return (
    <div className="w-100 h-auto flex flex-col justify-center items-center relative">
      <div className="w-11/12 h-28 flex justify-start items-center">
        <h1 className="text-2xl font-semibold">My Collections</h1>
      </div>
      <div className="w-11/12 h-96 my-2 flex flex-col justify-start items-center flex-wrap md:flex-row md:items-start lg:flex-row">
        {resumeList.map((val, key) => (
          <ResumeCard key={key} resumeInfo={val} />
        ))}
        <Link to={`/edit/${user.username}`}>
          <button
            className="flex flex-col items-center justify-start"
            type="button"
          >
            <div className="w-56 h-32 flex justify-center items-center cursor-pointer shadow-md bg-white rounded-md relative m-2 border-4 border-blue-100 transition-all hover:transition-all delay-100">
              <FiPlusCircle className="w-16 h-16 stroke-gray-400" />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
