import Experiences from "./Experiences";
import Educations from "./Educations";
import Projects from "./Projetcs";
import {FiPlusCircle, FiXCircle, FiCamera} from "react-icons/fi";
import Achievements from "./Achievements";

const InputFieldStyle =
    "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";

const AddButton =
    "w-1/2 font-man bg-blue-500 outline-none my-2 hover:bg-blue-700 text-white font-light py-2 px-4 rounded";

const RemoveButton =
    "w-1/2 font-man bg-red-500 outline-none m-2 hover:bg-red-700 text-white font-light py-2 px-4 rounded";

const Form = ({
                  resumeDetails,
                  setResumeDetails,
                  addCompontents,
                  removeComponents,
                  removeTags,
                  setPicture,
                  picture,
              }) => {
    return (
        <div className="w-full h-full flex items-start justify-center overflow-auto scrollbar-hide" id="resume-form">
            <div className="w-5/6 h-full font-man">
                <div className="w-full h-auto my-3 flex justify-center items-center relative">
                    <div className="w-36 h-36 flex justify-center items-center rounded-full bg-slate-200 relative">
                        {picture || resumeDetails.image_url ? (
                            <img
                                alt="#"
                                src={resumeDetails.image_url}
                                className="w-full h-full rounded-full"
                            />
                        ) : (
                            <FiCamera className="w-10 h-10 absolute stroke-slate-400"/>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            className="w-full h-full cursor-pointer opacity-0 absolute"
                            onChange={(e) => {
                                setPicture(e.target.files[0]);
                                setResumeDetails({
                                    ...resumeDetails,
                                    image_url: URL.createObjectURL(e.target.files[0]),
                                });
                            }}
                        />
                    </div>
                </div>
                <div className="my-3">
                    <label
                        htmlFor="name"
                        className="form-label font-semibold inline-block mb-2 text-gray-700"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        className={`${InputFieldStyle}`}
                        id="name"
                        value={resumeDetails.name}
                        onChange={(e) => {
                            setResumeDetails({...resumeDetails, name: e.target.value});
                        }}
                    />
                </div>
                <div className="my-3">
                    <label
                        htmlFor="job-role"
                        className="form-label font-semibold inline-block mb-2 text-gray-700"
                    >
                        Job Role
                    </label>
                    <input
                        type="text"
                        className={`${InputFieldStyle}   resize-none`}
                        id="job-role"
                        rows="5"
                        value={resumeDetails.job_role}
                        onChange={(e) => {
                            setResumeDetails({...resumeDetails, job_role: e.target.value});
                        }}
                    />
                </div>
                <div className="my-3">
                    <label
                        htmlFor="mobile"
                        className="form-label font-semibold inline-block mb-2 text-gray-700"
                    >
                        Mobile
                    </label>
                    <input
                        type="mobile"
                        className={`${InputFieldStyle}`}
                        id="mobile"
                        value={resumeDetails.mobile}
                        onChange={(e) => {
                            setResumeDetails({...resumeDetails, mobile: e.target.value});
                        }}
                    />
                </div>
                <div className="my-3">
                    <label
                        htmlFor="email"
                        className="form-label font-semibold inline-block mb-2 text-gray-700"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        className={`${InputFieldStyle}`}
                        id="email"
                        value={resumeDetails.email}
                        onChange={(e) => {
                            setResumeDetails({...resumeDetails, email: e.target.value});
                        }}
                    />
                </div>
                <div className="my-3">
                    <label
                        htmlFor="website"
                        className="form-label font-semibold inline-block mb-2 text-gray-700"
                    >
                        Website
                    </label>
                    <input
                        type="website"
                        className={`${InputFieldStyle}`}
                        id="website"
                        value={resumeDetails.website}
                        onChange={(e) => {
                            setResumeDetails({...resumeDetails, website: e.target.value});
                        }}
                    />
                </div>
                <div className="my-3">
                    <label
                        htmlFor="address"
                        className="form-label font-semibold inline-block mb-2 text-gray-700"
                    >
                        Location
                    </label>
                    <input
                        type="text"
                        className={`${InputFieldStyle}`}
                        id="address"
                        value={resumeDetails.location}
                        onChange={(e) => {
                            setResumeDetails({...resumeDetails, location: e.target.value});
                        }}
                    />
                </div>
                <div className="my-3">
                    <label
                        htmlFor="aboutme"
                        className="form-label font-semibold inline-block mb-2 text-gray-700"
                    >
                        About Me
                    </label>
                    <textarea
                        type="text"
                        className={`${InputFieldStyle}   resize-none`}
                        id="aboutme"
                        rows="5"
                        value={resumeDetails.summary}
                        onChange={(e) => {
                            setResumeDetails({...resumeDetails, summary: e.target.value});
                        }}
                    ></textarea>
                </div>
                <div className="my-3">
                    <label
                        htmlFor="skills"
                        className="form-label font-semibold inline-block mb-2 text-gray-700"
                    >
                        Skills
                    </label>
                    <div className="flex">
                        <input type="text" className={`${InputFieldStyle}`} id="skills"/>
                        <button
                            onClick={() => {
                                let skill = document.getElementById("skills").value;

                                if (skill.length > 0) {
                                    setResumeDetails({
                                        ...resumeDetails,
                                        skills: [...resumeDetails.skills, {skill_name: skill}],
                                    });
                                    document.getElementById("skills").value = "";
                                }
                            }}
                            className="bg-blue-500 mx-2 rounded-sm w-1/4 flex justify-center items-center hover:bg-blue-600"
                        >
                            <FiPlusCircle className="w-5 h-5 stroke-white "/>
                        </button>
                    </div>
                    <div className="w-100 h-auto my-3 flex flex-row flex-wrap">
                        {resumeDetails.skills.map((skill, key) => (
                            <div
                                key={key}
                                className="flex justify-center items-center bg-slate-200 m-1 rounded-sm"
                            >
                                <p className="text-black mx-2">{skill.skill_name}</p>
                                <FiXCircle
                                    className="mx-1 cursor-pointer hover:stroke-red-600"
                                    onClick={() => {
                                        removeTags(key, "skills");
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="my-3 flex flex-col">
                    <label
                        htmlFor="Experience"
                        className="form-label font-semibold inline-block mb-2 text-gray-700"
                    >
                        Experience
                    </label>
                    {resumeDetails.experiences.map((component, index) => (
                        <div key={component.id}>
                            <Experiences
                                index={index}
                                resumeDetails={resumeDetails}
                                InputFieldStyle={InputFieldStyle}
                                setResumeDetails={setResumeDetails}
                            />
                        </div>
                    ))}
                    <div className="flex">
                        {resumeDetails.experiences.length <= 2 ? (
                            <button
                                onClick={() => {
                                    addCompontents("experiences");
                                }}
                                className={`${AddButton}`}
                            >
                                Add Experience
                            </button>
                        ) : null}

                        {resumeDetails.experiences.length >= 1 ? (
                            <button
                                onClick={() => {
                                    removeComponents("experiences");
                                }}
                                className={`${RemoveButton}`}
                            >
                                Remove
                            </button>
                        ) : null}
                    </div>
                </div>
                <div className="my-3 flex flex-col">
                    <label
                        htmlFor="Education"
                        className="form-label font-semibold inline-block mb-2 text-gray-700"
                    >
                        Education
                    </label>
                    {resumeDetails.education.map((component, index) => (
                        <div key={component.id}>
                            <Educations
                                index={index}
                                resumeDetails={resumeDetails}
                                InputFieldStyle={InputFieldStyle}
                                setResumeDetails={setResumeDetails}
                            />
                        </div>
                    ))}
                    <div className="flex">
                        {resumeDetails.education.length <= 2 ? (
                            <button
                                onClick={() => {
                                    addCompontents("education");
                                }}
                                className={`${AddButton}`}
                            >
                                Add Education
                            </button>
                        ) : null}

                        {resumeDetails.education.length >= 1 ? (
                            <button
                                onClick={() => {
                                    removeComponents("education");
                                }}
                                className={`${RemoveButton}`}
                            >
                                Remove
                            </button>
                        ) : null}
                    </div>
                </div>
                <div className="my-3 flex flex-col">
                    <label
                        htmlFor="projects"
                        className="form-label font-semibold inline-block mb-2 text-gray-700"
                    >
                        Projects
                    </label>
                    {resumeDetails.projects.map((component, index) => (
                        <div key={component.id}>
                            <Projects
                                index={index}
                                resumeDetails={resumeDetails}
                                InputFieldStyle={InputFieldStyle}
                                setResumeDetails={setResumeDetails}
                            />
                        </div>
                    ))}
                    <div className="flex">
                        {resumeDetails.projects.length <= 2 ? (
                            <button
                                onClick={() => {
                                    addCompontents("projects");
                                }}
                                className={`${AddButton}`}
                            >
                                Add Projects
                            </button>
                        ) : null}
                        {resumeDetails.projects.length >= 1 ? (
                            <button
                                onClick={() => {
                                    removeComponents("projects");
                                }}
                                className={`${RemoveButton}`}
                            >
                                Remove
                            </button>
                        ) : null}
                    </div>
                </div>
                <div className="my-3 flex flex-col">
                    <label
                        htmlFor="certificates"
                        className="form-label font-semibold inline-block mb-2 text-gray-700"
                    >
                        Achievements
                    </label>
                    {resumeDetails.achievements.map((component, index) => (
                        <div key={component.id}>
                            <Achievements
                                index={index}
                                resumeDetails={resumeDetails}
                                InputFieldStyle={InputFieldStyle}
                                setResumeDetails={setResumeDetails}
                            />
                        </div>
                    ))}
                    <div className="flex">
                        {resumeDetails.achievements.length <= 2 ? (
                            <button
                                onClick={() => {
                                    addCompontents("achievement");
                                }}
                                className={`${AddButton}`}
                            >
                                Add Achievements
                            </button>
                        ) : null}
                        {resumeDetails.achievements.length >= 1 ? (
                            <button
                                onClick={() => {
                                    removeComponents("achievement");
                                }}
                                className={`${RemoveButton}`}
                            >
                                Remove
                            </button>
                        ) : null}
                    </div>
                </div>
                <div className="my-3">
                    <label
                        htmlFor="interests"
                        className="form-label font-semibold inline-block mb-2 text-gray-700"
                    >
                        Interests and Hobbies
                    </label>
                    <div className="flex">
                        <input
                            type="text"
                            className={`${InputFieldStyle}`}
                            id="interests"
                        />
                        <button
                            onClick={() => {
                                let interest = document.getElementById("interests").value;

                                if (interest.length > 0) {
                                    setResumeDetails({
                                        ...resumeDetails,
                                        interests: [...resumeDetails.interests, {
                                            id: resumeDetails.interests.length + 1,
                                            interest_name: interest
                                        }],
                                    });
                                    document.getElementById("interests").value = "";
                                }
                            }}
                            className="bg-blue-500 mx-2 rounded-sm w-1/4 flex justify-center items-center hover:bg-blue-600"
                        >
                            <FiPlusCircle className="w-5 h-5 stroke-white "/>
                        </button>
                    </div>
                    <div className="w-100 h-auto my-3 flex flex-row flex-wrap">
                        {resumeDetails.interests.length > 0 && resumeDetails.interests.map((interest, key) => (
                            <div
                                key={key}
                                className="flex justify-center items-center bg-slate-200 m-1 rounded-sm"
                            >
                                <p className="text-black mx-2">{interest.interest_name}</p>
                                <FiXCircle
                                    className="mx-1 cursor-pointer hover:stroke-red-600"
                                    onClick={() => {
                                        removeTags(key, "interests");
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="my-3">
                    <label
                        htmlFor="languages-known"
                        className="form-label font-semibold inline-block mb-2 text-gray-700"
                    >
                        Languages Known
                    </label>
                    <div className="flex">
                        <input
                            type="text"
                            className={`${InputFieldStyle}`}
                            id="languages-known"
                        />
                        <button
                            onClick={() => {
                                let language = document.getElementById("languages-known").value;

                                if (language.length > 0) {
                                    setResumeDetails({
                                        ...resumeDetails,
                                        languages: [
                                            ...resumeDetails.languages,
                                            {
                                                id: resumeDetails.languages.length + 1,
                                                lang_name: language
                                            },
                                        ],
                                    });
                                    document.getElementById("languages-known").value = "";
                                }
                            }}
                            className="bg-blue-500 mx-2 rounded-sm w-1/4 flex justify-center items-center hover:bg-blue-600"
                        >
                            <FiPlusCircle className="w-5 h-5 stroke-white "/>
                        </button>
                    </div>
                    <div className="w-100 h-auto my-3 flex flex-row flex-wrap">
                        {resumeDetails.languages.length > 0
                            ? resumeDetails.languages.map((language, key) => (
                                <div
                                    key={key}
                                    className="flex justify-center items-center bg-slate-200 m-1 rounded-sm"
                                >
                                    <p className="text-black mx-2">{language.lang_name}</p>
                                    <FiXCircle
                                        className="mx-1 cursor-pointer hover:stroke-red-600"
                                        onClick={() => {
                                            removeTags(key, "languages-known");
                                        }}
                                    />
                                </div>
                            ))
                            : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
