import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import EditResume from "./EditResume";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import { Toaster } from "react-hot-toast";

Amplify.configure(awsExports);

function App() {
  return (
    <div className="w-full h-screen flex flex-col font-pop">
      <Authenticator className="">
        {({ signOut, user }) => (
          <div className="w-full h-auto">
            <Toaster />
            <Navbar signOut={signOut} user={user} />
            <Routes>
              <Route path="/" element={<Dashboard user={user} />} />
              <Route
                path="/edit/:resumeId"
                element={<EditResume user={user} />}
              />
            </Routes>
          </div>
        )}
      </Authenticator>
    </div>
  );
}

export default App;
