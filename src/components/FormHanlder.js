import Form from "./Form";

const FormHanlder = ({
  resumeDetails,
  setResumeDetails,
  picture,
  setPicture,
}) => {
  const addCompontents = (fieldName) => {
    if (fieldName === "experiences") {
      setResumeDetails({
        ...resumeDetails,
        experiences: [
          ...resumeDetails.experiences,
          {
            id: resumeDetails.experiences.length + 1,
            company_name: "",
            role: "",
            duration: "",
            description: "",
          },
        ],
      });
    } else if (fieldName === "education") {
      setResumeDetails({
        ...resumeDetails,
        education: [
          ...resumeDetails.education,
          {
            id: resumeDetails.education.length + 1,
            school_name: "",
            major: "",
            duration: "",
          },
        ],
      });
    } else if (fieldName === "projects") {
      setResumeDetails({
        ...resumeDetails,
        projects: [
          ...resumeDetails.projects,
          {
            id: resumeDetails.projects.length + 1,
            project_name: "",
            description: "",
            url: "",
          },
        ],
      });
    } else if (fieldName === "achievements") {
      setResumeDetails({
        ...resumeDetails,
        achievements: [
          ...resumeDetails.achievements,
          {
            id: resumeDetails.achievements.length + 1,
            achievement_name: "",
          },
        ],
      });
    } else if (fieldName === "languages-known") {
      setResumeDetails({
        ...resumeDetails,
        languages: [
          ...resumeDetails.languages,
          {
            id: resumeDetails.languages.length + 1,
            lang_name: "",
          },
        ],
      });
    }
  };

  const removeComponents = (fieldName) => {
    if (fieldName === "experiences") {
      resumeDetails.experiences.pop();
      setResumeDetails({
        ...resumeDetails,
        experiences: [...resumeDetails.experiences],
      });
    } else if (fieldName === "education") {
      resumeDetails.education.pop();
      setResumeDetails({
        ...resumeDetails,
        education: [...resumeDetails.education],
      });
    } else if (fieldName === "projects") {
      resumeDetails.projects.pop();
      setResumeDetails({
        ...resumeDetails,
        projects: [...resumeDetails.projects],
      });
    } else if (fieldName === "achievements") {
      resumeDetails.achievements.pop();
      setResumeDetails({
        ...resumeDetails,
        achievements: [...resumeDetails.achievements],
      });
    } else if (fieldName === "languages-known") {
      resumeDetails.languages.pop();
      setResumeDetails({
        ...resumeDetails,
        languages: [...resumeDetails.languages],
      });
    }
  };

  const removeTags = (index, type) => {
    // console.log(index);

    //remove the element from the array
    if (type === "skills") {
      resumeDetails.skills.splice(index, 1);
      setResumeDetails({
        ...resumeDetails,
        skills: resumeDetails.skills,
      });
    } else if (type === "interests") {
      resumeDetails.interests.splice(index, 1);
      setResumeDetails({
        ...resumeDetails,
        interests: resumeDetails.interests,
      });
    } else if (type === "achievements") {
      resumeDetails.achievements.splice(index, 1);
      setResumeDetails({
        ...resumeDetails,
        achievements: resumeDetails.achievements,
      });
    } else if (type === "languages-known") {
      resumeDetails.languages.splice(index, 1);
      setResumeDetails({
        ...resumeDetails,
        languages: resumeDetails.languages,
      });
    }
  };

  return (
    <Form
      resumeDetails={resumeDetails}
      setResumeDetails={setResumeDetails}
      addCompontents={addCompontents}
      removeComponents={removeComponents}
      removeTags={removeTags}
      picture={picture}
      setPicture={setPicture}
    />
  );
};

export default FormHanlder;
