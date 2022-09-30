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
        experience: [
          ...resumeDetails.experience,
          {
            id: resumeDetails.experience.length + 1,
            companyName: "",
            role: "",
            duration: "",
            jobExperience: "",
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
            institutionName: "",
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
            projectName: "",
            desc: "",
            link: "",
          },
        ],
      });
    } else if (fieldName === "achievement") {
      setResumeDetails({
        ...resumeDetails,
        achievement: [
          ...resumeDetails.achievement,
          {
            id: resumeDetails.achievement.length + 1,
            achievement: "",
          },
        ],
      });
    } else if (fieldName === "languages-known") {
      setResumeDetails({
        ...resumeDetails,
        languages_known: [
          ...resumeDetails.languages_known,
          {
            id: resumeDetails.languages_known.length + 1,
            languages_known: "",
          },
        ],
      });
    }
  };

  const removeComponents = (fieldName) => {
    if (fieldName === "experiences") {
      resumeDetails.experience.pop();
      setResumeDetails({
        ...resumeDetails,
        experience: [...resumeDetails.experience],
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
    } else if (fieldName === "achievement") {
      resumeDetails.achievement.pop();
      setResumeDetails({
        ...resumeDetails,
        achievement: [...resumeDetails.achievement],
      });
    } else if (fieldName === "languages-known") {
      resumeDetails.languages_known.pop();
      setResumeDetails({
        ...resumeDetails,
        languages_known: [...resumeDetails.languages_known],
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
    } else if (type === "achievement") {
      resumeDetails.achievement.splice(index, 1);
      setResumeDetails({
        ...resumeDetails,
        achievement: resumeDetails.achievement,
      });
    } else if (type === "languages-known") {
      resumeDetails.languages_known.splice(index, 1);
      setResumeDetails({
        ...resumeDetails,
        languages_known: resumeDetails.languages_known,
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
