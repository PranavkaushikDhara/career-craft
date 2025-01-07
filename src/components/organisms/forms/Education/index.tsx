"use client";
import { ButonLinkSecondary } from "@/components/atoms/ButtonLink";
import Input from "@/components/atoms/Input";
import clsx from "clsx";
import React, { use, useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp, FaStepForward } from "react-icons/fa";
import { FaBackwardStep, FaPlus } from "react-icons/fa6";
import useResumeStore, { Education, Work } from "@/store/ResumeStore";
import { SecondaryButton } from "@/components/atoms/Button";
import { redirect } from "next/navigation";

interface EducationProps {
  education: Education[];
}

const EducationForm = (props: EducationProps) => {
  console.log(props.education);
  const [educationState, setEducationState] = useState<Education[]>([]);
  const [openStates, setOpenStates] = useState<boolean[]>([]);

  useEffect(() => {
    setEducationState(props.education);
  }, [props.education]);

  const handleEducationChange = (
    educationIndex: number,
    field: string,
    value: string
  ) => {
    const updatedEducation = [...educationState];
    updatedEducation[educationIndex] = {
      ...updatedEducation[educationIndex],
      [field]: value,
    };
    setEducationState(updatedEducation);
  };

  const handleNext = () => {
    const updatedEducation = useResumeStore.getState().addEducation;
    updatedEducation(educationState);
    console.log(useResumeStore.getState());
    redirect("/certifications");
  };

  const toggleOpen = (index: number) => {
    const updatedOpenStates = [...openStates];
    updatedOpenStates[index] = !updatedOpenStates[index];
    setOpenStates(updatedOpenStates);
  };

  const [open, setOpen] = useState(true);
  return (
    <>
      {educationState.map((education, educationIndex) => {
        return (
          <div
            className="flex flex-col gap-4 bg-CareerCraftForeGround p-4 rounded-lg shadow-lg"
            key={educationIndex}
          >
            <span className="flex justify-between">
              <p className="text-CareerCraftText text-sm ">
                Experience details {educationIndex + 1}
              </p>
              <button onClick={() => toggleOpen(educationIndex)}>
                {openStates[educationIndex] ? <FaAngleUp /> : <FaAngleDown />}
              </button>
            </span>
            <div
              className={clsx("flex flex-col gap-4", {
                hidden: !openStates[educationIndex],
              })}
            >
              {/* College name */}
              <div className="flex gap-4">
                <div className="flex flex-col gap-2 w-full">
                  <label
                    className="text-CareerCraftWhite text-sm font-medium"
                    htmlFor="college"
                  >
                    College or University
                  </label>
                  <Input
                    required
                    className="rounded-md"
                    placeholder="College or University Name"
                    value={education.college}
                    name="college"
                    onChange={(e) =>
                      handleEducationChange(
                        educationIndex,
                        "college",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label
                    className="text-CareerCraftWhite text-sm font-medium"
                    htmlFor="degree"
                  >
                    Degree
                  </label>
                  <Input
                    required
                    className="rounded-md"
                    placeholder="Degree"
                    value={education.degree}
                    name="degree"
                    onChange={(e) =>
                      handleEducationChange(
                        educationIndex,
                        "degree",
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>

              {/* Location Fields */}
              <div className="md:flex-row flex flex-col gap-4">
                <div className="flex flex-col gap-2 w-full">
                  <label
                    className="text-CareerCraftWhite text-sm font-medium"
                    htmlFor="fieldOfStudy"
                  >
                    Field of Study
                  </label>
                  <Input
                    required={false}
                    className="rounded-md"
                    placeholder="Field of Study"
                    value={education.fieldOfStudy}
                    name="fieldOfStudy"
                    onChange={(e) =>
                      handleEducationChange(
                        educationIndex,
                        "fieldOfStudy",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label
                    className="text-CareerCraftWhite text-sm font-medium"
                    htmlFor="collegeAddress"
                  >
                    College Address
                  </label>
                  <Input
                    required={false}
                    className="rounded-md"
                    placeholder="College Address"
                    value={education.collegeAddress}
                    name="collegeAddress"
                    onChange={(e) =>
                      handleEducationChange(
                        educationIndex,
                        "collegeAddress",
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>

              {/* Start and End Date */}
              <div className="flex gap-4">
                <div className="flex flex-col gap-2 w-full">
                  <label
                    className="text-CareerCraftWhite text-sm font-medium"
                    htmlFor="startDate"
                  >
                    Start Date
                  </label>
                  <Input
                    required
                    placeholder="Start Date"
                    name="startDate"
                    type="date"
                    value={
                      education.startDate &&
                      !isNaN(Date.parse(education.startDate))
                        ? new Date(education.startDate)
                            .toISOString()
                            .split("T")[0]
                        : ""
                    }
                    className="rounded-md"
                    onChange={(e) =>
                      handleEducationChange(
                        educationIndex,
                        "startDate",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label
                    className="text-CareerCraftWhite text-sm font-medium"
                    htmlFor="endDate"
                  >
                    End Date
                  </label>
                  <Input
                    required
                    placeholder="End Date"
                    name="endDate"
                    type="date"
                    value={
                      education.endDate && !isNaN(Date.parse(education.endDate))
                        ? new Date(education.endDate)
                            .toISOString()
                            .split("T")[0]
                        : ""
                    }
                    className="rounded-md"
                    onChange={(e) =>
                      handleEducationChange(
                        educationIndex,
                        "endDate",
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>

              <span className="flex gap-2 text-sm text-CareerCraftText items-center">
                <input type="checkbox" name="isCurrentJob" />
                <span>I currently work here</span>
              </span>
            </div>
          </div>
        );
      })}
      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <SecondaryButton
          text="Back"
          className="bg-CareerCraftPrimary hover:bg-CareerCraftPrimaryDark text-CareerCraftWhite"
          onClickMethod={() => {
            redirect("/contact");
          }}
          icon={<FaBackwardStep />}
        ></SecondaryButton>
        <SecondaryButton
          text="Continue"
          className="bg-CareerCraftPrimary hover:bg-CareerCraftPrimaryDark text-CareerCraftWhite"
          onClickMethod={handleNext}
          icon={<FaStepForward />}
        ></SecondaryButton>
      </div>
    </>
  );
};

export default EducationForm;
