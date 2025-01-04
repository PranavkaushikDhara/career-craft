import { ButonLinkSecondary } from "@/components/atoms/ButtonLink";
import Input from "@/components/atoms/Input";
import React from "react";
import { FaStepForward } from "react-icons/fa";
import { FaBackwardStep } from "react-icons/fa6";

const ExperienceForm = () => {
  return (
    <div className="flex flex-col gap-4 bg-CareerCraftForeGround p-4 rounded-lg shadow-lg">
      <div className="flex gap-4 ">
        <div className="flex flex-col gap-2 w-full">
          <label
            className="text-CareerCraftWhite text-sm font-medium"
            htmlFor="title"
          >
            Job Title
          </label>
          <Input
            className="rounded-md"
            placeholder="Job Title"
            name="title"
            //   className="w-full"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            className="text-CareerCraftWhite text-sm font-medium"
            htmlFor="company"
          >
            Company
          </label>
          <Input
            className="rounded-md"
            placeholder="Company or Organization Name"
            name="company"
            //   className="w-full"
          />
        </div>
      </div>

      <div className="md:flex-row flex flex-col gap-4 ">
        <div className="flex flex-col gap-2 w-full">
          <label
            className="text-CareerCraftWhite text-sm font-medium"
            htmlFor="city"
          >
            City
          </label>
          <Input className="rounded-md" placeholder="City" name="city" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            className="text-CareerCraftWhite text-sm font-medium"
            htmlFor="state"
          >
            State
          </label>
          <Input
            className="rounded-md"
            placeholder="State/Province"
            name="state"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            className="text-CareerCraftWhite text-sm font-medium"
            htmlFor="zipcode"
          >
            Zip Code
          </label>
          <Input
            placeholder="Zip Code"
            name="zipcode"
            className="rounded-md"
            //   className="w-full"
          />
        </div>
      </div>

      <div className="flex gap-4 ">
        <div className="flex flex-col gap-2 w-full">
          <label
            className="text-CareerCraftWhite text-sm font-medium"
            htmlFor="startDate"
          >
            Start Date
          </label>
          <Input
            placeholder="Start Date"
            name="startDate"
            type="date"
            className="rounded-md"
            //   className="w-full"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            className="text-CareerCraftWhite text-sm font-medium"
            htmlFor="endDate"
          >
            End Date
          </label>
          <Input
            placeholder="End Date"
            name="endDate"
            type="date"
            className="rounded-md"
            //   className="w-full"
          />
        </div>
      </div>

      <span className="flex gap-2 text-sm text-CareerCraftText items-center">
        <input type="checkbox" name="isCurrentJob" />
        <span>I currently work here</span>
      </span>

      {/* Submit Button */}
      <div className="flex justify-between">
        <ButonLinkSecondary
          text="Back"
          class="bg-CareerCraftPrimary hover:bg-CareerCraftPrimaryDark text-CareerCraftWhite"
          href="/contact"
          icon={<FaBackwardStep />}
        ></ButonLinkSecondary>
        <ButonLinkSecondary
          text="Continue"
          class="bg-CareerCraftPrimary hover:bg-CareerCraftPrimaryDark text-CareerCraftWhite"
          href="/education"
          front={true}
          icon={<FaStepForward />}
        ></ButonLinkSecondary>
      </div>
    </div>
  );
};

export default ExperienceForm;
