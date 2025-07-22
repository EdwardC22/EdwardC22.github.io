export interface WorkExperience {
  id: number; // Optional for backward compatibility
  jobTitle: string;
  company: string;
  duration: string;
}

const workExperiences: WorkExperience[] = [
  {
    id: 1,
    jobTitle: "Software Engineer",
    company: "Tech Solutions Inc.",
    duration: "June 2021 - Present",
  },
  {
    id: 2,
    jobTitle: "Frontend Developer",
    company: "Creative Agency",
    duration: "January 2020 - May 2021",
  },
  {
    id: 3,
    jobTitle: "Intern",
    company: "Startup Co.",
    duration: "June 2019 - December 2019",
  },
];

export default workExperiences;