import jsPDF from "jspdf";

const Utils = {
    manageSession: (isLoggedIn) => {
        sessionStorage.setItem("isLoggedIn", isLoggedIn);
    },

    setJWTCokkie: (token) => {
        Utils.manageSession(true);
    },

    showTextBoxError: (className) => {
        setTimeout(() => {
            document.querySelector(`.${className}`).classList.add("hidden");
        }, 1000);
        document.querySelector(`.${className}`).classList.remove("hidden");
    },

    generatePdf: (componentId, pdfName) => {
        const pdf = new jsPDF("portrait", "pt", "a4");
        pdf.html(document.querySelector(`#${componentId}`)).then(() => {
            pdfName = pdfName
                ? pdfName
                : (Math.random() + 1).toString(36).substring(2);

            pdfName =
                pdfName + "_" + new Date().toLocaleDateString().replaceAll("/", "_");
            pdf.save(pdfName);
        });
    },

    modifyResponse: (fetchedDetailObject) => {
        let modifiedResponseObj = {};
        let responseKeys = Object.keys(fetchedDetailObject);
        console.log(responseKeys);

        modifiedResponseObj["resume_id"] = fetchedDetailObject.resume_id;
        modifiedResponseObj["resume_title"] = fetchedDetailObject.resume_title;
        modifiedResponseObj["created_time"] = fetchedDetailObject.created_time;
        modifiedResponseObj["name"] = fetchedDetailObject.name;
        modifiedResponseObj["role"] = fetchedDetailObject.job_role;
        modifiedResponseObj["about"] = fetchedDetailObject.summary;
        modifiedResponseObj["mobile"] = fetchedDetailObject.mobile;
        modifiedResponseObj["email"] = fetchedDetailObject.email;
        modifiedResponseObj["address"] = fetchedDetailObject.address;
        modifiedResponseObj["website"] = fetchedDetailObject.website;
        modifiedResponseObj["meta"] = fetchedDetailObject.meta_info;
        modifiedResponseObj["skills"] = fetchedDetailObject.skills;

        responseKeys.forEach(key => {

            if (key === "experiences") {
                let obj
            }
        })

    }
};

export default Utils;
