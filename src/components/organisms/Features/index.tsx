import Card from "@/components/atoms/Card";
import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { HiSpeakerphone } from "react-icons/hi";
const Features = () => {
  return (
    <div className="flex flex-col bg-CareerCraftForeGround p-4 gap-2 items-center">
      <span className="text-lg font-bold text-CareerCraftWhite">
        Everything you want to create a perfect application
      </span>
      <div className="w-full  flex flex-col md:flex-row gap-4 flex-wrap  md:justify-center">
        <Card
          icon={<IoDocumentTextOutline />}
          title="Resume Customization"
          text="Tailor your resume automatically for each job application"
        ></Card>
        <Card
          icon={<FaLinkedin></FaLinkedin>}
          title="Linkedin Optimization"
          text="Enhance your profile to attract recruiters"
        ></Card>
        <Card
          icon={<IoMdMail></IoMdMail>}
          title="Email Writer"
          text="Generate Professional emails for job applications"
        ></Card>
        <Card
          icon={<HiSpeakerphone></HiSpeakerphone>}
          title="Pitch Generator"
          text="Create compelling elevator pitches instantly"
        ></Card>
      </div>
    </div>
  );
};

export default Features;
