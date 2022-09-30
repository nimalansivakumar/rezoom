import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FormHanlder from "./components//FormHanlder";
import ResumeControl from "./components/ResumeControl";
import { getResumeInfo } from "./DatabaseFunctions";

const EditResume = ({ user }) => {
  let param = useParams();
  const [currentPageType, setPageType] = useState("");
  const [resumeId, setResumeId] = useState("");
  const [picture, setPicture] = useState();
  // const [resumeDetails, setResumeDetails] = useState({
  //   image_link: "",
  //   name: "",
  //   role: "",
  //   about_me: "",
  //   mobile: "",
  //   email: "",
  //   address: "",
  //   website: "",
  //   skills: [],
  //   experience: [],
  //   education: [],
  //   projects: [],
  //   achievement: [],
  //   interests: [],
  //   languages_known: [],
  // });

  const [resumeDetails, setResumeDetails] = useState({
    image_link: "",
    name: "Nimalan Sivakumar",
    role: "Frontend Developer",
    about_me:
      "An avid developer seeking for opportunities to showcase my skills\nin industry level products with an unique touch that elevates the\ngrowth of my career and the company I work.",
    mobile: "6374571211",
    email: "nimalan1108@gmail.com",
    address: "Erode",
    website: "nimalan.vercel.app",
    skills: [
      "Content Creation",
      "UI Design",
      "JavaScript",
      "ReactJS",
      "NodeJs",
      "ExpressJS",
      "Java",
      "MySQL",
      "MongoDB",
      "Firebase",
    ],
    experience: [
      {
        id: 1,
        companyName: "Zoho Corporation",
        role: "Frontend Developer",
        duration: "2007-2010",
        jobExperience:
          "Contributed to a 15% increase in engagement across Facebook, Instagram and Twitter within my first 4 months at the company\nAnalyzed the company’s existing social media strategy and provided recommendations to the marketing manager",
      },
      {
        id: 2,
        companyName: "Zoho Corporation",
        role: "UI Designer",
        duration: "2010-2015",
        jobExperience:
          "Contributed to a 15% increase in engagement across Facebook, Instagram and Twitter within my first 4 months at the company\nAnalyzed the company’s existing social media strategy and provided recommendations to the marketing manager",
      },
    ],
    education: [
      {
        id: 1,
        institutionName: "Dr.Mahalingam College of Engineering and Technology",
        major: "Computer Science Engineering",
        duration: "2019-2023",
        location: "Pollachi",
      },
      {
        id: 2,
        institutionName: "SSM Lakshmi Ammal Matric Higher Secondary School",
        major: "HSC",
        duration: "2017-2019",
        location: "Namakkal",
      },
      {
        id: 3,
        institutionName: "SSM Lakshmi Ammal Matric Higher Secondary School",
        major: "SSLC",
        duration: "2015-2017",
        location: "Namakkal",
      },
    ],
    projects: [
      {
        id: 1,
        projectName: "Momento",
        desc: "A productivity app to track progress of your projects.",
        link: "https://momento-app.netlify.app/",
      },
      {
        id: 2,
        projectName: "DevConnect",
        desc: "A Social hub for developers and their aspiring works.",
        link: "https://dev-connect.vercel.app/",
      },
    ],
    achievement: [
      {
        id: 1,
        achievement:
          "- Ranked 2nd in #NetlifyXHashnode hackathon conducted by Hashnode",
      },
    ],
    interests: ["Web Development", "Product Designing", "Blogging"],
    languages_known: ["Tamil", "English"],
  });

  useEffect(() => {
    let splits = param.resumeId.split("_");
    setResumeId(splits[1]);

    const fetchResumeInfo = async () => {
      let result = await getResumeInfo(splits[1]);
      setResumeDetails(result);
    };

    if (splits[0] === "update") {
      setPageType("update");
      fetchResumeInfo();
    }
  }, [param.resumeId]);

  return (
    <div className="w-full h-main flex flex-row">
      <div className="w-1/3 h-main bg-white">
        <FormHanlder
          resumeDetails={resumeDetails}
          setResumeDetails={setResumeDetails}
          picture={picture}
          setPicture={setPicture}
        />
      </div>
      <div className="w-2/3 h-main flex flex-col items-center overflow-auto scrollbar-hide">
        <ResumeControl
          user={user}
          picture={picture}
          resumeDetails={resumeDetails}
          resumeId={resumeId}
          currentPageType={currentPageType}
        />
      </div>
    </div>
  );
};

export default EditResume;
