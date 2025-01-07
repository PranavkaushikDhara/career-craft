import React from "react";
import Table from "@/components/organisms/Table";
import clsx from "clsx";
import Link from "next/link";
import { FaSearch, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import PrimaryButton from "@/components/atoms/Button";
import { FaPlus } from "react-icons/fa";
const dropdowns = [
  {
    title: "Job Role",
    name: "roles",
    options: ["All Roles", "Software Engineer", "SDE"],
  },
  {
    title: "Status",
    name: "status",
    options: ["All Status", "Active", "Archived", "Deleted"],
  },
  {
    title: "Sort By",
    name: "sort",
    options: ["Created", "Status"],
  },
];

const columns = [
  {
    header: "Position and Company",
    accessor: "company",
  },
  {
    header: "Status",
    accessor: "status",
    classname: "hidden md:table-cell",
  },
  {
    header: "Created",
    accessor: "created",
    classname: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const data = [
  {
    id: "1",
    company: "Microsoft",
    createdAt: Date.now(),
    role: "Software Engineer",
    status: "Active",
  },
  {
    id: "2",
    company: "Amazon",
    createdAt: Date.now(),
    role: "Software Development Engineer",
    status: "Deleted",
  },
  {
    id: "3",
    company: "Microsoft",
    createdAt: Date.now(),
    role: "Software Engineer",
    status: "Archived",
  },
  {
    id: "4",
    company: "Microsoft",
    createdAt: Date.now(),
    role: "Software Engineer",
    status: "Archived",
  },
  {
    id: "5",
    company: "Microsoft",
    createdAt: Date.now(),
    role: "Software Engineer",
    status: "Archived",
  },
  {
    id: "6",
    company: "Microsoft",
    createdAt: Date.now(),
    role: "Software Engineer",
    status: "Archived",
  },
  {
    id: "7",
    company: "Microsoft",
    createdAt: Date.now(),
    role: "Software Engineer",
    status: "Archived",
  },
  {
    id: "8",
    company: "Microsoft",
    createdAt: Date.now(),
    role: "Software Engineer",
    status: "Archived",
  },
  {
    id: "9",
    company: "Microsoft",
    createdAt: Date.now(),
    role: "Software Engineer",
    status: "Archived",
  },
  {
    id: "10",
    company: "Microsoft",
    createdAt: Date.now(),
    role: "Software Engineer",
    status: "Archived",
  },
  {
    id: "11",
    company: "Microsoft",
    createdAt: Date.now(),
    role: "Software Engineer",
    status: "Archived",
  },
  {
    id: "12",
    company: "Microsoft",
    createdAt: Date.now(),
    role: "Software Engineer",
    status: "Archived",
  },
  {
    id: "13",
    company: "Microsoft",
    createdAt: Date.now(),
    role: "Software Engineer",
    status: "Archived",
  },
  {
    id: "14",
    company: "Microsoft",
    createdAt: Date.now(),
    role: "Software Engineer",
    status: "Archived",
  },
  {
    id: "15",
    company: "Microsoft",
    createdAt: Date.now(),
    role: "Software Engineer",
    status: "Archived",
  },
  {
    id: "16",
    company: "Microsoft",
    createdAt: Date.now(),
    role: "Software Engineer",
    status: "Archived",
  },
  {
    id: "17",
    company: "Microsoft",
    createdAt: Date.now(),
    role: "Software Engineer",
    status: "Archived",
  },
  {
    id: "18",
    company: "Microsoft",
    createdAt: Date.now(),
    role: "Software Engineer",
    status: "Archived",
  },
  {
    id: "19",
    company: "Microsoft",
    createdAt: Date.now(),
    role: "Software Engineer",
    status: "Archived",
  },
  {
    id: "20",
    company: "Microsoft",
    createdAt: Date.now(),
    role: "Software Engineer",
    status: "Archived",
  },
];

interface Resume {
  id: string;
  company: string;
  createdAt: Date;
  role: string;
  status: string;
}

const createResumeRow = (resume: Resume) => {
  return (
    <tr
      key={resume.id}
      className="text-center text-CareerCraftText text-sm hover:bg-CareerCraftForeGroundLight transition-colors font-light"
    >
      <td className="flex items-center gap-4 py-2">
        <div className="flex flex-col text-left">
          <h3 className="font-medium">{resume.role}</h3>
          <p className="text-gray-500 text-xs">{resume.company}</p>
        </div>
      </td>
      <td
        className={clsx(
          "hidden md:table-cell",
          {
            " text-CareerCraftSuccess": resume.status === "Active",
          },
          {
            "text-CareerCraftDanger": resume.status === "Deleted",
          },
          {
            "text-CareerCraftWarning": resume.status === "Archived",
          }
        )}
      >
        {resume.status}
      </td>
      <td className="hidden md:table-cell px-4 py-2">
        {new Date(resume.createdAt).toLocaleDateString()}
      </td>
      <td className="px-4 py-2">
        <div className="flex gap-2 justify-center">
          <Link href={`/resumes/${resume.id}`}>
            <button className="w-8 h-8 rounded-full bg-CareerCraftWhite text-CareerCraftPrimary hover:text-CareerCraftWhite hover:bg-CareerCraftPrimary flex justify-center items-center transition">
              <FaEye />
            </button>
          </Link>

          <button className="w-8 h-8 rounded-full bg-CareerCraftWhite text-CareerCraftPrimary hover:text-CareerCraftWhite hover:bg-CareerCraftPrimary flex justify-center items-center transition">
            <MdDelete />
          </button>
        </div>
      </td>
    </tr>
  );
};

const ResumeList = () => {
  return (
    <div className="p-4 overflow-auto h-[calc(100vh-100px)] flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <span className="text-xl font-semibold">Resume Management</span>
        <PrimaryButton
          onClickMethod={() => {}}
          text="Create new resume"
          icon={<FaPlus />}
        ></PrimaryButton>
      </div>
      <Table columns={columns} createRow={createResumeRow} data={data} />
    </div>
  );
};

export default ResumeList;
