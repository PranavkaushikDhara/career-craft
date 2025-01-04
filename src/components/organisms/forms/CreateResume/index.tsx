"use client";
import prepareFields from "@/app/(user)/(custom)/create-resume/action";
import { TextArea } from "@/components/atoms/Input";
import Form from "next/form";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const CreateResumeForm: React.FC = () => {
  const router = useRouter();
  return (
    <div className="w-full ">
      <Form
        action={prepareFields}
        className="flex flex-col items-center gap-4 w-full"
      >
        <TextArea
          className="w-full max-w-lg h-40"
          name="resume"
          placeholder="Please paste your resume content here."
        />
        <div className="text-sm font-medium text-CareerCraftText">or</div>
        <input
          type="file"
          className="w-full max-w-lg p-2 border rounded-md shadow-sm  focus:ring-2 focus:ring-blue-500 focus:outline-none cursor-pointer"
          placeholder="Please Upload your resume here"
        />
        <button
          className="bg-CareerCraftPrimary text-CareerCraftWhite p-2 rounded-md hover:bg-CareerCraftPrimaryDark"
          type="submit"
          onClick={() => router.push("/contact")}
        >
          Create a new base resume
        </button>
      </Form>
    </div>
  );
};

export default CreateResumeForm;
