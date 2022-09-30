import { Navigate, Outlet } from "react-router-dom";
import { useApp, useAuth } from "../context/appContext";

export default function ProtectedRoute({ type, path, children }) {
  const { user } = useApp();
  return <>{user ? <Outlet /> : <Navigate to="/" />}</>;
}
