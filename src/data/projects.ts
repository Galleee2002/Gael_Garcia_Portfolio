import type { Project } from "../types/common.types";
import ecommerceImage from "../assets/images/ecommerce-project.png";
import calculadoraImage from "../assets/images/project_calculadora.png";
import portfolioImage from "../assets/images/portfolio-project.png";

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Plataforma de comercio electrónico completa con carrito de compras, pasarela de pago y panel de administración.",
    technologies: ["React", "TypeScript", "NextJS", "Supabase"],
    imageUrl: ecommerceImage,
    demoUrl: "https://tu-proyecto-ecommerce.vercel.app",
    githubUrl: "https://github.com/DevDavidg/fueradecontexto.git",
  },
  {
    id: 2,
    title: "Calculadora",
    description:
      "Calculadora funcional con diseño moderno y responsivo. Implementa toda la lógica de operaciones matemáticas usando JavaScript vanilla, con interfaz adaptable a cualquier dispositivo.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: calculadoraImage,
    demoUrl: "https://calculator-project-css-html-js.vercel.app/",
    githubUrl:
      "https://github.com/Galleee2002/Calculator_Project_CSS_HTML_JS.git",
  },
  {
    id: 3,
    title: "Portfolio Personal",
    description:
      "Portfolio personal interactivo con animaciones suaves y diseño responsive siguiendo Atomic Design.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    imageUrl: portfolioImage,
    demoUrl: "https://gael-garcia-portfolio.vercel.app/",
    githubUrl: "https://github.com/Galleee2002/Gael_Garcia_Portfolio.git",
  },
];
