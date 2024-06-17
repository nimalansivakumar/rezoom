const Projects = ({
                      InputFieldStyle,
                      resumeDetails,
                      setResumeDetails,
                      index,
                  }) => {
    const handleChange = (e, index, inputField) => {
        let arrayCopy = resumeDetails.projects;

        if (inputField === "project-name") {
            arrayCopy[index].project_name = e.target.value;
        } else if (inputField === "description") {
            arrayCopy[index].description = e.target.value;
        } else if (inputField === "url") {
            arrayCopy[index].url = e.target.value;
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
                placeholder="Project Name"
                value={resumeDetails.projects[index].project_name}
                onChange={(e) => {
                    handleChange(e, index, "project-name");
                }}
            />
            <input
                type="text"
                className={`${InputFieldStyle} my-2`}
                placeholder="Project Description"
                value={resumeDetails.projects[index].description}
                onChange={(e) => {
                    handleChange(e, index, "description");
                }}
            />
            <input
                type="url"
                className={`${InputFieldStyle} my-2`}
                placeholder="URL"
                value={resumeDetails.projects[index].url}
                onChange={(e) => {
                    handleChange(e, index, "url");
                }}
            />
        </div>
    );
};

export default Projects;
