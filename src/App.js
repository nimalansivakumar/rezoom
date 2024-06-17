import Navbar from "./components/Navbar";
import {Routes, Route} from "react-router-dom";
import Dashboard from "./Dashboard";
import EditResume from "./EditResume";
import {Toaster} from "react-hot-toast";
import Home from "./Home";
import {AppProvider} from "./context/appContext";
import SignIn from "./SignIn";
import ProtectedRoute from "./components/ProtectedRoute";
import ViewResume from "./ViewResume";

function App() {
    return (
        <AppProvider>
            <div className="w-full h-screen flex flex-col font-pop">
                <Toaster position="top-right"
                         reverseOrder={false}/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/signin" element={<SignIn/>}/>

                    <Route
                        path={`/dashboard/:user_id`}
                        element={
                            <ProtectedRoute>
                                <Dashboard/>
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path={`/edit/:user_id`}
                        element={
                            <ProtectedRoute>
                                <EditResume/>
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path={`/edit/:user_id/update/:resume_id`}
                        element={
                            <ProtectedRoute>
                                <EditResume/>
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path={`/edit/:user_id/view/:resume_id`}
                        element={
                            <ProtectedRoute>
                                <ViewResume/>
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </div>
        </AppProvider>
    );
}

export default App;
