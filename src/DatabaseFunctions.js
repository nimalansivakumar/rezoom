import { DataStore, Storage } from "aws-amplify";
import { Info, Resumes } from "./models";

export async function saveResumeDetails(
  user_id,
  resumeName,
  resumeDetails,
  picture
) {
  let resumeCreated = await DataStore.save(
    new Resumes({
      user_id: user_id,
      resume_name: resumeName,
    })
  );

  let stringifyedData = stringifyedObject(resumeDetails);

  let uploadedImage = await Storage.put(resumeCreated.id, picture, {
    contentType: picture.type,
  });

  await DataStore.save(
    new Info({
      resume_id: resumeCreated.id,
      image_link: uploadedImage.key.toString(),
      name: resumeDetails.name,
      role: resumeDetails.role,
      about_me: resumeDetails.about_me,
      mobile: resumeDetails.mobile,
      email: resumeDetails.email,
      address: resumeDetails.address,
      website: resumeDetails.website,
      skills: stringifyedData.skills,
      projects: stringifyedData.projects,
      education: stringifyedData.education,
      experience: stringifyedData.experience,
      achievement: stringifyedData.achievement,
      interests: stringifyedData.interests,
      languages_known: stringifyedData.languages_known,
    })
  );
}

export const checkResumeNameExists = async (resumeName) => {
  let resumeList = await DataStore.query(Resumes);
  let doesNameAlreadyExist = false;

  if (resumeList.length > 0) {
    resumeList.map((val) => {
      if (val.resume_name === resumeName) {
        doesNameAlreadyExist = true;
      }
    });
  }

  return !doesNameAlreadyExist;
};

export const updateResumeDetails = async (resumeId, resumeDetails, picture) => {
  let resumes = await DataStore.query(Info);

  let original = resumes.filter((val) => {
    if (val.resume_id === resumeId) {
      return val;
    }
  });

  let stringifyedData = stringifyedObject(resumeDetails);

  let uploadedImage = await Storage.put(resumeId, picture, {
    contentType: picture.type,
  });

  await DataStore.save(
    Info.copyOf(original[0], (updated) => {
      updated.resume_id = resumeId;
      updated.image_link = uploadedImage.key;
      updated.name = resumeDetails.name;
      updated.role = resumeDetails.role;
      updated.about_me = resumeDetails.about_me;
      updated.mobile = resumeDetails.mobile;
      updated.email = resumeDetails.email;
      updated.address = resumeDetails.address;
      updated.website = resumeDetails.website;
      updated.skills = stringifyedData.skills;
      updated.projects = stringifyedData.projects;
      updated.education = stringifyedData.education;
      updated.experience = stringifyedData.experience;
      updated.achievement = stringifyedData.achievement;
      updated.interests = stringifyedData.interests;
      updated.languages_known = stringifyedData.languages_known;
    })
  );
};

export const getUserResumes = async (user_id) => {
  let userResumes = await DataStore.query(Resumes);

  let resumeList = [];

  userResumes.map((val) => {
    if (val.user_id === user_id) {
      resumeList.push(val);
    }
  });

  return resumeList;
};

export async function getResumeInfo(resume_id) {
  let resume_info = await DataStore.query(Info);

  let response = resume_info.filter((resume) => {
    if (resume.resume_id === resume_id) {
      return resume;
    }
  });

  let picture = await Storage.get(response[0].image_link);

  response = Object.assign({}, response[0]);
  response.image_link = picture;
  response.skills = JSON.parse(response.skills);
  response.projects = JSON.parse(response.projects);
  response.education = JSON.parse(response.education);
  response.experience = JSON.parse(response.experience);
  response.interests = JSON.parse(response.interests);
  response.languages_known = JSON.parse(response.languages_known);
  response.achievement = JSON.parse(response.achievement);

  return response;
}

export const deleteResumeInfo = async (resumeId) => {
  let resumeToBeDeleted = await DataStore.query(Info);
  let imageKey;

  resumeToBeDeleted.map((val) => {
    if (val.resume_id === resumeId) {
      imageKey = val.image_link;
    }
  });

  await Storage.remove(imageKey);
  await DataStore.delete(Resumes, resumeId);
};

const stringifyedObject = (resumeDetails) => {
  let projects = JSON.stringify(resumeDetails.projects);
  let education = JSON.stringify(resumeDetails.education);
  let experience = JSON.stringify(resumeDetails.experience);
  let achievement = JSON.stringify(resumeDetails.achievement);
  let skills = JSON.stringify(resumeDetails.skills);
  let interests = JSON.stringify(resumeDetails.interests);
  let languages_known = JSON.stringify(resumeDetails.languages_known);

  return {
    projects,
    education,
    experience,
    achievement,
    skills,
    interests,
    languages_known,
  };
};
