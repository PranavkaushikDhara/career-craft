"use client";
import CertificationForm from "@/components/organisms/forms/Certification";
import useResumeStore, { Certification } from "@/store/ResumeStore";
import React, { useEffect, useState } from "react";

const Certifications = () => {
  const [certificationData, setCertificationData] = useState<Certification[]>(
    []
  );

  const certifications = useResumeStore.getState().certifications;

  useEffect(() => {
    const resumeData = localStorage.getItem("resumeData");

    if (resumeData) {
      try {
        const parsedData = JSON.parse(resumeData).certifications || [];
        console.log("Fetched from localStorage:", parsedData);
        setCertificationData(parsedData); // Update state to trigger re-render
      } catch (error) {
        console.error("Error parsing resume data from localStorage:", error);
      }
    }
  }, []);

  // Use certifications from the store if available, else fallback to local storage data
  const displayedCertifications =
    certifications.length > 0 ? certifications : certificationData;

  return (
    <div className="flex flex-col gap-6 p-4 rounded-lg shadow-lg w-auto">
      <div className="flex flex-col gap-2 items-start">
        <span className="text-CareerCraftWhite font-bold text-2xl">
          <p>Certifications and Licenses</p>
          <p className="text-sm">
            If the job requires you to have certain certifications or licenses,
            list them here.
          </p>
        </span>
      </div>
      {displayedCertifications.length > 0 ? (
        <CertificationForm certifications={displayedCertifications} />
      ) : (
        <div className="flex justify-center">
          <p>No Certifications found in the resume</p>
        </div>
      )}
    </div>
  );
};

export default Certifications;
