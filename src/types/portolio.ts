export interface TechStack {
  frontend?: string[];
  backend?: string[];
  database?: string[];
  auth?: string[];
  services?: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  categories: string[];
  tags: string[];
  demo: string;
  features?: string[];
  techStack?: TechStack;
}

export interface EducationItem {
  id: string;
  period: string;
  title: string;
  institution: string;
  image: string;
  description: string;
}