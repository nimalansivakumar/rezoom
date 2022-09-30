import Navbar from "./components/Navbar";
import { Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import EditResume from "./EditResume";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import { Toaster } from "react-hot-toast";
import Home from "./Home";
import { useApp } from "./context/appContext";
import ProtectedRoute from "./components/ProtectedRoute";

Amplify.configure(awsExports);

function App() {
  const navigate = useNavigate();
  const { changeUserState, user } = useApp();

  return (
    <div className="w-full h-screen flex flex-col font-pop">
      <Toaster />
      {user ? <Navbar /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/edit/:resumeId" element={<EditResume user={user} />} />
        </Route>
        <Route
          path="/signin"
          element={
            <div
              className="w-full h-screen flex items-center justify-center"
              style={{
                background: "#0f0c29",
                background:
                  "-webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29)",
                background:
                  "linear-gradient(to right, #24243e, #302b63, #0f0c29)",
              }}
            >
              <Authenticator>
                {({ signOut, user }) => (
                  <>
                    {user ? changeUserState(user, signOut) : null}
                    {user ? (
                      navigate("/dashboard")
                    ) : (
                      <button onClick={signOut}>Sign out</button>
                    )}
                  </>
                )}
              </Authenticator>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
