import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "@/redux/store/Store";

const ProtectedRoute = () => {
  const user = useSelector((state: RootState) => state.user.currentUser);

  return user ? <Outlet /> : <Navigate to="/auth/login" />;
};
export default ProtectedRoute;
