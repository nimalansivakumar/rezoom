const Educations = ({
                        InputFieldStyle,
                        resumeDetails,
                        setResumeDetails,
                        index,
                    }) => {
    const handleChange = (e, index, inputField) => {
        let arrayCopy = resumeDetails.education;

        console.log(arrayCopy);

        if (inputField === "institution-name") {
            arrayCopy[index].school_name = e.target.value;
        } else if (inputField === "major") {
            arrayCopy[index].major = e.target.value;
        } else if (inputField === "year") {
            arrayCopy[index].year = e.target.value;
        } else if (inputField === "location") {
            arrayCopy[index].location = e.target.value;
        }
        setResumeDetails({
            ...resumeDetails,
            education: arrayCopy,
        });
    };
    return (
        <div className="border-b-2  border-gray-400">
            <input
                type="text"
                className={`${InputFieldStyle} my-2`}
                id="Education"
                placeholder="Institution Name"
                value={resumeDetails.education[index].school_name}
                onChange={(e) => {
                    handleChange(e, index, "institution-name");
                }}
            />
            <input
                type="text"
                className={`${InputFieldStyle} my-2`}
                id="Education"
                placeholder="Major"
                value={resumeDetails.education[index].major}
                onChange={(e) => {
                    handleChange(e, index, "major");
                }}
            />
            <input
                type="text"
                className={`${InputFieldStyle} my-2`}
                id="Education"
                placeholder="Duration in years (ex: 2007-2015)"
                value={resumeDetails.education[index].year}
                onChange={(e) => {
                    handleChange(e, index, "year");
                }}
            />
            <input
                type="text"
                className={`${InputFieldStyle} my-2`}
                id="Education"
                placeholder="Location"
                value={resumeDetails.education[index].location}
                onChange={(e) => {
                    handleChange(e, index, "location");
                }}
            />
        </div>
    );
};

export default Educations;
