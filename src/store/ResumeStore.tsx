import { create } from "zustand";
export interface ContactDetails {
  phone: string;
  email: string;
  linkedin?: string;
  github?: string;
}

export interface Certification {
  title: string;
  authority: string;
  validFrom?: string;
  validTill?: string;
  licenseNumber?: string;
}

export interface Education {
  college: string;
  degree: string;
  startDate: string;
  endDate: string;
  collegeAddress?: string;
  fieldOfStudy?: string;
}
export interface Work {
  title: string;
  company: string;
  city?: string;
  state?: string;
  country?: string;
  startDate: string;
  endDate: string;
  tasks: string[];
}

export interface Skill {
  title: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string[];
}

export interface Address {
  city?: string;
  state?: string;
  country?: string;
}

export interface ResumeStore {
  firstname: string;
  lastname: string;
  address: Address;
  summary: string;
  contactDetails: ContactDetails;
  educationDetails: Education[];
  certifications: Certification[];
  workExperience: Work[];
  skills: Skill[];
  projects: Project[];
  addFirstName: (newFirstName: string) => void;
  addLastName: (newLastName: string) => void;
  addSummary: (newSummary: string) => void;
  addContact: (newContactDetails: ContactDetails) => void;
  addEducation: (educationDetails: Education[]) => void;
  addWorkExperience: (workExperience: Work[]) => void;
  addSkill: (skills: Skill[]) => void;
  addProject: (projects: Project[]) => void;
  addAddress: (address: Address) => void;
}

const useResumeStore = create<ResumeStore>((set) => ({
  summary: "",
  firstname: "",
  address: {
    city: "",
    state: "",
    country: "",
  },
  lastname: "",
  contactDetails: {
    phone: "",
    email: "",
    linkedin: "",
    github: "",
  },
  certifications: [],
  educationDetails: [],
  workExperience: [],
  skills: [],
  projects: [],
  addSummary: (newSummary: string) =>
    set((state) => ({ ...state, summary: newSummary })),
  addFirstName: (newFirstName: string) =>
    set((state) => ({ ...state, firstname: newFirstName })),
  addLastName: (newLastName: string) =>
    set((state) => ({ ...state, lastname: newLastName })),
  addContact: (contactDetails: ContactDetails) =>
    set((state) => ({ ...state, contactDetails: contactDetails })),
  addEducation: (educationDetails: Education[]) =>
    set((state) => ({
      ...state,
      educationDetails: educationDetails,
    })),
  addWorkExperience: (workExperience: Work[]) =>
    set((state) => ({
      ...state,
      workExperience: workExperience,
    })),
  addSkill: (skills: Skill[]) =>
    set((state) => ({
      ...state,
      skills: skills,
    })),
  addProject: (projects: Project[]) =>
    set((state) => ({
      ...state,
      projects: projects,
    })),
  addAddress: (newAddress: Address) =>
    set((state) => ({ ...state, address: newAddress })),
}));
export default useResumeStore;
