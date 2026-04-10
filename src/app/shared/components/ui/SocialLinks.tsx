import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import type { IconType } from "react-icons";

type SocialLink = {
  id: string;
  name: string;
  url: string;
  icon: keyof typeof ICONS;
};

const ICONS = {
  github: FiGithub,
  linkedin: FiLinkedin,
  email: FiMail,
};

const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/Krpardo27",
    icon: "github",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kevinpardoveas/",
    icon: "linkedin",
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:kpardoveas@gmail.com",
    icon: "email",
  },
];

type Props = {
  className?: string;
  iconClassName?: string;
};

export function SocialLinks({
  className = "",
  iconClassName = "text-xl",
}: Props) {
  return (
    <ul
      className={`flex items-center gap-4 ${className}`}
      aria-label="Redes sociales"
    >
      {socialLinks.map((item) => {
        const Icon: IconType | undefined = ICONS[item.icon];
        if (!Icon) return null;

        return (
          <li key={item.id}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon className={iconClassName} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}