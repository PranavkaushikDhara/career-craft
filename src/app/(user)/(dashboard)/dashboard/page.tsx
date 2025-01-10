"use client";

import React, { useEffect, useState } from "react";
import { ResumeStore } from "@/store/ResumeStore";
import Resume from "@/components/organisms/Resume";

const ResumeComponent = () => {
  const [resumeData, setResumeData] = useState<ResumeStore>();

  useEffect(() => {
    try {
      const storedData = localStorage.getItem("resume-storage");
      if (storedData) {
        const parsedData: ResumeStore = JSON.parse(storedData);
        console.log("Parsed Data", parsedData);
        setResumeData((prev) => parsedData);
      }
    } catch (error) {
      console.error("Failed to load resume data:", error);
    }
  }, []);

  if (!resumeData) {
    return <div className="text-center p-6">Loading resume...</div>;
  }

  return <Resume resumeData={resumeData} />;
};

export default ResumeComponent;
