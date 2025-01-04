"use client";
import { ButonLinkSecondary } from "@/components/atoms/ButtonLink";
import Input from "@/components/atoms/Input";
import React from "react";
import { FaStepForward } from "react-icons/fa";
import { FaBackwardStep } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { useState } from "react";
import clsx from "clsx";

interface EducationProps {
  id: number;
  school?: string;
  location?: string;
  degree?: string;
  field?: string;
  startDate?: Date;
  endDate?: Date;
  current?: boolean;
}
const EducationForm = (props: EducationProps) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex flex-col gap-4 bg-CareerCraftForeGround p-4 rounded-lg">
      <span className="flex justify-between">
        <button onClick={() => setOpen(!open)}>
          {open ? <FaAngleUp /> : <FaAngleDown />}
        </button>
        <p className="text-CareerCraftText text-sm">
          Education details {props.id}
        </p>
      </span>
      <div
        className={clsx("flex flex-col gap-4", {
          hidden: !open,
        })}
      >
        <div className="flex gap-4 ">
          <div className="flex flex-col gap-2 w-full">
            <label
              className="text-CareerCraftWhite text-sm font-medium"
              htmlFor="school"
            >
              School
            </label>
            <Input
              className="rounded-md"
              placeholder="School"
              name="school"
              //   className="w-full"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label
              className="text-CareerCraftWhite text-sm font-medium"
              htmlFor="location"
            >
              School Location
            </label>
            <Input
              className="rounded-md"
              placeholder="School Location"
              name="location"
              //   className="w-full"
            />
          </div>
        </div>

        <div className="flex gap-4 ">
          <div className="flex flex-col gap-2 w-full">
            <label
              className="text-CareerCraftWhite text-sm font-medium"
              htmlFor="degree"
            >
              Degree
            </label>
            <Input
              className="rounded-md"
              placeholder="Degree or Program"
              name="degree"
              //   className="w-full"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label
              className="text-CareerCraftWhite text-sm font-medium"
              htmlFor="field"
            >
              Field
            </label>
            <Input
              className="rounded-md"
              placeholder="Field of Study"
              name="field"
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
          <input type="checkbox" name="isCurrentEducation" />
          <span>I currently study here</span>
        </span>

        {/* Submit Button */}
        <div className="flex justify-between">
          <ButonLinkSecondary
            text="Back"
            class="bg-CareerCraftPrimary hover:bg-CareerCraftPrimaryDark text-CareerCraftWhite"
            href="/experience"
            icon={<FaBackwardStep />}
          ></ButonLinkSecondary>
          <ButonLinkSecondary
            text="Continue"
            class="bg-CareerCraftPrimary hover:bg-CareerCraftPrimaryDark text-CareerCraftWhite"
            href="/certifications"
            front={true}
            icon={<FaStepForward />}
          ></ButonLinkSecondary>
        </div>
      </div>
    </div>
  );
};

export default EducationForm;
