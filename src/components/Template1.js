import React from "react";
import { FiUser } from "react-icons/fi";

const Template1 = ({ resumeDetails, reference, resumeFont }) => {
  return (
    <div
      className={`w-full h-auto ${resumeFont}  flex items-center justify-center bg-slate-300`}
    >
      <div className="w-rw h-rh my-10 bg-white font-man" id="resume_component">
        <div className="w-full h-1/5 flex flex-row">
          <div className="w-8/12 h-full flex flex-col justify-center items-center">
            <div className="w-5/6 my-5">
              <h1 className="text-2xl font-bold">{resumeDetails.name}</h1>
              <p className="text-lg">{resumeDetails.job_role}</p>
            </div>
            <div
              style={{ gridTemplateColumns: "60% 40%" }}
              className="w-5/6 text-sm grid grid-cols-2 gap-y-2"
            >
              <p className="">📧 {resumeDetails.email}</p>
              <p className="">📲 {resumeDetails.mobile}</p>
              <p>📌 {resumeDetails.address}</p>
              <a
                href={
                  resumeDetails.website.includes("https://")
                    ? resumeDetails.website
                    : `https://${resumeDetails.website}`
                }
                target="_blank"
                rel="noreferrer"
              >
                <p className="">🌐 {resumeDetails.website}</p>
              </a>
            </div>
          </div>
          <div className="w-4/12 h-full flex items-center justify-center">
            <div className="w-28 h-28">
              {resumeDetails.image_link ? (
                <img
                  src={resumeDetails.image_link}
                  alt="#"
                  rel="noreferrer"
                  className="rounded-full"
                  width={100}
                  height={100}
                />
              ) : (
                <div className="w-full h-full bg-slate-200 rounded-full flex items-center justify-center">
                  <FiUser className="w-10 h-10 stroke-slate-400" />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full h-5/6 flex">
          <div className="w-2/3 h-full flex flex-col justify-start items-center">
            <div className="w-5/6 h-auto mb-5">
              <h1 className="text-slate-400 tracking-widest border-b-2 font-bold">
                EXPERIENCE
              </h1>
              {resumeDetails.experiences.map((exp) => (
                <div
                  className="w-full my-2 flex flex-col justify-around"
                  key={exp.id}
                >
                  <h1 className="text-md font-semibold">{exp.role}</h1>
                  <p className="text-sm">{exp.company_name}</p>
                  <p className="text-xs">{exp.duration}</p>
                  <p className="text-sm my-1">{exp.description}</p>
                </div>
              ))}
            </div>
            <div className="w-5/6 h-auto mb-5">
              <h1 className="text-slate-400 tracking-widest border-b-2 font-bold">
                PROJECTS
              </h1>
              {resumeDetails.projects.map((project) => (
                <div className="w-full my-2" key={project.id}>
                  <h1 className="text-md font-semibold">
                    {project.project_name}
                  </h1>
                  <a href={`${project.url}`} target="_blank" rel="noreferrer">
                    <p className="text-sm">{project.url}</p>
                  </a>
                  <p className="text-sm my-1">{project.description}</p>
                </div>
              ))}
            </div>
            <div className="w-5/6 h-96">
              <h1 className="text-slate-400 tracking-widest border-b-2 font-bold">
                EDUCATION
              </h1>

              {resumeDetails.education.map((edu) => (
                <div className="w-full my-2" key={edu.id}>
                  <h1 className="text-md font-semibold">
                    {edu.school_name}
                  </h1>
                  <div className="w-full h-auto flex flex-row justify-between">
                    <p className="text-sm">{edu.major}</p>
                    <p className="text-sm">{edu.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/3 h-full">
            <div className="w-5/6 h-auto mb-7">
              <h1 className="text-slate-400 tracking-widest border-b-2 font-bold">
                ABOUT ME
              </h1>
              <div className="w-full my-2">
                <p className="text-sm">{resumeDetails.summary}</p>
              </div>
            </div>
            <div className="w-5/6 h-auto mb-7">
              <h1 className="text-slate-400 tracking-widest border-b-2 font-bold">
                SKILLS
              </h1>
              <div className="w-full my-2">
                {resumeDetails.skills.map((skill) => (
                  <p className="text-sm" key={skill.id}>
                    {skill.skill_name}
                  </p>
                ))}
              </div>
            </div>
            <div className="w-5/6 h-auto mb-7">
              <h1 className="text-slate-400 tracking-widest border-b-2 font-bold">
                INTERESTS
              </h1>
              <div className="w-full my-2">
                {resumeDetails.interests.map((interest) => (
                  <p className="text-sm" key={interest.id}>
                    {interest.interest_name}
                  </p>
                ))}
              </div>
            </div>
            <div className="w-5/6 h-auto mb-7">
              <h1 className="text-slate-400 tracking-widest border-b-2 font-bold">
                ACHIEVEMENTS
              </h1>
              <ul className="w-full my-2">
                {resumeDetails.achievements.map((ach) => (
                  <li className="text-sm mb-2" key={ach.id}>
                    {ach.achievement_name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-5/6 h-auto mb-7">
              <h1 className="text-slate-400 tracking-widest border-b-2 font-bold">
                LANGUAGES KNOWN
              </h1>
              <ul className="w-full my-2">
                {resumeDetails.languages.map((lang) => (
                  <li className="text-sm mb-2" key={lang.id}>
                    {lang.lang_name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template1;
