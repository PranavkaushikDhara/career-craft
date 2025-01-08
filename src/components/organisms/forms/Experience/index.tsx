"use client";
import { ButonLinkSecondary } from "@/components/atoms/ButtonLink";
import Input from "@/components/atoms/Input";
import clsx from "clsx";
import React, { use, useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp, FaStepForward } from "react-icons/fa";
import { FaBackwardStep, FaPlus } from "react-icons/fa6";
import useResumeStore, { Work } from "@/store/ResumeStore";
import { FormSubmitButton, SecondaryButton } from "@/components/atoms/Button";
import { redirect } from "next/navigation";
import { MdDelete } from "react-icons/md";
import { preconnect } from "react-dom";
interface ExperienceProps {
  experience: Work[];
}

const ExperienceForm = (props: ExperienceProps) => {
  console.log(props.experience);
  const [experiences, setExperiences] = useState<Work[]>([]);
  const [openStates, setOpenStates] = useState<boolean[]>([]);
  useEffect(() => {
    setExperiences(props.experience);
  }, [props.experience]);

  // Handle adding new responsibility input field
  const addResponsibility = (experienceIndex: number) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[experienceIndex].tasks.push("");
    setExperiences(updatedExperiences);
  };

  // Handle changing the value of a responsibility
  const handleResponsibilityChange = (
    experienceIndex: number,
    responsibilityIndex: number,
    value: string
  ) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[experienceIndex].tasks[responsibilityIndex] = value;
    setExperiences(updatedExperiences);
  };

  const deleteResponsibility = (
    experienceIndex: number,
    responsibilityIndex: number
  ) => {
    console.log("Deleting responsibility:", {
      experienceIndex,
      responsibilityIndex,
    });

    setExperiences((prevExperiences) => {
      // Find the experience we want to modify
      const targetExperience = prevExperiences[experienceIndex];
      console.log("Current tasks:", targetExperience.tasks);

      // Create new array of experiences
      const newExperiences = prevExperiences.map((exp, index) => {
        if (index === experienceIndex) {
          // Remove the specific responsibility
          const updatedTasks = exp.tasks.filter(
            (_, index) => index !== responsibilityIndex
          );
          console.log("Updated tasks:", updatedTasks);

          return {
            ...exp,
            tasks: updatedTasks,
          };
        }
        return exp;
      });

      console.log("New experiences:", newExperiences);
      return newExperiences;
    });
  };

  const handleExperienceChange = (
    experienceIndex: number,
    field: string,
    value: string
  ) => {
    console.log(experienceIndex, field, value);
    const updatedExperiences = [...experiences];
    updatedExperiences[experienceIndex] = {
      ...updatedExperiences[experienceIndex],
      [field]: value,
    };
    setExperiences(updatedExperiences);
  };

  const handleSubmit = () => {
    const updateExperience = useResumeStore.getState().addWorkExperience;
    updateExperience(experiences);
    console.log(useResumeStore.getState());
    redirect("/education");
  };

  const toggleOpen = (index: number) => {
    const updatedOpenStates = [...openStates];
    updatedOpenStates[index] = !updatedOpenStates[index];
    setOpenStates(updatedOpenStates);
  };

  const addExperience = () => {
    const updatedExperiences = [...experiences];
    updatedExperiences.push({
      title: "",
      company: "",
      city: "",
      state: "",
      country: "",
      startDate: "",
      endDate: "",
      tasks: [],
    });
    setExperiences(updatedExperiences);
    setOpenStates([...openStates, true]);
  };

  const deleteExperience = (index: number) => {
    console.log(
      experiences.filter((_, i) => {
        i !== index;
      })
    );
    setExperiences((prevExperiences) =>
      prevExperiences.filter((_, i) => {
        console.log(i, i === index);
        return i !== index;
      })
    );
    setOpenStates((prevOpenStates) =>
      prevOpenStates.filter((_, i) => i !== index)
    );
  };

  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex w-full justify-between items-center">
        <div className="flex flex-col gap-2 items-start">
          <span className="text-CareerCraftWhite font-bold text-2xl">
            <p>Experience</p>
            <p className="text-sm">Let's start with your most recent job.</p>
          </span>
        </div>
        <SecondaryButton
          text="Add experience"
          className="bg-CareerCraftPrimary hover:bg-CareerCraftPrimaryDark text-CareerCraftWhite p-2"
          icon={<FaPlus />}
          onClickMethod={addExperience}
        ></SecondaryButton>
      </div>
      <form action={handleSubmit} className="flex flex-col gap-4 w-full">
        {experiences.map((experience, experienceIndex) => {
          return (
            <div
              className="flex flex-col gap-4 bg-CareerCraftForeGround p-4 rounded-lg shadow-lg w-full"
              key={experienceIndex}
            >
              <div className="flex justify-between items-center">
                <span className="flex justify-between">
                  <p className="text-CareerCraftText text-sm ">
                    Experience details {experienceIndex + 1}
                  </p>
                </span>

                <div className="flex gap-2 items-center">
                  <button onClick={() => toggleOpen(experienceIndex)}>
                    {openStates[experienceIndex] ? (
                      <FaAngleUp />
                    ) : (
                      <FaAngleDown />
                    )}
                  </button>
                  <SecondaryButton
                    text=""
                    type="button"
                    icon={<MdDelete />}
                    className="bg-CareerCraftDanger hover:bg-red-700 text-CareerCraftWhite p-2 rounded-md"
                    onClickMethod={() => deleteExperience(experienceIndex)}
                  ></SecondaryButton>
                </div>
              </div>

              <div
                className={clsx("flex flex-col gap-4", {
                  hidden: !openStates[experienceIndex],
                })}
              >
                {/* Job Title and Company */}
                <div className="flex gap-4 w-full flex-wrap">
                  <div className="flex flex-col gap-2 flex-1">
                    <label
                      className="text-CareerCraftWhite text-sm font-medium"
                      htmlFor="title"
                    >
                      Job Title
                    </label>
                    <Input
                      required
                      className="rounded-md"
                      placeholder="Job Title"
                      value={experience.title}
                      name="title"
                      onChange={(e) =>
                        handleExperienceChange(
                          experienceIndex,
                          "title",
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <label
                      className="text-CareerCraftWhite text-sm font-medium"
                      htmlFor="company"
                    >
                      Company
                    </label>
                    <Input
                      required
                      className="rounded-md"
                      placeholder="Company or Organization Name"
                      value={experience.company}
                      name="company"
                      onChange={(e) =>
                        handleExperienceChange(
                          experienceIndex,
                          "company",
                          e.target.value
                        )
                      }
                    />
                  </div>
                </div>

                {/* Location Fields */}
                <div className="md:flex-row flex flex-col gap-4 w-full flex-wrap">
                  <div className="flex flex-col gap-2 flex-1">
                    <label
                      className="text-CareerCraftWhite text-sm font-medium"
                      htmlFor="city"
                    >
                      City
                    </label>
                    <Input
                      required={false}
                      className="rounded-md"
                      placeholder="City"
                      value={experience.city}
                      name="city"
                      onChange={(e) =>
                        handleExperienceChange(
                          experienceIndex,
                          "city",
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <label
                      className="text-CareerCraftWhite text-sm font-medium"
                      htmlFor="state"
                    >
                      State
                    </label>
                    <Input
                      required={false}
                      className="rounded-md"
                      placeholder="State/Province"
                      value={experience.state}
                      name="state"
                      onChange={(e) =>
                        handleExperienceChange(
                          experienceIndex,
                          "state",
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <label
                      className="text-CareerCraftWhite text-sm font-medium"
                      htmlFor="country"
                    >
                      Country
                    </label>
                    <Input
                      required={false}
                      value={experience.country}
                      placeholder="Country"
                      name="country"
                      className="rounded-md"
                      onChange={(e) =>
                        handleExperienceChange(
                          experienceIndex,
                          "country",
                          e.target.value
                        )
                      }
                    />
                  </div>
                </div>

                {/* Start and End Date */}
                <div className="flex gap-4 w-full flex-wrap">
                  <div className="flex flex-col gap-2 flex-1">
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
                        experience.startDate &&
                        !isNaN(Date.parse(experience.startDate))
                          ? new Date(experience.startDate)
                              .toISOString()
                              .split("T")[0]
                          : ""
                      }
                      className="rounded-md"
                      onChange={(e) =>
                        handleExperienceChange(
                          experienceIndex,
                          "endDate",
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
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
                        experience.endDate &&
                        !isNaN(Date.parse(experience.endDate))
                          ? new Date(experience.endDate)
                              .toISOString()
                              .split("T")[0]
                          : ""
                      }
                      className="rounded-md"
                      onChange={(e) =>
                        handleExperienceChange(
                          experienceIndex,
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

                <div className="flex flex-col gap-4 w-full">
                  <label className="text-CareerCraftWhite text-sm font-medium">
                    Responsibilities
                  </label>
                  {experience.tasks.map(
                    (responsibility, responsibilityIndex) => (
                      <div
                        key={responsibilityIndex}
                        className="flex items-center gap-2"
                      >
                        <Input
                          name={`responsibility${responsibilityIndex}`}
                          required={false}
                          className="rounded-md w-full"
                          placeholder={`Responsibility ${
                            responsibilityIndex + 1
                          }`}
                          value={responsibility}
                          onChange={(e) =>
                            handleResponsibilityChange(
                              experienceIndex,
                              responsibilityIndex,
                              e.target.value
                            )
                          }
                        />
                        <button
                          type="button"
                          onClick={() =>
                            deleteResponsibility(
                              experienceIndex,
                              responsibilityIndex
                            )
                          }
                          className="flex items-center gap-2 bg-CareerCraftDanger hover:bg-red-700 text-CareerCraftWhite p-2 rounded-md text-sm w-auto"
                        >
                          Delete
                        </button>
                      </div>
                    )
                  )}

                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => addResponsibility(experienceIndex)}
                      className="flex items-center gap-2 bg-CareerCraftPrimary hover:bg-CareerCraftPrimaryDark text-white py-2 px-2 rounded-md text-sm w-auto"
                    >
                      <FaPlus />
                      Add Responsibility
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <SecondaryButton
            text="Back"
            className="bg-CareerCraftPrimary hover:bg-CareerCraftPrimaryDark text-CareerCraftWhite p-2"
            onClickMethod={() => {
              redirect("/contact");
            }}
            icon={<FaBackwardStep />}
          ></SecondaryButton>
          <FormSubmitButton
            buttonText="Next"
            pendingText="Saving Experience..."
            type="submit"
          ></FormSubmitButton>
        </div>
      </form>
    </>
  );
};

export default ExperienceForm;
