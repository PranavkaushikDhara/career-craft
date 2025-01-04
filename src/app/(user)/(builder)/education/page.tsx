import PrimaryButton from "@/components/atoms/Button";

import React from "react";

import { IoMdAdd } from "react-icons/io";
import EducationForm from "@/components/organisms/forms/Education";
const Education = () => {
  return (
    <div className="flex flex-col gap-6  p-4  w-auto">
      <div className="flex flex-col gap-2 items-start">
        <span className="text-CareerCraftWhite ">
          <p className="font-bold text-2xl">Education</p>
          <p className="text-sm">Where did you attend college or university?</p>
        </span>
      </div>

      <EducationForm id={1} />
      <PrimaryButton
        text="Add another education"
        icon={<IoMdAdd />}
      ></PrimaryButton>
    </div>
  );
};

export default Education;
