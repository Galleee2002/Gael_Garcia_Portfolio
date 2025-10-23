import React from "react";
import Text from "@atoms/Text";
import ProjectCard from "@molecules/ProjectCard";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  projectUrl?: string;
  githubUrl?: string;
}

interface ProjectsSectionProps {
  projects?: Project[];
}

const defaultProjects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Plataforma de comercio electrónico completa con carrito de compras, pasarela de pago y panel de administración.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Task Manager App",
    description:
      "Aplicación de gestión de tareas con autenticación, notificaciones en tiempo real y colaboración en equipo.",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Portfolio Personal",
    description:
      "Portfolio personal interactivo con animaciones suaves y diseño responsive siguiendo Atomic Design.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com",
  },
];

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects = defaultProjects,
}) => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <Text variant="h2" className="mb-4">
            Mis Proyectos
          </Text>
          <Text variant="p" className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estos son algunos de los proyectos en los que he trabajado
            recientemente.
          </Text>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
