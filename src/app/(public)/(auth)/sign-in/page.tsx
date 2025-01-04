import PrimaryButton from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Link from "next/link";
import React from "react";
import { TiTickOutline } from "react-icons/ti";

const Register = () => {
  return (
    <div className="flex items-center justify-center w-full md:flex-1">
      <div className="flex flex-col gap-6 bg-CareerCraftForeGround p-8 rounded-lg shadow-lg w-full max-w-sm">
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-CareerCraftWhite font-bold text-2xl">
            Welcome Back
          </h2>
        </div>
        {/* Email Field */}
        <div className="flex flex-col gap-2 w-full">
          <label
            className="text-CareerCraftWhite text-sm font-medium"
            htmlFor="email"
          >
            Email Address
          </label>
          <Input
            placeholder="Enter your email"
            name="email"
            //   className="w-full"
          />
        </div>
        {/* Password Field */}
        <div className="flex flex-col gap-2 w-full">
          <label
            className="text-CareerCraftWhite text-sm font-medium"
            htmlFor="password"
          >
            Password
          </label>
          <Input placeholder="Enter your password" name="password" />
        </div>
        {/* Submit Button */}
        <PrimaryButton text="Log In"></PrimaryButton>
        <span className="text-CareerCraftText text-sm gap-1 flex justify-center">
          Don't have an account?
          <Link className="text-CareerCraftPrimary" href="/register">
            Signup
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
