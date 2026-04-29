export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  categories?: string[];
  tags?: string[];
  demo?: string;
  id?: string;
};