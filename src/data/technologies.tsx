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

export const techLogos: LogoItem[] = [
  {
    node: (
      <span className="flex items-center gap-2" style={{ color: "#61DAFB" }}>
        <SiReact />
        <span className="text-sm md:text-base font-medium text-gray-700 whitespace-nowrap">
          React
        </span>
      </span>
    ),
    title: "React",
    href: "https://react.dev",
    ariaLabel: "React",
  },
  {
    node: (
      <span className="flex items-center gap-2" style={{ color: "#E34F26" }}>
        <SiHtml5 />
        <span className="text-sm md:text-base font-medium text-gray-700 whitespace-nowrap">
          HTML5
        </span>
      </span>
    ),
    title: "HTML5",
    href: "https://developer.mozilla.org/es/docs/Web/HTML",
    ariaLabel: "HTML5",
  },
  {
    node: (
      <span className="flex items-center gap-2" style={{ color: "#F7DF1E" }}>
        <SiJavascript />
        <span className="text-sm md:text-base font-medium text-gray-700 whitespace-nowrap">
          JavaScript
        </span>
      </span>
    ),
    title: "JavaScript",
    href: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    ariaLabel: "JavaScript",
  },
  {
    node: (
      <span className="flex items-center gap-2" style={{ color: "#1572B6" }}>
        <SiCss3 />
        <span className="text-sm md:text-base font-medium text-gray-700 whitespace-nowrap">
          CSS3
        </span>
      </span>
    ),
    title: "CSS3",
    href: "https://developer.mozilla.org/es/docs/Web/CSS",
    ariaLabel: "CSS3",
  },
  {
    node: (
      <span className="flex items-center gap-2" style={{ color: "#06B6D4" }}>
        <SiTailwindcss />
        <span className="text-sm md:text-base font-medium text-gray-700 whitespace-nowrap">
          Tailwind CSS
        </span>
      </span>
    ),
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
    ariaLabel: "Tailwind CSS",
  },
  {
    node: (
      <span className="flex items-center gap-2" style={{ color: "#7952B3" }}>
        <SiBootstrap />
        <span className="text-sm md:text-base font-medium text-gray-700 whitespace-nowrap">
          Bootstrap
        </span>
      </span>
    ),
    title: "Bootstrap",
    href: "https://getbootstrap.com",
    ariaLabel: "Bootstrap",
  },
  {
    node: (
      <span className="flex items-center gap-2" style={{ color: "#000000" }}>
        <SiNextdotjs />
        <span className="text-sm md:text-base font-medium text-gray-700 whitespace-nowrap">
          Next.js
        </span>
      </span>
    ),
    title: "Next.js",
    href: "https://nextjs.org",
    ariaLabel: "Next.js",
  },
  {
    node: (
      <span className="flex items-center gap-2" style={{ color: "#3178C6" }}>
        <SiTypescript />
        <span className="text-sm md:text-base font-medium text-gray-700 whitespace-nowrap">
          TypeScript
        </span>
      </span>
    ),
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
    ariaLabel: "TypeScript",
  },
  {
    node: (
      <span className="flex items-center gap-2" style={{ color: "#10A37F" }}>
        <SiOpenai />
        <span className="text-sm md:text-base font-medium text-gray-700 whitespace-nowrap">
          ChatGPT
        </span>
      </span>
    ),
    title: "ChatGPT",
    href: "https://openai.com/chatgpt",
    ariaLabel: "ChatGPT",
  },
  {
    node: (
      <span className="flex items-center gap-2" style={{ color: "#8E75B2" }}>
        <SiGooglegemini />
        <span className="text-sm md:text-base font-medium text-gray-700 whitespace-nowrap">
          Gemini
        </span>
      </span>
    ),
    title: "Gemini",
    href: "https://gemini.google.com",
    ariaLabel: "Gemini",
  },
];
