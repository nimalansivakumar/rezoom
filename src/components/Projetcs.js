const Projects = ({
  InputFieldStyle,
  resumeDetails,
  setResumeDetails,
  index,
}) => {
  const handleChange = (e, index, inputField) => {
    let arrayCopy = resumeDetails.projects;

    if (inputField === "project-name") {
      arrayCopy[index - 1].projectName = e.target.value;
    } else if (inputField === "desc") {
      arrayCopy[index - 1].desc = e.target.value;
    } else if (inputField === "url") {
      arrayCopy[index - 1].link = e.target.value;
    }
    setResumeDetails({
      ...resumeDetails,
      projects: arrayCopy,
    });
  };

  return (
    <div className="border-b-2  border-gray-400">
      <input
        type="text"
        className={`${InputFieldStyle} my-2`}
        id="projects"
        placeholder="Project Name"
        value={resumeDetails.projects[index - 1].projectName}
        onChange={(e) => {
          handleChange(e, index, "project-name");
        }}
      />
      <input
        type="text"
        className={`${InputFieldStyle} my-2`}
        id="projects"
        placeholder="Project Description"
        value={resumeDetails.projects[index - 1].desc}
        onChange={(e) => {
          handleChange(e, index, "desc");
        }}
      />
      <input
        type="url"
        className={`${InputFieldStyle} my-2`}
        id="projects"
        placeholder="URL"
        value={resumeDetails.projects[index - 1].link}
        onChange={(e) => {
          handleChange(e, index, "url");
        }}
      />
    </div>
  );
};

export default Projects;
