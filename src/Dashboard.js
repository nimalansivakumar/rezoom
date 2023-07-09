import ResumeCard from "./components/ResumeCard";
import {useEffect, useState} from "react";
import {FiPlusCircle} from "react-icons/fi";
import {Link, useParams} from "react-router-dom";

import {getUserResumes} from "./DatabaseFunctions";
import {useApp} from "./context/appContext";
import requests from "./APIs/request";
import Loading from "./components/Loading";

const Dashboard = () => {
    const {user_id} = useParams();
    const [resumeList, setResumeList] = useState([]);

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
    }

    return (
        <div className="w-100 h-auto flex flex-col justify-center items-center relative">
            <div className="w-11/12 h-28 flex justify-start items-center">
                <h1 className="text-2xl font-semibold">My Collections</h1>
            </div>
            <div
                className="w-11/12 h-96 my-2 flex flex-row justify-start items-center flex-wrap md:flex-row md:items-start lg:flex-row">
                {resumeList.length > 0 ? (
                    <>
                        {resumeList.map((resume) => (
                            <ResumeCard key={resume.RESUME_ID} resumeInfo={resume}
                                        getResumesForDashboard={getResumesForDashboard}/>
                        ))}
                    </>
                ) : null}
                <Link to={`/edit/${user_id}`}>
                    <button
                        className="flex flex-col items-center justify-start"
                        type="button"
                    >
                        <div
                            className="w-60 h-32 flex justify-center items-center cursor-pointer shadow-md bg-white rounded-md relative m-2 border-4 border-blue-100 transition-all hover:transition-all delay-100">
                            <FiPlusCircle className="w-16 h-16 stroke-gray-400"/>
                        </div>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;
