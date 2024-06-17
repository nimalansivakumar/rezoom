import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import FormHanlder from "./components//FormHanlder";
import ResumeControl from "./components/ResumeControl";
import requests from "./APIs/request.js";
import { firebaseStorage } from "./firebase/firebaseConfig";
import Utils from "./Utils/Util";

const EditResume = () => {
  let location = useLocation();
  let { user_id, resume_id } = useParams();
  const [picture, setPicture] = useState();

  useEffect(() => {
    fetchResumeDetails(resume_id);
    if(location.pathname.includes("/update") || location.pathname.includes("/view")){
      Utils.initializeUpdateComponent();
    }
  }, [location]);

  const fetchResumeDetails = (resume_id) => {
    if (location.pathname.includes("/update")) {
      if (resume_id) {
        requests.getResumeDetails(resume_id).then(async (response) => {
          let fetchedResumeDetails = response.data.resume_detail;
         getDownloadURLForProfile(
            fetchedResumeDetails.resume_id
          ).then((image_url) => {
            fetchedResumeDetails["image_url"]  = image_url;
            console.log(fetchedResumeDetails);
            setResumeDetails(fetchedResumeDetails);
          });
        });
      }
    }
  };

  const getDownloadURLForProfile = (resume_id) => {
    return new Promise((resolve, reject) => {
      firebaseStorage
        .ref()
        .child(resume_id.toString())
        .getDownloadURL()
        .then((url) => {
          resolve(url);
        });
    });
  };

  const [resumeDetails, setResumeDetails] = useState({
      image_link: "",
      name: "",
      role: "",
      summary: "",
      mobile: "",
      email: "",
      address: "",
      website: "",
      skills: [],
      experiences: [],
      education: [],
      projects: [],
      achievements: [],
      interests: [],
      languages: [],
  });

  // console.log(resumeDetails)

  // const [resumeDetails, setResumeDetails] = useState({
  //   // resume_id: 834382,
  //   // resume_title: "test 2",
  //   created_date: "2023-03-25T18:30:00.000Z",
  //   name: "Nimalan Sivakumar",
  //   job_role: "Frontend Developer",
  //   mobile: "6374571211",
  //   email: "nimalan1108@gmail.com",
  //   location: "Erode",
  //   website: "nimalan.vercel.app",
  //   summary:
  //     "An avid developer seeking for opportunities to showcase my skills\nin industry level products with an unique touch that elevates the\ngrowth of my career and the company I work.",
  //   meta_info: {
  //     font: "",
  //     template_id: "tmpl_1",
  //   },
  //   skills: [
  //     {
  //       id: 242981,
  //       skill_name: "Content Creation",
  //     },
  //     {
  //       id: 242982,
  //       skill_name: "UI Design",
  //     },
  //     {
  //       id: 242983,
  //       skill_name: "JavaScript",
  //     },
  //     {
  //       id: 242984,
  //       skill_name: "ReactJS",
  //     },
  //     {
  //       id: 242985,
  //       skill_name: "NodeJs",
  //     },
  //     {
  //       id: 242986,
  //       skill_name: "ExpressJS",
  //     },
  //     {
  //       id: 242987,
  //       skill_name: "Java",
  //     },
  //     {
  //       id: 242988,
  //       skill_name: "MySQL",
  //     },
  //     {
  //       id: 242989,
  //       skill_name: "MongoDB",
  //     },
  //     {
  //       id: 242990,
  //       skill_name: "Firebase",
  //     },
  //   ],
  //   interests: [
  //     {
  //       id: 800606,
  //       interest_name: "Web Development",
  //     },
  //     {
  //       id: 800607,
  //       interest_name: "Product Designing",
  //     },
  //     {
  //       id: 800608,
  //       interest_name: "Blogging",
  //     },
  //   ],
  //   achievements: [
  //     {
  //       id: 709857,
  //       achievement_name:
  //         "- Ranked 2nd in #NetlifyXHashnode hackathon conducted by Hashnode",
  //     },
  //   ],
  //   languages: [
  //     {
  //       id: 280639,
  //       lang_name: "Tamil",
  //     },
  //     {
  //       id: 280640,
  //       lang_name: "English",
  //     },
  //   ],
  //   experiences: [
  //     {
  //       id: 392649,
  //       company_name: "Zoho Corporation",
  //       description:
  //         "Contributed to a 15% increase in engagement across Facebook, Instagram and Twitter within my first 4 months at the company\nAnalyzed the company’s existing social media strategy and provided recommendations to the marketing ma",
  //       role: "Frontend Developer",
  //       duration: "2007-2010",
  //     },
  //     {
  //       id: 392650,
  //       company_name: "Zoho Corporation",
  //       description:
  //         "Contributed to a 15% increase in engagement across Facebook, Instagram and Twitter within my first 4 months at the company\nAnalyzed the company’s existing social media strategy and provided recommendations to the marketing ma",
  //       role: "UI Designer",
  //       duration: "2010-2015",
  //     },
  //   ],
  //   education: [
  //     {
  //       id: 710156,
  //       school_name: "Dr.Mahalingam College of Engineering and Technology",
  //       major: "Computer Science Engineering",
  //       year: "2019-2023",
  //       location: "Pollachi",
  //     },
  //     {
  //       id: 710157,
  //       school_name: "SSM Lakshmi Ammal Matric Higher Secondary School",
  //       major: "HSC",
  //       year: "2017-2019",
  //       location: "Namakkal",
  //     },
  //     {
  //       id: 710158,
  //       school_name: "SSM Lakshmi Ammal Matric Higher Secondary School",
  //       major: "SSLC",
  //       year: "2015-2017",
  //       location: "Namakkal",
  //     },
  //   ],
  //   projects: [
  //     {
  //       project_name: "Momento",
  //       description: "A productivity app to track progress of your projects.",
  //       url: "https://momento-app.netlify.app/",
  //     },
  //     {
  //       project_name: "DevConnect",
  //       description: "A Social hub for developers and their aspiring works.",
  //       url: "https://dev-connect.vercel.app/",
  //     },
  //   ],
  // });

  return (
    <div className="w-full h-main flex flex-row">
      <div className="w-1/3 h-screen bg-white">
        <FormHanlder
          resumeDetails={resumeDetails}
          setResumeDetails={setResumeDetails}
          picture={picture}
          setPicture={setPicture}
        />
      </div>
      <div className="w-2/3 h-screen  flex flex-col items-center overflow-auto scrollbar-hide">
        <ResumeControl
          user={user_id}
          picture={picture}
          resumeDetails={resumeDetails}
          resumeId={resume_id}
        />
      </div>
    </div>
  );
};

export default EditResume;
