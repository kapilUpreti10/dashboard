import { useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";

import { RootState } from "@/redux/store/Store";

const ProtectedRoute = () => {
  const user = useSelector((state: RootState) => state.user.currentUser);
  const navigate = useNavigate();

  return user ? <Outlet /> : navigate("/auth/login");
};
export default ProtectedRoute;
