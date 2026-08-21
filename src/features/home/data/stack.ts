import type { IconType } from "react-icons";
import { FiCode } from "react-icons/fi";
import {
  SiCloudinary,
  SiDocker,
  SiFramer,
  SiGit,
  SiGithub,
  SiGoogle,
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiResend,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiZod,
} from "react-icons/si";

export type StackItem = {
  name: string;
  icon?: IconType;
  iconSrc?: string;
};

export type StackCategory = {
  title: string;
  items: StackItem[];
};

export const stackByCategory: StackCategory[] = [
  {
    title: "Frontend",
    items: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
      { name: "TanStack Query", icon: SiReactquery },
      { name: "Zustand", icon: FiCode },
      { name: "React Hook Form", icon: FiCode },
      { name: "Zod", icon: SiZod },
    ],
  },
  {
    title: "Backend y Datos",
    items: [
      { name: "Prisma", icon: SiPrisma },
      { name: "Better Auth", icon: FiCode },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Neon", iconSrc: "/neon-logo.svg" },
      { name: "Resend", icon: SiResend },
    ],
  },
  {
    title: "Infra y Deploy",
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Vercel", icon: SiVercel },
      { name: "Cloudinary", icon: SiCloudinary },
    ],
  },
  {
    title: "SEO y Analytics",
    items: [
      {
        name: "Google Search Console",
        icon: SiGooglesearchconsole,
      },
      {
        name: "Google Analytics",
        icon: SiGoogleanalytics,
      },
      {
        name: "Google Search",
        icon: SiGoogle,
      },
      {
        name: "Google OAuth",
        icon: SiGoogle,
      },
    ],
  },
];
