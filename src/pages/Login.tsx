/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

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

  // const navigateTo=useNavigate();

  const submitLogin = () => {
    const email = emailRef.current?.value;
    const password = passRef.current?.value;
    console.log({ email, password });
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
      </Card>
    </div>
  );
};

export default Login;
