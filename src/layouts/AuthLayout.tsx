import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/Store";
const AuthLayout = () => {
  const token = useSelector((state: RootState) => state.user.token);
  if (token) {
    return <Navigate to="/dashboard/home" />;
  }
  return <Outlet />;
};

export default AuthLayout;
