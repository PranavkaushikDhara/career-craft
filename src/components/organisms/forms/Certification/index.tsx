import React, { useState } from "react";
import { ButonLinkSecondary } from "@/components/atoms/ButtonLink";
import Input from "@/components/atoms/Input";
import { FaStepForward } from "react-icons/fa";
import { FaBackwardStep } from "react-icons/fa6";
import { Certification } from "@/store/ResumeStore";
import { SecondaryButton } from "@/components/atoms/Button";
import { redirect } from "next/navigation";

interface CertificationProps {
  certifications: Certification[];
}

const CertificationForm: React.FC<CertificationProps> = ({
  certifications: initialCertifications,
}) => {
  const [certifications, setCertifications] = useState<Certification[]>(
    initialCertifications
  );

  if (certifications.length === 0) {
    return (
      <div className="flex justify-center">
        <p>No Certifications found in the resume</p>
      </div>
    );
  }

  const handleInputChange = (
    index: number,
    field: keyof Certification,
    value: string | boolean
  ) => {
    const updatedCertifications = [...certifications];
    updatedCertifications[index] = {
      ...updatedCertifications[index],
      [field]: value,
    };
    setCertifications(updatedCertifications);
  };

  return (
    <div className="flex flex-col gap-6">
      {certifications.map((certification, certificationIndex) => (
        <div
          key={certificationIndex}
          className="flex flex-col gap-4 bg-CareerCraftForeGround p-4 rounded-lg shadow-lg"
        >
          <p className="text-CareerCraftText text-md font-semibold">
            Certification {certificationIndex + 1}
          </p>

          <div className="flex flex-col gap-2">
            <label className="text-CareerCraftWhite text-sm font-medium">
              Certification
            </label>
            <Input
              required
              className="rounded-md"
              placeholder="License or Certification"
              name="certification"
              value={certification.title}
              onChange={(e) =>
                handleInputChange(certificationIndex, "title", e.target.value)
              }
            />
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col gap-2 w-full">
              <label className="text-CareerCraftWhite text-sm font-medium">
                Valid From
              </label>
              <Input
                placeholder="Valid From"
                required
                type="date"
                name="fromDate"
                className="rounded-md"
                value={
                  certification.validFrom &&
                  !isNaN(Date.parse(certification.validFrom))
                    ? new Date(certification.validFrom)
                        .toISOString()
                        .split("T")[0]
                    : ""
                }
                onChange={(e) =>
                  handleInputChange(
                    certificationIndex,
                    "validFrom",
                    e.target.value
                  )
                }
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="text-CareerCraftWhite text-sm font-medium">
                Valid Until
              </label>
              <Input
                placeholder="Valid Until"
                required
                type="date"
                name="toDate"
                className="rounded-md"
                value={
                  certification.validTill &&
                  !isNaN(Date.parse(certification.validTill))
                    ? new Date(certification.validTill)
                        .toISOString()
                        .split("T")[0]
                    : ""
                }
                onChange={(e) =>
                  handleInputChange(
                    certificationIndex,
                    "validTill",
                    e.target.value
                  )
                }
              />
            </div>
          </div>

          <span className="flex gap-2 text-sm text-CareerCraftText items-center">
            <input type="checkbox" name="noExpiry" />
            <span>No Expiry</span>
          </span>
        </div>
      ))}

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <SecondaryButton
          text="Back"
          className="bg-CareerCraftPrimary hover:bg-CareerCraftPrimaryDark text-CareerCraftWhite"
          onClickMethod={() => {
            redirect("/education");
          }}
          icon={<FaBackwardStep />}
        ></SecondaryButton>
        <SecondaryButton
          text="Continue"
          className="bg-CareerCraftPrimary hover:bg-CareerCraftPrimaryDark text-CareerCraftWhite"
          onClickMethod={() => {}}
          icon={<FaStepForward />}
        ></SecondaryButton>
      </div>
    </div>
  );
};

export default CertificationForm;
