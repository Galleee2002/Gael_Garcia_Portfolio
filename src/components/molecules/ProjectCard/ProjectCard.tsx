import React from "react";
import Card from "@molecules/Card";
import Text from "@atoms/Text";
import Button from "@atoms/Button";
import TechBadge from "@atoms/TechBadge";
import useScrollReveal from "@hooks/useScrollReveal";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  projectUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  imageUrl,
  projectUrl,
  demoUrl,
  githubUrl,
}) => {
  const { ref, className } = useScrollReveal<HTMLDivElement>({
    direction: "up",
    duration: 700,
    delay: 0,
  });

  return (
    <div ref={ref} className={className}>
      <Card hover className="flex flex-col h-full">
        {/* Título del proyecto */}
        <Text variant="h3" className="mb-4 text-center">
          {title}
        </Text>

        {/* Imagen preview del proyecto */}
        {imageUrl && (
          <div className="mb-4 -mx-6 overflow-hidden flex items-center justify-center bg-gray-100 h-48">
            <img
              src={imageUrl}
              alt={`Preview de ${title}`}
              className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}

        {/* Descripción del proyecto */}
        <div className="grow mb-4">
          <Text variant="p" className="text-gray-600">
            {description}
          </Text>
        </div>

        {/* Tecnologías utilizadas */}
        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <TechBadge key={index} technology={tech} variant="experience" />
          ))}
        </div>

        <div className="flex flex-col gap-2">
          {projectUrl && (
            <Button
              variant="primary"
              size="sm"
              onClick={() => window.open(projectUrl, "_blank")}
            >
              Ver Proyecto
            </Button>
          )}
          <div className="flex gap-3 px-2">
            {demoUrl && (
              <Button
                variant="primary"
                size="sm"
                onClick={() => window.open(demoUrl, "_blank")}
                className="flex-1"
              >
                Demo
              </Button>
            )}
            {githubUrl && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(githubUrl, "_blank")}
                className="flex-1"
              >
                GitHub
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProjectCard;
