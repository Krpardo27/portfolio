export type ProjectTechStack = {
  frontend?: string[];
  backend?: string[];
  database?: string[];
  auth?: string[];
  testing?: string[];
  services?: string[];
};

export type ProjectGalleryImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  categories?: string[];
  tags?: string[];
  features?: string[];
  architecture?: string[];
  techStack?: ProjectTechStack;
  gallery?: ProjectGalleryImage[];
  demo?: string;
  id?: string;
};