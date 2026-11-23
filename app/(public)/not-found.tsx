import Heading from "@/shared/components/ui/Heading";

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <Heading level={1}>404</Heading>
      <p className="mt-2">Página no encontrada</p>
    </div>
  );
}