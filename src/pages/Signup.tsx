import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardTitle,
} from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

import ShowAlert from "@/my-components/ShowAlert";
import { RootState } from "@/redux/store/Store";
import { setAlert, clearAlert } from "@/redux/slice/AlertSlice";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const dispatch = useDispatch();
  const alert = useSelector((state: RootState) => state.alert);
  const navigateTo = useNavigate();
  const [userData, setUserData] = useState({});

  const handleUserInput = (e: { target: { id: string; value: string } }) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };

  const handleSignUp = async () => {
    try {
      const { username, email, password, confirmPassword } = userData as {
        username: string;
        email: string;
        password: string;
        confirmPassword: string;
      };

      if (!username || !email || !password || !confirmPassword) {
        return dispatch(
          setAlert({ message: "Please fill in all fields", type: "error" })
        );
      }

      const response = await axios.post("/api/v1/users/user/signup", userData);
      if (response.data.status === "success") {
        dispatch(
          setAlert({ message: "Account created successfully", type: "success" })
        );
        setTimeout(() => {
          navigateTo("/auth/login");
        }, 2000);
      }
    } catch (err) {
      console.log(err);
      const error = err.response?.data?.message;
      dispatch(
        setAlert({
          message: error || "An error occurred",
          type: "error",
        })
      );
    }
  };

  // handling alert
  useEffect(() => {
    if (alert.type === "success") {
      toast.success(alert.message);
    } else if (alert.type === "error") {
      toast.error(alert.message);
    }

    const timer = setTimeout(() => {
      dispatch(clearAlert());
    }, 1500);

    return () => clearTimeout(timer);
  }, [alert, dispatch]);

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="mx-auto max-w-md w-full">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="John Doe"
                  required
                  onChange={handleUserInput}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                required
                onChange={handleUserInput}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" onChange={handleUserInput} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                onChange={handleUserInput}
              />
            </div>
            <Button type="submit" className="w-full" onClick={handleSignUp}>
              Create an account
            </Button>
            <Button variant="outline" className="w-full">
              Sign up with GitHub
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/auth/login" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
        {/* {alert.message && <ShowAlert />} */}
      </Card>
    </div>
  );
};

export default Signup;
