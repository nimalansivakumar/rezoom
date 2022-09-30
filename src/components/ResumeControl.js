import React, { useState } from "react";
import template1 from "../templates/template1.jpg";
import template2 from "../templates/template2.jpg";
import ReactToPdf from "react-to-pdf";
import Template2 from "./Template2";
import Template1 from "./Template1";
import { toast } from "react-hot-toast";
import {
  checkResumeNameExists,
  saveResumeDetails,
  updateResumeDetails,
} from "../DatabaseFunctions";
import { useNavigate } from "react-router-dom";

const ResumeControl = ({
  user,
  resumeDetails,
  picture,
  currentPageType,
  resumeId,
}) => {
  const navigate = useNavigate();
  const [openTempateBar, setTemplateBar] = useState(false);
  const [template, setTemplate] = useState(1);
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

  const saveResume = async () => {
    if (resumeName.length > 2) {
      if (await checkResumeNameExists(resumeName)) {
        if (picture) {
          toast.promise(
            saveResumeDetails(
              user.username,
              resumeName,
              resumeDetails,
              picture
            ),
            {
              loading: "Saving Resume...",
              success: <b>Resume Saved!</b>,
              error: <b>Could not save.</b>,
            }
          );
        } else {
          toast("Upload Image");
        }
      } else {
        toast.error("Name already exists");
      }
    } else {
      toast.error("Enter valid name");
    }
  };

  const updateResume = () => {
    if (picture) {
      toast
        .promise(updateResumeDetails(resumeId, resumeDetails, picture), {
          loading: "Updating Resume...",
          success: <b>Updated!</b>,
          error: <b>Could not updated.</b>,
        })
        .then(() => {
          navigate("/");
        });
    } else {
      toast("Upload image");
    }
  };

  return (
    <div className="w-full h-auto">
      <div className="w-full h-20 flex flex-row items-center">
        {currentPageType === "update" ? null : (
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
        )}
        <div className="mx-2">
          {currentPageType === "update" ? (
            <button
              className="w-32 h-10 bg-yellow-500 text-white rounded-sm"
              data-bs-toggle="confirm-save"
              data-bs-target="#confirm-save"
              onClick={() => {
                updateResume();
              }}
            >
              Update
            </button>
          ) : (
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
          )}
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
          <ReactToPdf targetRef={ref} filename={`${resumeName}`}>
            {({ toPdf }) => (
              <button
                className="w-32 h-10 bg-red-500 rounded-sm text-white"
                onClick={toPdf}
              >
                Export as PDF
              </button>
            )}
          </ReactToPdf>
        </div>
      </div>
      {openTempateBar ? (
        <div className="w-full h-96 bg-slate-100 flex flex-row justify-around items-center">
          <div
            className="w-48 hover:border-2 border-blue-400 rounded-sm"
            onClick={() => {
              changeTemplate(1);
            }}
          >
            <img src={template1} alt="#" rel="noreferrer" />
          </div>
          <div
            className="w-48 hover:border-2 border-blue-400 rounded-sm"
            onClick={() => {
              changeTemplate(2);
            }}
          >
            <img src={template2} alt="#" rel="noreferrer" />
          </div>
        </div>
      ) : null}

      {template === 1 ? (
        <Template1
          resumeFont={resumeFont}
          resumeDetails={resumeDetails}
          picture={picture}
          reference={ref}
        />
      ) : template === 2 ? (
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
