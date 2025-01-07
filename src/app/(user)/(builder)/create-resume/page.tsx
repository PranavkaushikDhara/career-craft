import React from "react";
import CreateResumeForm from "@/components/organisms/forms/CreateResume";

const CreateResume = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full p-6">
      <h1 className="text-2xl font-bold">Upload or Paste Your Resume</h1>
      <CreateResumeForm></CreateResumeForm>
    </div>
  );
};

export default CreateResume;
