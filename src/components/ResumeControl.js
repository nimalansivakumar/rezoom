import React, {useState} from "react";
import template1 from "../templates/template1.jpg";
import template2 from "../templates/template2.jpg";
import Template2 from "./Template2";
import Template1 from "./Template1";
import {toast} from "react-hot-toast";
import {useNavigate, useParams} from "react-router-dom";
import requests from "../APIs/request";
import Utils from "../Utils/Util";
import {firebaseStorage} from "../firebase/firebaseConfig";
import "firebase/storage"

const ResumeControl = ({resumeDetails, picture}) => {
    const navigate = useNavigate();
    const {user_id, resume_id} = useParams();
    const [openTempateBar, setTemplateBar] = useState(false);
    const [template, setTemplate] = useState("tmpl_1");
    const [resumeName, setResumeName] = useState("");
    const [resumeFont, setresumeFont] = useState("");

    const handleOpen = () => {
        setTemplateBar(!openTempateBar);
    };

    const changeTemplate = (templateID) => {
        setTemplate(templateID);
        handleOpen();
    };

    const ref = React.createRef();

    const logOut = () => {
        sessionStorage.clear();
        navigate("/");
    };

    const saveResume = async () => {
        if (resumeName) {
            resumeDetails["font"] = resumeFont;
            resumeDetails["template_id"] = template;
            if (picture) {
                await toast.promise(requests.saveResume(user_id, resumeName, resumeDetails).then(async (response) => {
                    if (response.data.message === "resume_saved") {
                        await uploadProfilePicture(picture, response.data.resume_id);
                    }
                }), {
                    loading: 'Saving...',
                    success: <b>Saved!</b>,
                    error: <b>Could not save.</b>,
                })
            } else {
                toast("Upload profile picture")
            }
        } else {
            toast.error("Name your resume");
        }
    };

    const uploadProfilePicture = async (picture, resume_id) => {
        let storageRef = firebaseStorage.ref(resume_id.toString())
        await storageRef.put(picture);
    };

    return (
        <div className="w-full h-auto">
            <div className="w-full h-20 flex flex-row items-center">
                <div className="mx-2">
                    <input
                        type="text"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="resume-name"
                        placeholder="Resume Name"
                        onChange={(e) => {
                            setResumeName(e.target.value);
                        }}
                    />
                </div>
                <div className="mx-2">
                    <button
                        className="w-32 h-10 bg-green-500 text-white rounded-sm"
                        data-bs-toggle="confirm-save"
                        data-bs-target="#confirm-save"
                        onClick={() => {
                            saveResume();
                        }}
                    >
                        Save
                    </button>
                </div>
                <div className="mx-2">
                    <select
                        onChange={(e) => {
                            setresumeFont("font-" + e.target.value);
                        }}
                        className="w-32 h-10 border-2 outline-none rounded-sm border-blue-500"
                    >
                        <option value="pop">Poppins</option>
                        <option value="inter">Inter</option>
                        <option value="mont">Montserrat</option>
                        <option value="rubik">Rubik</option>
                        <option value="lato">Lato</option>
                    </select>
                </div>
                <div className="mx-2">
                    <button
                        onClick={() => {
                            handleOpen();
                        }}
                        className="w-32 h-10 bg-blue-500 text-white rounded-sm"
                    >
                        Template
                    </button>
                </div>
                <div className="mx-2">
                    <button
                        onClick={() => {
                            logOut();
                        }}
                        className="w-32 h-10 bg-blue-500 text-white rounded-sm"
                    >
                        Log Out
                    </button>
                </div>

                <div className="mx-2">
                    <button
                        className="w-32 h-10 bg-red-500 rounded-sm text-white"
                        onClick={() => {
                            Utils.generatePdf("resume_component", user_id);
                        }}
                    >
                        Export as PDF
                    </button>
                </div>
            </div>
            {openTempateBar ? (
                <div className="w-full h-96 bg-slate-100 flex flex-row justify-around items-center">
                    <div
                        className="w-48 hover:border-2 border-blue-400 rounded-sm"
                        onClick={() => {
                            changeTemplate("tmpl_1");
                        }}
                    >
                        <img src={template1} alt="#" rel="noreferrer"/>
                    </div>
                    <div
                        className="w-48 hover:border-2 border-blue-400 rounded-sm"
                        onClick={() => {
                            changeTemplate("tmpl_2");
                        }}
                    >
                        <img src={template2} alt="#" rel="noreferrer"/>
                    </div>
                </div>
            ) : null}

            {template === "tmpl_1" ? (
                <Template1
                    resumeFont={resumeFont}
                    resumeDetails={resumeDetails}
                    picture={picture}
                    reference={ref}
                />
            ) : template === "tmpl_2" ? (
                <Template2
                    resumeFont={resumeFont}
                    reference={ref}
                    resumeDetails={resumeDetails}
                    picture={picture}
                />
            ) : null}
        </div>
    );
};

export default ResumeControl;
