const Achievements = ({
  InputFieldStyle,
  resumeDetails,
  setResumeDetails,
  index,
}) => {
  const handleChange = (e, index, inputField) => {
    let arrayCopy = resumeDetails.achievement;

    if (inputField === "achievement") {
      arrayCopy[index - 1].achievement = e.target.value;
    }

    setResumeDetails({
      ...resumeDetails,
      achievement: arrayCopy,
    });
  };
  return (
    <div className="border-b-2  border-gray-400">
      <input
        type="text"
        className={`${InputFieldStyle} my-2`}
        placeholder="Achievement"
        value={resumeDetails.achievement[index - 1].achievement}
        onChange={(e) => {
          handleChange(e, index, "achievement");
        }}
      />
    </div>
  );
};

export default Achievements;
