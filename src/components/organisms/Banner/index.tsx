import PrimaryButton, { SecondaryButton } from "@/components/atoms/Button";
import ButtonLink, { ButonLinkSecondary } from "@/components/atoms/ButtonLink";
import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4  px-4 py-2">
      {/* Left side */}
      <div className="flex flex-col items-center gap-4">
        <span className="text-4xl text-CareerCraftWhite font-bold">
          Transform Your Resume <br />
          <span className="text-CareerCraftPrimary">for Every Opportunity</span>
        </span>
        <p className="text-sm text-CareerCraftText ">
          Customize your resume instantly for any Job Application . Our
          AI-powered platform helps you stand out and land your dream job.
        </p>
        <div className="flex justify-center gap-4 ">
          <ButonLinkSecondary
            text="Build Your Resume Now"
            href="/create-resume"
            class="hover:bg-CareerCraftPrimaryDark bg-CareerCraftPrimary"
          ></ButonLinkSecondary>
          <ButonLinkSecondary
            text="Upload Your Existing Resume"
            href="/create-resume"
            class="hover:bg-CareerCraftPrimaryDark border border-CareerCraftPrimary"
          ></ButonLinkSecondary>

          {/* <PrimaryButton text="Build Your Resume Now" ></PrimaryButton> */}
          {/* <SecondaryButton text="Upload Your Existing Resume"></SecondaryButton> */}
        </div>
      </div>

      {/* Right side */}
      <div className="flex">
        <video
          className="w-full object-cover rounded-md"
          loop={true}
          autoPlay={true}
          muted={true}
        >
          <source src="/banner.mp4" type="video/mp4" />
          <p className="text-sm text-CareerCraftText">
            A brief video showcasing the platform features.
          </p>
        </video>
      </div>
    </div>
  );
};

export default Banner;
