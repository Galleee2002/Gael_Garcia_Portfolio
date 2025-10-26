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
      <span style={{ color: "#61DAFB" }}>
        <SiReact />
      </span>
    ),
    title: "React",
    href: "https://react.dev",
    ariaLabel: "React",
  },
  {
    node: (
      <span style={{ color: "#E34F26" }}>
        <SiHtml5 />
      </span>
    ),
    title: "HTML5",
    href: "https://developer.mozilla.org/es/docs/Web/HTML",
    ariaLabel: "HTML5",
  },
  {
    node: (
      <span style={{ color: "#F7DF1E" }}>
        <SiJavascript />
      </span>
    ),
    title: "JavaScript",
    href: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    ariaLabel: "JavaScript",
  },
  {
    node: (
      <span style={{ color: "#1572B6" }}>
        <SiCss3 />
      </span>
    ),
    title: "CSS3",
    href: "https://developer.mozilla.org/es/docs/Web/CSS",
    ariaLabel: "CSS3",
  },
  {
    node: (
      <span style={{ color: "#06B6D4" }}>
        <SiTailwindcss />
      </span>
    ),
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
    ariaLabel: "Tailwind CSS",
  },
  {
    node: (
      <span style={{ color: "#7952B3" }}>
        <SiBootstrap />
      </span>
    ),
    title: "Bootstrap",
    href: "https://getbootstrap.com",
    ariaLabel: "Bootstrap",
  },
  {
    node: (
      <span style={{ color: "#000000" }}>
        <SiNextdotjs />
      </span>
    ),
    title: "Next.js",
    href: "https://nextjs.org",
    ariaLabel: "Next.js",
  },
  {
    node: (
      <span style={{ color: "#3178C6" }}>
        <SiTypescript />
      </span>
    ),
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
    ariaLabel: "TypeScript",
  },
  {
    node: (
      <span style={{ color: "#10A37F" }}>
        <SiOpenai />
      </span>
    ),
    title: "ChatGPT",
    href: "https://openai.com/chatgpt",
    ariaLabel: "ChatGPT",
  },
  {
    node: (
      <span style={{ color: "#8E75B2" }}>
        <SiGooglegemini />
      </span>
    ),
    title: "Gemini",
    href: "https://gemini.google.com",
    ariaLabel: "Gemini",
  },
];
