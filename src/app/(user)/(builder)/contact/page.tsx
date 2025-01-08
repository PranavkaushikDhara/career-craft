"use client";
import ContactForm from "@/components/organisms/forms/Contact";
import useResumeStore from "@/store/ResumeStore";
import React, { use, useEffect, useState } from "react";

const Contact: React.FC = () => {
  const [resumeData, setResumeData] = useState<any>(null);
  useEffect(() => {
    const storedData = localStorage.getItem("resumeData");

    if (storedData) {
      try {
        setResumeData(JSON.parse(storedData));
      } catch (error) {
        console.error(
          "Failed to parse resume data from sessionStorage:",
          error
        );
        localStorage.removeItem("resumeData");
      }
    } else {
      setResumeData(useResumeStore.getState());
    }
  }, []);

  return (
    <div className="flex flex-col gap-6  p-2 h-full w-full">
      <span className="text-CareerCraftWhite flex flex-col gap-2 items-start w-full">
        <p className="text-2xl font-bold">Contact</p>
        <p className="text-sm">
          Make sure employers can reach you by including your name, email, and
          phone number.
        </p>
      </span>

      <ContactForm resumeData={resumeData}></ContactForm>
    </div>
  );
};

export default Contact;
