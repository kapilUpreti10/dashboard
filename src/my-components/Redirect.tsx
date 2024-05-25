import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/Store";
import { Navigate, Outlet } from "react-router-dom";

const Redirect = () => {
  const user = useSelector((state: RootState) => state.user.currentUser);

  return user ? <Navigate to="/dashboard/home" /> : <Outlet />;

  //   dont use useNavigate hook here because to render the component we need to return the component
  //   The key difference between useNavigate and <Navigate> is that useNavigate is a hook used to programmatically navigate within components, while <Navigate> is a component used for conditional navigation within your JSX.
};

export default Redirect;
