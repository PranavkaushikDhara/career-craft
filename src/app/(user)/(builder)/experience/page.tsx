"use client";
import React, { useEffect, useState } from "react";
import ExperienceForm from "@/components/organisms/forms/Experience";
import { Work } from "@/store/ResumeStore";

import useResumeStore from "@/store/ResumeStore";
const Experience = () => {
  const [experienceData, setExperienceData] = useState<Work[]>([]);
  const [education, setEducation] = useState<Work[]>([]);
  const { workExperience } = useResumeStore.getState();
  useEffect(() => {
    const resumeData = localStorage.getItem("resumeData");
    if (resumeData) {
      try {
        const parsedData = JSON.parse(resumeData).workExperience || [];
        setExperienceData(parsedData); // Update state to trigger re-render
      } catch (error) {
        console.error("Error parsing resume data from localStorage:", error);
      }
    }
  }, []);

  return (
    <div className="flex flex-col gap-6 p-4 w-auto">
      <ExperienceForm
        experience={
          workExperience.length >= 1 ? workExperience : experienceData
        }
      />
    </div>
  );
};

export default Experience;
