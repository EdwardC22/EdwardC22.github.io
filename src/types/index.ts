export interface WorkExperience {
  id: number;
  jobTitle: string;
  company: string;
  duration: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
}