import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiOpenai,
  SiGooglegemini,
} from "react-icons/si";
import type { LogoItem } from "@organisms/LogoLoop";
import { themeColors, techColors } from "@utils/colors";

const CursorIcon: React.FC = () => (
  <svg
    fill="currentColor"
    fillRule="evenodd"
    height="1em"
    style={{ flex: "none", lineHeight: 1 }}
    viewBox="0 0 24 24"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Cursor</title>
    <path d="M22.106 5.68L12.5.135a.998.998 0 00-.998 0L1.893 5.68a.84.84 0 00-.419.726v11.186c0 .3.16.577.42.727l9.607 5.547a.999.999 0 00.998 0l9.608-5.547a.84.84 0 00.42-.727V6.407a.84.84 0 00-.42-.726zm-.603 1.176L12.228 22.92c-.063.108-.228.064-.228-.061V12.34a.59.59 0 00-.295-.51l-9.11-5.26c-.107-.062-.063-.228.062-.228h18.55c.264 0 .428.286.296.514z" />
  </svg>
);

interface TechLogoItem {
  icon: React.ReactNode;
  label: string;
  title: string;
  href: string;
  ariaLabel: string;
  hoverColor: string;
}

const createTechLogo = ({
  icon,
  label,
  title,
  href,
  ariaLabel,
  hoverColor,
}: TechLogoItem): LogoItem => {
  const TechIcon: React.FC = () => {
    return (
      <span
        className="flex items-center gap-2 group cursor-pointer transition-colors duration-300"
        style={{ color: themeColors.primary }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = hoverColor;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = themeColors.primary;
        }}
      >
        {icon}
        <span className="text-sm md:text-base font-medium text-gray-700 whitespace-nowrap">
          {label}
        </span>
      </span>
    );
  };

  return {
    node: <TechIcon />,
    title,
    href,
    ariaLabel,
  };
};

export const techLogos: LogoItem[] = [
  createTechLogo({
    icon: <SiReact />,
    label: "React",
    title: "React",
    href: "https://react.dev",
    ariaLabel: "React",
    hoverColor: techColors.react,
  }),
  createTechLogo({
    icon: <SiHtml5 />,
    label: "HTML5",
    title: "HTML5",
    href: "https://developer.mozilla.org/es/docs/Web/HTML",
    ariaLabel: "HTML5",
    hoverColor: techColors.html,
  }),
  createTechLogo({
    icon: <SiJavascript />,
    label: "JavaScript",
    title: "JavaScript",
    href: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    ariaLabel: "JavaScript",
    hoverColor: techColors.javascript,
  }),
  createTechLogo({
    icon: <SiCss3 />,
    label: "CSS3",
    title: "CSS3",
    href: "https://developer.mozilla.org/es/docs/Web/CSS",
    ariaLabel: "CSS3",
    hoverColor: techColors.css,
  }),
  createTechLogo({
    icon: <SiTailwindcss />,
    label: "Tailwind CSS",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
    ariaLabel: "Tailwind CSS",
    hoverColor: techColors.tailwind,
  }),
  createTechLogo({
    icon: <SiBootstrap />,
    label: "Bootstrap",
    title: "Bootstrap",
    href: "https://getbootstrap.com",
    ariaLabel: "Bootstrap",
    hoverColor: techColors.bootstrap,
  }),
  createTechLogo({
    icon: <SiNextdotjs />,
    label: "Next.js",
    title: "Next.js",
    href: "https://nextjs.org",
    ariaLabel: "Next.js",
    hoverColor: techColors.nextjs,
  }),
  createTechLogo({
    icon: <SiTypescript />,
    label: "TypeScript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
    ariaLabel: "TypeScript",
    hoverColor: techColors.typescript,
  }),
  createTechLogo({
    icon: <SiOpenai />,
    label: "ChatGPT",
    title: "ChatGPT",
    href: "https://openai.com/chatgpt",
    ariaLabel: "ChatGPT",
    hoverColor: techColors.chatgpt,
  }),
  createTechLogo({
    icon: <SiGooglegemini />,
    label: "Gemini",
    title: "Gemini",
    href: "https://gemini.google.com",
    ariaLabel: "Gemini",
    hoverColor: techColors.gemini,
  }),
  createTechLogo({
    icon: <CursorIcon />,
    label: "Cursor",
    title: "Cursor",
    href: "https://cursor.sh",
    ariaLabel: "Cursor",
    hoverColor: techColors.cursor,
  }),
];
