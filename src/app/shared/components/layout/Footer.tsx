import { SocialLinks } from "../ui/SocialLinks";

export function Footer() {
  return (
    <footer className=" text-white px-4 py-8 lg:py-12 mb-20 lg:mb-0">
      <div className="max-w-6xl mx-auto">
        <div className="border-t border-gray-800 mb-6" />

        <div
          className="
            flex flex-col gap-6
            sm:flex-row sm:items-center sm:justify-between
            text-gray-400 text-sm
          "
        >
          <div className="text-center sm:text-left">
            <p className="leading-relaxed">
              © {new Date().getFullYear()} Kevin Pardo Veas.
              <br className="sm:hidden" />
              Todos los derechos reservados.
            </p>
          </div>

          <div className="flex justify-center sm:justify-end">
            <SocialLinks className="gap-5" iconClassName="text-xl" />
          </div>
        </div>
      </div>
    </footer>
  );
}