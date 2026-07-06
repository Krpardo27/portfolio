import { getProjectBySlug } from "@/features/projects/data/projects";
import { notFound } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = await getProjectBySlug(slug);

  if (!project) return notFound();

  return (
    <article>
      <h1 className="text-2xl font-bold">{project.title}</h1>
      <p className="mt-4 text-gray-600">{project.description}</p>
    </article>
  );
}
