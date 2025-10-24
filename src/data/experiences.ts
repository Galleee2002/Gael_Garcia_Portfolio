import type { Experience } from "@types/common.types";

/**
 * Datos de experiencia profesional
 * Ordenados de más reciente a más antiguo
 */
export const experiences: Experience[] = [
  {
    id: 1,
    title: "Desarrollador Full Stack",
    company: "Tech Solutions Inc.",
    period: "2024 - Actualidad",
    location: "Remoto",
    description:
      "Desarrollo y mantenimiento de aplicaciones web modernas utilizando tecnologías de vanguardia. Liderazgo de proyectos y colaboración con equipos multidisciplinarios para entregar soluciones de alta calidad.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    id: 2,
    title: "Desarrollador Frontend",
    company: "Digital Agency",
    period: "2023 - 2024",
    location: "Madrid, España",
    description:
      "Creación de interfaces de usuario responsivas y accesibles. Implementación de mejores prácticas de UX/UI y optimización del rendimiento de aplicaciones web.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Redux", "Git"],
  },
  {
    id: 3,
    title: "Desarrollador Junior",
    company: "StartUp Innovadora",
    period: "2023 - 2023",
    location: "Barcelona, España",
    description:
      "Inicio en el desarrollo web profesional, participando en el desarrollo de MVP y prototipos. Aprendizaje continuo de nuevas tecnologías y metodologías ágiles.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Firebase"],
  },
];
