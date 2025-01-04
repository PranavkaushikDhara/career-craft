import PrimaryButton from "@/components/atoms/Button";
import { ButonLinkSecondary } from "@/components/atoms/ButtonLink";
import Input from "@/components/atoms/Input";
import Link from "next/link";
import React from "react";
import { TiTickOutline } from "react-icons/ti";
import { FaStepForward } from "react-icons/fa";
import { FaBackwardStep } from "react-icons/fa6";
const Certifications = () => {
  return (
    <div className="flex flex-col gap-6 bg-CareerCraftForeGround p-8 rounded-lg shadow-lg w-auto">
      <div className="flex flex-col gap-2 items-start">
        <span className="text-CareerCraftWhite font-bold text-2xl">
          <p>Certifications and Licenses</p>
          <p className="text-sm">
            If the job requires you to have a certain certifications or
            licenses, this is where you should list them.
          </p>
        </span>
      </div>
      <div className="flex gap-4 ">
        <div className="flex flex-col gap-2 w-full">
          <label
            className="text-CareerCraftWhite text-sm font-medium"
            htmlFor="certiciation"
          >
            Certification
          </label>
          <Input
            className="rounded-md"
            placeholder="License or Certification"
            name="certiciation"
            //   className="w-full"
          />
        </div>
      </div>

      <div className="flex gap-4 ">
        <div className="flex flex-col gap-2 w-full">
          <label
            className="text-CareerCraftWhite text-sm font-medium"
            htmlFor="fromDate"
          >
            Valid From
          </label>
          <Input
            placeholder="Valid From"
            name="fromDate"
            type="date"
            className="rounded-md"
            //   className="w-full"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            className="text-CareerCraftWhite text-sm font-medium"
            htmlFor="toDate"
          >
            Valid Until
          </label>
          <Input
            placeholder="Valid Until"
            name="toDate"
            type="date"
            className="rounded-md"
            //   className="w-full"
          />
        </div>
      </div>

      <span className="flex gap-2 text-sm text-CareerCraftText items-center">
        <input type="checkbox" name="isCurrentJob" />
        <span>No Expiry</span>
      </span>

      {/* Submit Button */}
      <div className="flex justify-between">
        <ButonLinkSecondary
          text="Back"
          class="bg-CareerCraftPrimary hover:bg-CareerCraftPrimaryDark text-CareerCraftWhite"
          href="/education"
          icon={<FaBackwardStep />}
        ></ButonLinkSecondary>
        <ButonLinkSecondary
          text="Continue"
          class="bg-CareerCraftPrimary hover:bg-CareerCraftPrimaryDark text-CareerCraftWhite"
          href="/skills"
          front={true}
          icon={<FaStepForward />}
        ></ButonLinkSecondary>
      </div>
    </div>
  );
};

export default Certifications;
