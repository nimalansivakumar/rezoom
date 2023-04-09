import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useApp, useAuth } from "../context/appContext";

export default function ProtectedRoute({ children , path }) {
  const { user } = useApp();
  const [session, getAndSetSession] = useState();

  useEffect(() => {
    getAndSetSession();
  }, []);

  return (
    <>
      {JSON.parse(sessionStorage.getItem("isLoggedIn")) ? (
        children
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}
