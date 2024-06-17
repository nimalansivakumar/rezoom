import axiosRequest from "./requestManager";

const requests = {
    verifyEmail: (email) => {
        let requestObject = {
            url: "/auth/verify-email",
            method: "GET",
            data: {
                email: email,
            },
        };
        return axiosRequest(requestObject);
    },

    signin: (email, password) => {
        let requestObject = {
            url: "/auth/signin",
            method: "POST",
            data: {
                email: email,
                password: password,
            },
        };

        return axiosRequest(requestObject);
    },
    createUser: (email, password) => {
        let requestObject = {
            url: "/auth/createuser",
            method: "POST",
            data: {
                email: email,
                password: password,
            },
        };

        return axiosRequest(requestObject);
    },

    getUsers: () => {
        let requestObject = {
            url: "/provider/user-provider",
            method: "GET",
        };

        return axiosRequest(requestObject);
    },

    getMyResumes: (user_id) => {
        let requestObject = {
            url: "/dashboard/myresumes",
            method: "GET",
            data: {
                user_id: user_id,
            },
        };
        return axiosRequest(requestObject);
    },

    getResumeDetails: (resume_id) => {
        let requestObject = {
            url: "/edit/resume-detail",
            method: "GET",
            data: {
                resume_id: resume_id,
            }
        }

        return axiosRequest(requestObject);
    },

    saveProfilePicture: (user_id, formData) => {
        let requestObject = {
            url: "/edit/save-profilepicture",
            method: "POST",
            data: {
                image: formData
            },
            type: "form-data"
        }

        return axiosRequest(requestObject);
    },

    saveResume: (user_id, resumeName, resumeDetails) => {
        let requestObject = {
            url: "/edit/save-resume",
            method: "POST",
            data: {
                user_id: user_id,
                resume_name: resumeName,
                resume_data: JSON.stringify(resumeDetails),
                created_time: new Date().toISOString().split("T")[0],
            },
        };
        return axiosRequest(requestObject);
    },

    updateResume: (user_id, resume_id, resumeName, resumeDetails) => {
        let requestObject = {
            url: "/edit/update-resume",
            method: "POST",
            data: {
                user_id: user_id,
                resume_id : resume_id,
                resume_name: resumeName,
                resume_data: JSON.stringify(resumeDetails),
                created_time: new Date().toISOString().split("T")[0],
            },
        };
        return axiosRequest(requestObject);
    },

    deleteResume: (user_id, resume_id) => {
        let requestObject = {
            url: "/dashboard/delete-resume",
            method: "DELETE",
            data: {
                user_id: user_id,
                resume_id: resume_id,
            },
        };
        return axiosRequest(requestObject);
    },
};

export default requests;
