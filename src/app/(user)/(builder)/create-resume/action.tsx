"use server";
import { ChatOpenAI } from "@langchain/openai";
import { StructuredOutputParser } from "langchain/output_parsers";
import { redirect } from "next/navigation";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { z } from "zod";
import useResumeStore from "@/store/ResumeStore";

require("dotenv").config();
const schema = z.object({
  summary: z.string().optional().nullable(),
  firstname: z.string().optional().nullable(),
  lastname: z.string().optional().nullable(),
  address: z.object({
    city: z.string().optional().nullable(),
    state: z.string().optional().nullable(),
    country: z.string().optional().nullable(),
  }),
  certifications: z.array(
    z.object({
      title: z.string().optional().nullable(),
      authority: z.string().optional().nullable(),
      validFrom: z.string().optional().nullable(),
      validTill: z.string().optional().nullable(),
      licenseNumber: z.string().optional().nullable(),
    })
  ),
  contactDetails: z.object({
    phone: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    linkedin: z.string().optional().nullable(),
    github: z.string().optional().nullable(),
  }),
  educationDetails: z.array(
    z.object({
      college: z.string().optional().nullable(),
      degree: z.string().optional().nullable(),
      fieldOfStudy: z.string().optional().nullable(),
      startDate: z.string().optional().nullable().nullable(),
      endDate: z.string().optional().nullable(),
      collegeAddress: z.string().optional().nullable(),
    })
  ),
  workExperience: z.array(
    z.object({
      title: z.string().optional().nullable(),
      company: z.string().optional().nullable(),
      startDate: z.string().optional().nullable(),
      endDate: z.string().optional().nullable(),
      city: z.string().optional().nullable(),
      state: z.string().optional().nullable(),
      country: z.string().optional().nullable(),
      tasks: z.array(z.string()).optional().nullable(),
    })
  ),
  skills: z.array(
    z.object({
      title: z.string().optional().nullable(),
      skills: z.array(z.string()).nullable(),
    })
  ),
  projects: z.array(
    z.object({
      title: z.string().optional().nullable(),
      description: z.array(z.string()).nullable(),
    })
  ),
});
const parser = StructuredOutputParser.fromZodSchema(schema);
// Prevent default form submission behavior

const model = new ChatOpenAI({
  model: "gpt-4o-mini",
  apiKey:
    "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",
});
const system_message =
  "Extract the information asked from the given input. For any date, return mm-dd-yyyy format" +
  parser.getFormatInstructions();

const prepareFields = async (state: any, formData: FormData) => {
  const resumeData = String(formData.get("resume") || "");

  const response = await model.invoke([
    new SystemMessage(system_message),
    new HumanMessage(resumeData),
  ]);
  const output = response.content.toString();
  const startMarker = "```json";
  const endMarker = "```";

  const startIndex = output.indexOf(startMarker);
  const endIndex = output.lastIndexOf(endMarker);

  if (startIndex === -1 || endIndex === -1 || endIndex <= startIndex) {
    throw new Error("No valid JSON code block found.");
  }

  // Extract the JSON content
  const jsonString = output
    .substring(startIndex + startMarker.length, endIndex)
    .trim(); // Remove markers and trim whitespace

  const finalResponse = await parser.parse(jsonString);
  console.log(finalResponse);
  return finalResponse;
};

export default prepareFields;