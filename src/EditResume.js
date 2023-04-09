import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import FormHanlder from "./components//FormHanlder";
import ResumeControl from "./components/ResumeControl";
import requests from "./APIs/request.js"
import {firebaseStorage} from "./firebase/firebaseConfig";
import Utils from "./Utils/Util";

const EditResume = () => {
    let location = useLocation();
    let {user_id, resume_id} = useParams();
    const [picture, setPicture] = useState();

    useEffect(() => {
        fetchResumeDetails(resume_id);
    },[]);


    const fetchResumeDetails = (resume_id) => {
        if (location.pathname.includes("/update")) {
            if (resume_id) {
                requests.getResumeDetails(resume_id).then(async (response) => {
                    let fetchedResumeDetails = response.data.resume_detail
                    // fetchedResumeDetails["image_url"] = await getDownloadURLForProfile(fetchedResumeDetails.resume_id)
                    setResumeDetails(fetchedResumeDetails);
                })
            }
        }
    }

    const getDownloadURLForProfile = async (resume_id) => {
        let image_link;
        await firebaseStorage.ref().child(resume_id.toString()).getDownloadURL().then(url => {
            image_link = url;
        })
        return image_link;
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
    //     image_link: "",
    //     name: "Nimalan Sivakumar",
    //     role: "Frontend Developer",
    //     about_me:
    //         "An avid developer seeking for opportunities to showcase my skills\nin industry level products with an unique touch that elevates the\ngrowth of my career and the company I work.",
    //     mobile: "6374571211",
    //     email: "nimalan1108@gmail.com",
    //     location: "Erode",
    //     website: "nimalan.vercel.app",
    //     skills: [
    //         "Content Creation",
    //         "UI Design",
    //         "JavaScript",
    //         "ReactJS",
    //         "NodeJs",
    //         "ExpressJS",
    //         "Java",
    //         "MySQL",
    //         "MongoDB",
    //         "Firebase",
    //     ],
    //     experiences: [
    //         {
    //             id: 1,
    //             company_name: "Zoho Corporation",
    //             role: "Frontend Developer",
    //             duration: "2007-2010",
    //             description:
    //                 "Contributed to a 15% increase in engagement across Facebook, Instagram and Twitter within my first 4 months at the company\nAnalyzed the company’s existing social media strategy and provided recommendations to the marketing manager",
    //         },
    //         {
    //             id: 2,
    //             company_name: "Zoho Corporation",
    //             role: "UI Designer",
    //             duration: "2010-2015",
    //             description:
    //                 "Contributed to a 15% increase in engagement across Facebook, Instagram and Twitter within my first 4 months at the company\nAnalyzed the company’s existing social media strategy and provided recommendations to the marketing manager",
    //         },
    //     ],
    //     education: [
    //         {
    //             id: 1,
    //             school_name: "Dr.Mahalingam College of Engineering and Technology",
    //             major: "Computer Science Engineering",
    //             duration: "2019-2023",
    //             location: "Pollachi",
    //         },
    //         {
    //             id: 2,
    //             school_name: "SSM Lakshmi Ammal Matric Higher Secondary School",
    //             major: "HSC",
    //             duration: "2017-2019",
    //             location: "Namakkal",
    //         },
    //         {
    //             id: 3,
    //             school_name: "SSM Lakshmi Ammal Matric Higher Secondary School",
    //             major: "SSLC",
    //             duration: "2015-2017",
    //             location: "Namakkal",
    //         },
    //     ],
    //     projects: [
    //         {
    //             id: 1,
    //             project_name: "Momento",
    //             description: "A productivity app to track progress of your projects.",
    //             url: "https://momento-app.netlify.app/",
    //         },
    //         {
    //             id: 2,
    //             project_name: "DevConnect",
    //             description: "A Social hub for developers and their aspiring works.",
    //             url: "https://dev-connect.vercel.app/",
    //         },
    //     ],
    //     achievements: [
    //         {
    //             id: 1,
    //             achievement_name:
    //                 "- Ranked 2nd in #NetlifyXHashnode hackathon conducted by Hashnode",
    //         },
    //     ],
    //     interests: ["Web Development", "Product Designing", "Blogging"],
    //     languages: ["Tamil", "English"],
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
