"use client";

import React, { useEffect, useState } from "react";

import EducationForm from "@/components/organisms/forms/Education";
import useResumeStore from "@/store/ResumeStore";
import { Education } from "@/store/ResumeStore";
const EducationPage = () => {
  const [educationData, setEducationData] = useState<Education[]>([]);

  const educationDetails = useResumeStore.getState().educationDetails;
  console.log(useResumeStore.getState());
  useEffect(() => {
    const resumeData = localStorage.getItem("resumeData");
    if (resumeData) {
      try {
        const parsedData = JSON.parse(resumeData).educationDetails || [];
        setEducationData(parsedData); // Update state to trigger re-render
      } catch (error) {
        console.error("Error parsing resume data from localStorage:", error);
      }
    }
  }, []);
  return (
    <div className="flex flex-col gap-6  p-4  w-auto">
      <div className="flex flex-col gap-2 items-start">
        <span className="text-CareerCraftWhite ">
          <p className="font-bold text-2xl">Education</p>
          <p className="text-sm">Where did you attend college or university?</p>
        </span>
      </div>

      <EducationForm
        education={
          educationDetails.length >= 1 ? educationDetails : educationData
        }
      />
    </div>
  );
};

export default EducationPage;
