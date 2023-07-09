import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import requests from "./APIs/request";
import { useApp } from "./context/appContext";
import Utils from "./Utils/Util";

const SignIn = () => {
  const navigate = useNavigate();
  const [isUser, setIsUser] = useState(true);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isEmailVerified, setEmailVerified] = useState(false);
  const { setUser } = useApp();

  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem("isLoggedIn"))) {
      navigate("/");
    }
  }, []);

  const verifyEmail = () => {
    if (email) {
      requests.verifyEmail(email).then((response) => {
        if (response.data.is_user_exist) {
          setEmailVerified(true);
          document.getElementById("password").focus();
        } else {
          Utils.showTextBoxError("no-user-found");
        }
      });
    }
  };

  const handleSignIn = () => {
    if (email && password) {
      requests.signin(email, password).then((response) => {
        if (response.data.is_user) {
          setUser(response.data);
          Utils.setJWTCokkie(response.data.token);
          // Utils.createSession(response.data)
          navigate(`/dashboard/${response.data.user_id}`);
        } else if (response.data === "wrong_password") {
          Utils.showTextBoxError("wrong-password");
        }
      });
    }
  };

  const createUser = () => {
    if (email && password) {
      requests.createUser(email, password).then((response) => {
        if (response.data.title === "user_created") {
          setUser(response.data);
          Utils.setJWTCokkie(response.data.token);
          // Utils.createSession(response.data)
          navigate(`/dashboard/${response.data.user_id}`);
        } else if (response.data.title === "user_already_exists") {
          Utils.showTextBoxError("user-already-exist");
        }
      });
    }
  };

  return (
    <div
      style={{
        background: "#0f0c29",
        background:
          "-webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29)",
        background: "linear-gradient(to right, #24243e, #302b63, #0f0c29)",
      }}
      className="w-full min-h-screen h-full text-white flex flex-row justify-center items-center lg:flex-col"
    >
      {isUser ? (
        <div className="w-96 h-auto bg-white rounded bg-opacity-10">
          <h2 className="h-16 border-dotted border-b-2 text-xl font-bold flex items-center mx-5">
            Sign In
          </h2>
          <div className="mx-5 my-5">
            <input
              type="text"
              placeholder="Email"
              className={`w-full h-10 mb-2 bg-white bg-opacity-10 p-2 rounded outline-none`}
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <p className="no-user-found hidden opacity-70 text-xs text-red-400 mb-2">
              User not found!
            </p>
            {isEmailVerified ? (
              <>
                <input
                  type="password"
                  placeholder="Password"
                  className={`w-full h-10 mb-2 bg-white bg-opacity-10 p-2 rounded outline-none`}
                  id="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <p className="wrong-password hidden opacity-70 text-xs text-red-400 mb-2">
                  Wrong Password!
                </p>
              </>
            ) : null}
            <button
              className="w-full h-10 bg-sky-500 bg-opacity-50 rounded hover:bg-opacity-100"
              onClick={() => {
                if (isEmailVerified) {
                  handleSignIn();
                } else {
                  verifyEmail();
                }
              }}
            >
              {isEmailVerified ? "Sign in" : "Verify Email"}
            </button>
            <p
              className="text-center my-2 text-sm opacity-70 cursor-pointer"
              onClick={() => {
                setIsUser(false);
              }}
            >
              Don't have account? Register Now!
            </p>
          </div>
        </div>
      ) : (
        <div className="w-96 h-auto bg-white rounded bg-opacity-10">
          <h2 className="h-16 border-dotted border-b-2 text-xl font-bold flex items-center mx-5">
            Sign Up
          </h2>
          <div className="mx-5 my-5">
            <input
              type="text"
              placeholder="Email"
              className={`w-full h-10 mb-2 bg-white bg-opacity-10 p-2 rounded outline-none`}
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              className={`w-full h-10 mb-2 bg-white bg-opacity-10 p-2 rounded outline-none`}
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <p className="user-already-exist hidden opacity-70 text-xs text-red-400 mb-2">
              User Already Exists!
            </p>
            <button
              className="w-full h-10 bg-sky-500 bg-opacity-50 rounded hover:bg-opacity-100"
              onClick={() => {
                createUser();
              }}
            >
              Register
            </button>

            <p
              className="text-center my-2 text-sm opacity-70 cursor-pointer"
              onClick={() => {
                setIsUser(true);
              }}
            >
              Have an account! Sign in
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;
