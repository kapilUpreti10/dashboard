/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store/Store";
import { setAlert, clearAlert } from "@/redux/slice/AlertSlice";
import { setCurrentUser } from "@/redux/slice/UserSlice";

import ShowAlert from "@/my-components/ShowAlert";

import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login = () => {
  // since useState cause re-rendering, we use useRef as it doesn't cause re-rendering as useState is only used to update the state in ui here it is not necessary to update state in ui

  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState(null);

  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const alert = useSelector((state: RootState) => state.alert);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(clearAlert());
    }, 1500);
    return () => clearTimeout(timer);
  }, [alert.message, alert.type]);

  const submitLogin = async () => {
    const email = emailRef.current?.value;
    const password = passRef.current?.value;
    try {
      if (!email || !password) {
        dispatch(
          setAlert({
            type: "error",
            message: "Please fill all fields",
          })
        );
        return;
      }
      const response = await axios.post("/api/v1/users/user/login", {
        email,
        password,
      });
      console.log(response.data);
      const token = response.data.token;
      if (response.data.status === "success") {
        dispatch(
          setAlert({
            type: "success",
            message: "Login successful",
          })
        );
        dispatch(setCurrentUser({ user: email, accessToken: token }));
        const timer2 = setTimeout(() => {
          navigateTo("/dashboard/home");
        }, 2000);
        return () => clearTimeout(timer2);
      }
    } catch (err) {
      console.log(err);
      setError(err);
      dispatch(
        setAlert({
          type: "error",
          message: err.response.data.message,
        })
      );
    }
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              ref={emailRef}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required ref={passRef} />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={submitLogin}>
            Sign in
          </Button>
        </CardFooter>
        <div className="mt-4 text-center text-sm pb-10">
          Didn't have an account?{" "}
          <Link to="/auth/signup" className="underline">
            SignUp
          </Link>
        </div>
        {alert.message && <ShowAlert />}
      </Card>
    </div>
  );
};

export default Login;
