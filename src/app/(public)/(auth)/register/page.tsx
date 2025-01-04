import PrimaryButton from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Link from "next/link";
import React from "react";
import { TiTickOutline } from "react-icons/ti";

const Register = () => {
  return (
    <div className="flex items-center justify-center w-full md:flex-1">
      <div className="flex flex-col  gap-6 bg-CareerCraftForeGround p-8 rounded-lg shadow-lg w-full max-w-sm">
        <div className="flex flex-col gap-2 items-center">
          <span className="text-CareerCraftWhite font-bold text-2xl">
            Create Account
          </span>
          <span className="text-CareerCraftText text-sm">
            Join us today and start your journey
          </span>
        </div>
        {/* Email Field */}
        <div className="flex flex-col gap-2 w-full">
          <label
            className="text-CareerCraftWhite text-sm font-medium"
            htmlFor="name"
          >
            Full Name
          </label>
          <Input
            placeholder="Enter your full name"
            name="name"
            //   className="w-full"
          />
        </div>
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
          <Input
            placeholder="Enter your password"
            type="password"
            name="password"
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label
            className="text-CareerCraftWhite text-sm font-medium"
            htmlFor="confirm-password"
          >
            Confirm Password
          </label>
          <Input
            placeholder="Confirm your password"
            name="confirm-password"
            type="password"
          />
        </div>
        <span className="flex gap-2 text-sm text-CareerCraftText items-center">
          <input type="checkbox" />
          <span>I agree to the Terms of Service and Privacy Policy</span>
        </span>
        {/* Submit Button */}
        <PrimaryButton text="Sign Up"></PrimaryButton>
        <span className="text-CareerCraftText text-sm gap-1 flex justify-center">
          Already have an account?
          <Link className="text-CareerCraftPrimary" href="/sign-in">
            Login
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
