import { ChatOpenAI } from "@langchain/openai";
import { StructuredOutputParser } from "langchain/output_parsers";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { z } from "zod";

// const schema = z.object({
//   summary: z.string().optional(),
//   name: z.string().optional(),
//   contactDetails: z.object({
//     phone: z.string().optional(),
//     email: z.string().optional(),
//     linkedin: z.string().optional(),
//     github: z.string().optional(),
//   }),
//   educationDetails: z.array(
//     z.object({
//       college: z.string().optional(),
//       degree: z.string().optional(),
//       startDate: z.string().optional(),
//       endDate: z.string().optional(),
//       collegeAddress: z.string().optional(),
//     })
//   ),
//   workExperience: z.array(
//     z.object({
//       company: z.string().optional(),
//       startDate: z.string().optional(),
//       endDate: z.string().optional(),
//       tasks: z.array(z.string()).optional(),
//     })
//   ),
//   skills: z.array(
//     z.object({
//       title: z.string().optional(),
//       skills: z.array(z.string()),
//     })
//   ),
// });
// const model = new ChatOpenAI({ model: "gpt-4o-mini" });
// const parser = StructuredOutputParser.fromZodSchema(schema);
// const system_message =
//   "Extract the information asked from the given input" +
//   parser.getFormatInstructions();
// const response = await model.invoke([
//   new SystemMessage(system_message),
//   new HumanMessage(`1
// Pranav Kaushik Dhara
// (312) 477-6452 |pranavkaushik300@gmail.com |LinkedIn |GitHub |Portfolio
// Work Experience
// Graduate Developer August 2023 – Present
// Illinois Institute of Technology Chicago, USA
// •Migrated the college website to Next.js, enhancing scalability and user experience through modular and
// efficient code.
// •Developed an AI chatbot using LangChain, OpenAI, and Elasticsearch, achieving an 85% response accuracy in
// handling queries about student records with an algorithmic approach to data processing.
// Software Engineer 2 December 2021 – December 2022
// NCR Atleos Hyderabad, IN
// •Developed both front-end and back-end modules of ATM and POS software using React, JavaScript, Java
// Spring Boot, and Oracle DB, ensuring high-quality, scalable code with strong knowledge of data structures.
// •Implemented Kafka as a message broker for an ATM switch, enabling real-time, reliable messaging, and
// transaction processing, contributing to building large scale transaction processing systems.
// •Achieved over 80% reduction in software backlog defects through proactive troubleshooting and development
// of internal tools, reflecting strong problem-solving skills related to DevOps pipelines.
// •Led application testing using JUnit and Mockito, writing comprehensive test cases that achieved 99% test
// coverage, which supported CI/CD systems in maintaining software reliability and efficiency.
// Software Engineer 1 October 2020 – December 2021
// NCR Atleos Hyderabad, IN
// •Developed low-latency REST APIs in Java (Spring Boot) handling 100k+ daily requests.
// •Leveraged Agile practices and automated CI/CD pipelines with Jenkins to achieve a 15% faster software
// delivery cycle. This also led to a 20% reduction in deployment errors.
// Cloud Platforms: AWS (Lambda, S3, EC2, ALB), Google Cloud Platform, Git, Jenkins, Docker Languages: Java, JavaScript, C/C++, Python, C#
// Frameworks & Libraries: ReactJS, AngularJS, NodeJS, Spring Boot
// Databases: MySQL, Oracle, MongoDB, PostgreSQL, EdgeDB, Elasticsearch, GraphDB
// Methodologies : Agile, Object-Oriented Design Patterns, Data Structures & Algorithms
// Education
// Masters in Computer Science, GPA: 3.9 December 2024
// Illinois Institute of Technology Chicago, USA`),
// ]);
// const output = response.content.toString();
// const startMarker = "```json";
// const endMarker = "```";

// const startIndex = output.indexOf(startMarker);
// const endIndex = output.lastIndexOf(endMarker);

// if (startIndex === -1 || endIndex === -1 || endIndex <= startIndex) {
//   throw new Error("No valid JSON code block found.");
// }

// // Extract the JSON content
// const jsonString = output
//   .substring(startIndex + startMarker.length, endIndex)
//   .trim(); // Remove markers and trim whitespace

// const finalResponse = await parser.parse(jsonString);
// console.log(jsonString);

import React from "react";
import { LLM } from "@langchain/core/language_models/llms";
import { json } from "stream/consumers";
import ResumeNav from "@/components/organisms/ResumeNav";

const CreateResume = () => {
  return (
    <div className="flex">
      <ResumeNav></ResumeNav>
    </div>
  );
};

export default CreateResume;
