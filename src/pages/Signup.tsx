import React from 'react'
import{Card,CardHeader,CardDescription,CardContent,CardTitle} from '../components/ui/card'
import {Label} from '../components/ui/label'
import {Input} from '../components/ui/input'
import {Button} from '../components/ui/button'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
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
              <Input id="first-name" placeholder="John Doe" required />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <Button type="submit" className="w-full">
            Create an account
          </Button>
          <Button variant="outline" className="w-full">
            Sign up with GitHub
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
    </div>
  )
}

export default Signup
