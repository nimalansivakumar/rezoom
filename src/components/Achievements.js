const Achievements = ({
  InputFieldStyle,
  resumeDetails,
  setResumeDetails,
  index,
}) => {
  const handleChange = (e, index, inputField) => {
    let arrayCopy = resumeDetails.achievements;

    if (inputField === "achievement") {
      arrayCopy[index - 1].achievements = e.target.value;
    }

    setResumeDetails({
      ...resumeDetails,
      achievements: arrayCopy,
    });
  };
  return (
    <div className="border-b-2  border-gray-400">
      <input
        type="text"
        className={`${InputFieldStyle} my-2`}
        placeholder="Achievement"
        value={resumeDetails.achievements[index - 1].achievement_name}
        onChange={(e) => {
          handleChange(e, index, "achievement");
        }}
      />
    </div>
  );
};

export default Achievements;
