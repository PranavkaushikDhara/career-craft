import { FormSubmitButton } from "@/components/atoms/Button";
import { TextArea } from "@/components/atoms/Input";
import useResumeStore from "@/store/ResumeStore";
import { redirect } from "next/navigation";
import React, { use, useEffect, useState } from "react";

interface SummaryProps {
  summary: string;
}

const SAMPLE_SUMMARIES = [
  {
    id: 1,
    title: "Professional Growth",
    text: "Results-driven professional with a track record of delivering innovative solutions and driving business growth.",
  },
  {
    id: 2,
    title: "Leadership",
    text: "Experienced leader skilled in team management, strategic planning, and project execution across multiple departments.",
  },
  {
    id: 3,
    title: "Technical Expert",
    text: "Technical expert with deep knowledge in cutting-edge technologies and proven ability to solve complex problems.",
  },
  {
    id: 4,
    title: "Customer Service",
    text: "Customer-focused professional with a strong background in building relationships and delivering exceptional service.",
  },
  {
    id: 5,
    title: "Problem Solver",
    text: "Analytical problem solver with a proven ability to identify issues, develop solutions, and drive",
  },
];

const SummaryForm: React.FC<SummaryProps> = (props: SummaryProps) => {
  const [summaryData, setSummaryData] = useState("");
  useEffect(() => {
    setSummaryData(props.summary);
  }, [props.summary]);

  const handleSubmit = () => {
    console.log("Submitting Summary");
    const updateSummary = useResumeStore.getState().addSummary;
    updateSummary(summaryData);

    redirect("/dashboard");
  };

  return (
    <div className="flex flex-col gap-6">
      <form action={handleSubmit} className="flex flex-col gap-4">
        <TextArea
          name="summary"
          placeholder="Enter your professional summary..."
          value={summaryData}
          onChange={(e: any) => setSummaryData(e.target.value)}
          required={true}
          className="h-48"
        />
        <div className="flex justify-center">
          <FormSubmitButton
            type="submit"
            buttonText="Create Base Resume"
            pendingText="Hold On..."
            className="bg-CareerCraftPrimary text-CareerCraftWhite p-2 rounded-md hover:bg-CareerCraftPrimaryDark"
          />
        </div>
      </form>

      <div className=" bg-CareerCraftPrimary/10 rounded-lg p-4 flex flex-col gap-4">
        <h3 className="text-CareerCraftWhite text-lg font-semibold ">
          Pre Written Summaries
        </h3>
        <div className="flex flex-col gap-3 h-[300px] overflow-y-auto">
          {SAMPLE_SUMMARIES.map((sample) => (
            <div
              key={sample.id}
              onClick={() => setSummaryData(sample.text)}
              className="p-3 bg-CareerCraftBackground rounded-md cursor-pointer hover:bg-CareerCraftPrimary/20 transition-colors"
            >
              <h4 className="text-CareerCraftPrimary font-medium mb-1">
                {sample.title}
              </h4>
              <p className="text-CareerCraftText text-sm">{sample.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SummaryForm;
