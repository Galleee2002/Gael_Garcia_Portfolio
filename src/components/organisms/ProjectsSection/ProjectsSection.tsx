import React from "react";
import ProjectCard from "@molecules/ProjectCard";
import SectionHeader from "@molecules/SectionHeader";
import { projects as defaultProjects } from "@data/projects";
import type { Project } from "../../../types/common.types";

interface ProjectsSectionProps {
  projects?: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects = defaultProjects,
}) => {
  return (
    <section
      id="projects"
      className="py-12 md:py-16 lg:py-20 bg-white px-6 md:px-8 lg:px-12"
    >
      <div className="container-custom">
        <SectionHeader
          title="Mis Proyectos"
          description="Estos son algunos de los proyectos en los que he trabajado recientemente."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
              demoUrl={project.demoUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
