import React, { useState, useEffect } from "react";
import axios from "axios";
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

import { useSelector, useDispatch } from "react-redux";

const Signup = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});
  const handleUserInput = (e: { target: { id: string; value: string } }) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };
  console.log(userData);
  const handleSignUp = async () => {
    try {
      const { username, email, password } = userData as {
        username: string;
        email: string;
        password: string;
      };

      if (!username || !email || !password)
        return dispatch({
          type: "setAlert",
          payload: { message: "Please fill in all fields", type: "error" },
        });
      const response = await axios.post("api/v1/users/signup", userData);

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "clearAlert" });
    }, 4000);
  }, []);

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
                <Label htmlFor="first-name">Username</Label>
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
            <Button type="submit" className="w-full" onClick={handleSignUp}>
              Create an account
            </Button>
            <Button variant="outline" className="w-full">
              Sign up with GitHub
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account? {/* {" "} this is for space */}
            <Link to="/auth/login" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
