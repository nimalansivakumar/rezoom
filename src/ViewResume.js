import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import requests from "./APIs/request";
import { firebaseStorage } from "./firebase/firebaseConfig";
import Template1 from "./components/Template1";
import Template2 from "./components/Template2";

const ViewResume = () => {
  const [resumeDetails, setResumeDetails] = useState({});
  const { user_id, resume_id } = useParams();

  useEffect(() => {
    fetchResumeDetails(resume_id);
  }, []);

  const fetchResumeDetails = (resume_id) => {
    if (resume_id) {
      requests.getResumeDetails(resume_id).then(async (response) => {
        let fetchedResumeDetails = response.data.resume_detail;
        getDownloadURLForProfile(fetchedResumeDetails.resume_id).then(
          (image_url) => {
            fetchedResumeDetails["image_url"] = image_url;
            console.log(fetchedResumeDetails);
            setResumeDetails(fetchedResumeDetails);
          }
        );
      });
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
  return (
    <div className="w-full h-auto flex justify-center items-center">
      {resumeDetails.meta_info ? (
        resumeDetails.meta_info.template_id == "tmpl_1" ? (
          <Template1
            resumeDetails={resumeDetails}
          />
        ) : (
          <Template2
            resumeDetails={resumeDetails}
          />
        )
      ) : null}
    </div>
  );
};

export default ViewResume;
