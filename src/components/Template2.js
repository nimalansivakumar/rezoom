import { FiUser } from "react-icons/fi";

const Template2 = ({ reference, resumeDetails, resumeFont }) => {
  return (
    <div
      className={`w-full h-auto flex items-center justify-center bg-slate-300 ${resumeFont}`}
    >
      <div
        className="w-rw h-rh my-10 bg-white font-man flex"
        id="resume"
        ref={reference}
      >
        <div className="w-1/3 h-full bg-slate-800 flex flex-col justify-start items-center text-white">
          <div className="w-full h-1/5 my-5 flex justify-center items-center">
            <div className="w-44 h-44">
              {resumeDetails.image_url ? (
                <img
                  alt="#"
                  src={resumeDetails.image_url}
                  rel="noreferrer"
                  className="rounded-sm"
                  width={200}
                  height={250}
                />
              ) : (
                <div className="w-full h-full bg-slate-200 rounded-full flex items-center justify-center">
                  <FiUser className="w-10 h-10 stroke-slate-400" />
                </div>
              )}
            </div>
          </div>
          <div className="w-11/12 h-24 text-sm flex flex-col mb-2 items-start justify-around">
            <p>📧 {resumeDetails.email}</p>
            <p>📲 {resumeDetails.mobile}</p>
            <p>📌 {resumeDetails.location}</p>
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
          <div className="w-11/12 h-auto mb-5">
            <h3 className="tracking-widest text-white border-b-2 mb-2 font-bold">
              ABOUT ME
            </h3>
            <div className="">
              <p className="text-sm">{resumeDetails.summary}</p>
            </div>
          </div>
          <div className="w-11/12 h-auto mb-7">
            <h1 className="tracking-widest border-b-2 font-bold">SKILLS</h1>
            <ul className="w-full flex flex-col items-start my-2">
              {resumeDetails.skills.map((skill, key) => (
                <li className="text-sm" key={skill.id}>
                  {skill.skill_name}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-11/12 h-auto mb-7">
            <h1 className="tracking-widest border-b-2 font-bold">INTERESTS</h1>
            <ul className="w-full flex flex-col items-start my-2">
              {resumeDetails.interests.map((interest, key) => (
                <li className="text-sm" key={interest.id}>
                  {interest.interest_name}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-11/12 h-auto mb-7">
            <h1 className="tracking-widest border-b-2 font-bold">
              LANGUAGES KNOWN
            </h1>
            <ul className="w-full flex flex-col items-start my-2">
              {resumeDetails.languages.map((lang, key) => (
                <li className="text-sm" key={lang.id}>
                  {lang.lang_name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-2/3 h-full flex flex-col justify-start items-center">
          <div className="w-11/12 h-28 flex flex-col justify-center items-start">
            <h1 className="text-2xl font-semibold">{resumeDetails.name}</h1>
            <p className="text-lg">{resumeDetails.job_role}</p>
          </div>
          <div className="w-11/12 h-auto mb-3 flex flex-col justify-center items-start">
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
          <div className="w-11/12 h-auto mb-3 flex flex-col justify-center items-start">
            <h1 className="text-slate-400 tracking-widest border-b-2 font-bold">
              PROJECTS
            </h1>
            {resumeDetails.projects.map((project) => (
              <div className="w-full my-2" key={project.id}>
                <h1 className="text-md font-semibold">{project.name}</h1>
                <a href={`${project.url}`} target="_blank" rel="noreferrer">
                  <p className="text-sm">{project.url}</p>
                </a>
                <p className="text-sm my-1">{project.description}</p>
              </div>
            ))}
          </div>
          <div className="w-11/12 h-auto flex flex-col justify-center items-start">
            <h1 className="text-slate-400 tracking-widest border-b-2 font-bold">
              EDUCATION
            </h1>
            {resumeDetails.education.map((edu) => (
              <div className="w-full my-3" key={edu.id}>
                <h1 className="text-md font-semibold my-1">
                  {edu.school_name}
                </h1>
                <div className="w-full h-auto flex flex-row justify-between">
                  <p className="text-sm">{edu.major}</p>
                  <p className="text-sm">{edu.year}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-11/12 h-auto flex flex-col justify-center items-start">
            <h1 className="text-slate-400 tracking-widest border-b-2 font-bold">
              ACHIEVEMENTS
            </h1>
            <ul className="w-11/12 my-3">
              {resumeDetails.achievements.map((ach, key) => (
                <li key={ach.id}>- {ach.achievement_name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template2;
