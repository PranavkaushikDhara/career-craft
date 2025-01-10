import { ResumeStore } from "@/store/ResumeStore";
import { useEffect, useState } from "react";

interface ResumeProps {
  resumeData: ResumeStore;
}

const Resume = (props: ResumeProps) => {
  // Safely access nested properties with optional chaining
  const [resumeData, setResumeData] = useState<ResumeStore | null>(null);

  useEffect(() => {
    if (props.resumeData) {
      setResumeData(props.resumeData);
    }

    try {
      const storedData = localStorage.getItem("resume-storage");
      if (storedData) {
        const parsedData: ResumeStore = JSON.parse(storedData);
        setResumeData(parsedData);
      }
    } catch (error) {
      console.error("Failed to load resume data:", error);
    }
  }, [props.resumeData]);

  if (!resumeData) {
    return <div>Loading resume data...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          {resumeData.firstname || ""} {resumeData.lastname || ""}
        </h1>
        <p className="text-gray-600">
          {resumeData.address?.city || ""}, {resumeData.address?.state || ""},{" "}
          {resumeData.address?.country || ""}
        </p>
        <div className="text-sm text-gray-500 mt-2">
          {resumeData.contactDetails?.email && (
            <p>Email: {resumeData.contactDetails.email}</p>
          )}
          {resumeData.contactDetails?.phone && (
            <p>Phone: {resumeData.contactDetails.phone}</p>
          )}
          {resumeData.contactDetails?.linkedin && (
            <p>LinkedIn: {resumeData.contactDetails.linkedin}</p>
          )}
          {resumeData.contactDetails?.github && (
            <p>GitHub: {resumeData.contactDetails.github}</p>
          )}
        </div>
      </header>

      {/* Summary Section */}
      {resumeData.summary && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">
            Summary
          </h2>
          <p className="text-gray-700 mt-4">{resumeData.summary}</p>
        </section>
      )}

      {/* Work Experience Section */}
      {resumeData.workExperience?.length > 0 ? (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">
            Work Experience
          </h2>
          {resumeData.workExperience.map((job, index) => (
            <div key={index} className="mt-4">
              <h3 className="font-semibold text-gray-700">{job.title}</h3>
              <p className="text-gray-600">{job.company}</p>
              <p className="text-gray-500">
                {job.startDate} - {job.endDate || "Present"}
              </p>
              <p className="text-gray-600">
                {job.city}, {job.state}, {job.country}
              </p>
              <ul className="list-disc list-inside text-gray-700">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      ) : (
        <p className="text-gray-600">No work experience added yet.</p>
      )}

      {/* Education Section */}
      {resumeData.educationDetails?.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">
            Education
          </h2>
          {resumeData.educationDetails.map((edu, index) => (
            <div key={index} className="mt-4">
              <h3 className="font-semibold text-gray-700">{edu.college}</h3>
              <p className="text-gray-600">{edu.degree}</p>
              <p className="text-gray-500">{edu.fieldOfStudy}</p>
              <p className="text-gray-500">
                {edu.startDate} - {edu.endDate || "Present"}
              </p>
              <p className="text-gray-600">
                {edu.city}, {edu.state}, {edu.country}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Certifications Section */}
      {resumeData.certifications?.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">
            Certifications
          </h2>
          {resumeData.certifications.map((cert, index) => (
            <div key={index} className="mt-4">
              <h3 className="font-semibold text-gray-700">{cert.title}</h3>
              <p className="text-gray-600">{cert.authority}</p>
              <p className="text-gray-500">
                {cert.validFrom} - {cert.validTill || "No Expiry"}
              </p>
              <p className="text-gray-600">
                Credential ID: {cert.licenseNumber}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Skills Section */}
      {resumeData.skills?.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">
            Skills
          </h2>
          {resumeData.skills.map((skillCategory, index) => (
            <div key={index} className="mt-4">
              <h3 className="font-semibold text-gray-700">
                {skillCategory.name}
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                {skillCategory.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* Projects Section */}
      {resumeData.projects?.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">
            Projects
          </h2>
          {resumeData.projects.map((project, index) => (
            <div key={index} className="mt-4">
              <h3 className="font-semibold text-gray-700">{project.title}</h3>
              <ul className="list-disc list-inside text-gray-700">
                {project.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default Resume;
