const Experiences = ({
                         InputFieldStyle,
                         resumeDetails,
                         setResumeDetails,
                         index,
                     }) => {
    const handleChange = (e, index, inputField) => {
        let arrayCopy = resumeDetails.experiences;

        if (inputField === "company-name") {
            arrayCopy[index - 1].company_name = e.target.value;
        } else if (inputField === "role") {
            arrayCopy[index - 1].role = e.target.value;
        } else if (inputField === "duration") {
            arrayCopy[index - 1].duration = e.target.value;
        } else if (inputField === "job-experience") {
            arrayCopy[index - 1].description = e.target.value;
        }
        setResumeDetails({
            ...resumeDetails,
            experiences: arrayCopy,
        });
    };

    return (
        <>{
            resumeDetails.experiences.length > 0 ? <div className="border-b-2  border-gray-400">
                <input
                    type="text"
                    className={`${InputFieldStyle} my-2`}
                    id="Experience"
                    placeholder="Company Name"
                    value={resumeDetails.experiences[index - 1].company_name}
                    onChange={(e) => {
                        handleChange(e, index, "company-name");
                    }}
                />
                <input
                    type="text"
                    className={`${InputFieldStyle} my-2`}
                    id="Experience"
                    placeholder="Role"
                    value={resumeDetails.experiences[index - 1].role}
                    onChange={(e) => {
                        handleChange(e, index, "role");
                    }}
                />
                <input
                    type="text"
                    className={`${InputFieldStyle} my-2`}
                    id="Experience"
                    placeholder="Duration in years (ex: 2007-2015)"
                    value={resumeDetails.experiences[index - 1].duration}
                    onChange={(e) => {
                        handleChange(e, index, "duration");
                    }}
                />
                <textarea
                    type="text"
                    className={`${InputFieldStyle} my-2 resize-none`}
                    id="Experience"
                    rows="5"
                    placeholder="Job Experience"
                    value={resumeDetails.experiences[index - 1].description}
                    onChange={(e) => {
                        handleChange(e, index, "job-experience");
                    }}
                ></textarea>
            </div> : <></>
        }
        </>
    );
};

export default Experiences;
