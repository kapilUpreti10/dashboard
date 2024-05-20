import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/Home";
import Signup from "./pages/Signup";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default Router;
