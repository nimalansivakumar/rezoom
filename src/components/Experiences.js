const Experiences = ({
                         InputFieldStyle,
                         resumeDetails,
                         setResumeDetails,
                         index,
                     }) => {
    const handleChange = (e, index, inputField) => {
        let arrayCopy = resumeDetails.experiences;

        if (inputField === "company-name") {
            arrayCopy[index].company_name = e.target.value;
        } else if (inputField === "role") {
            arrayCopy[index].role = e.target.value;
        } else if (inputField === "duration") {
            arrayCopy[index].duration = e.target.value;
        } else if (inputField === "job-experience") {
            arrayCopy[index].description = e.target.value;
        }
        setResumeDetails({
            ...resumeDetails,
            experiences: arrayCopy,
        });
    };

    return (

        <div className="border-b-2  border-gray-400" id="experiences-input">
            <input
                type="text"
                className={`${InputFieldStyle} my-2`}
                id={`company-name_${resumeDetails.experiences[index].id}`}
                placeholder="Company Name"
                value={resumeDetails.experiences[index].company_name}
                onChange={(e) => {
                    handleChange(e, index, "company-name")
                }}
            />
            <input
                type="text"
                className={`${InputFieldStyle} my-2`}
                id={`role_${resumeDetails.experiences[index].id}`}
                placeholder="Role"
                value={resumeDetails.experiences[index].role}
                onChange={(e) => {
                    handleChange(e, index, "role")
                }}
            />
            <input
                type="text"
                className={`${InputFieldStyle} my-2`}
                id={`duration_${resumeDetails.experiences[index].id}`}
                placeholder="Duration in years (ex: 2007-2015)"
                value={resumeDetails.experiences[index].duration}
                onChange={(e) => {
                    handleChange(e, index, "duration")
                }}
            />
            <textarea
                type="text"
                className={`${InputFieldStyle} my-2 resize-none`}
                id={`description_${resumeDetails.experiences[index].id}`}
                rows="5"
                placeholder="Job Experience"
                value={resumeDetails.experiences[index].description}
                onChange={(e) => {
                    handleChange(e, index, "job-experience")
                }}
            ></textarea>
        </div>
    );
};

export default Experiences;
