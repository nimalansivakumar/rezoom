import axios from "axios";

let defaultConfig = {
  responseType: "application/json",
  host: "http://localhost:8000",
  url: undefined,
  method: undefined,
  data: undefined,
  type: undefined,
};

const sendRequest = async () => {
  // console.log(defaultConfig);

  if (defaultConfig.method == "PATCH") {
    console.log("zed testing");
  }

  if (defaultConfig.method === "GET") {
    return await axios.get(defaultConfig.url, {
      params: defaultConfig.data,
      withCredentials: true,
    });
  }

  if (defaultConfig.method === "POST") {
    return await axios.post(defaultConfig.url, defaultConfig.data, {
      headers: {
        "Content-type":
          defaultConfig.type === "form-data"
            ? "multipart/form-data"
            : "application/json",
      },
      withCredentials: true,
    });
  }

  if (defaultConfig.method === "DELETE") {
    return await axios.post(defaultConfig.url, defaultConfig.data, {
      withCredentials: true,
    });
  }
};

const axiosRequest = ({ url, method, responseType, data, type }) => {
  if (url) {
    defaultConfig.url = defaultConfig.host + "/api" + url;
  }

  if (method) {
    defaultConfig.method = method;
  }

  if (data) {
    defaultConfig.data = data;
  }

  if (responseType) {
    defaultConfig.responseType = responseType;
  }

  if (type && type === "form-data") {
    defaultConfig.type = "form-data";
  }

  return sendRequest();
};

export default axiosRequest;
