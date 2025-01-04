import React from "react";

import ExperienceForm from "@/components/organisms/forms/Experience";
const Experience = () => {
  return (
    <div className="flex flex-col gap-6  p-4  w-auto">
      <div className="flex flex-col gap-2 items-start">
        <span className="text-CareerCraftWhite font-bold text-2xl">
          <p>Experience</p>
          <p className="text-sm">Let's start with your most recent job.</p>
        </span>
      </div>
      <ExperienceForm></ExperienceForm>
    </div>
  );
};

export default Experience;
