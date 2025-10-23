import React from "react";
import Card from "@molecules/Card";
import Text from "@atoms/Text";
import Button from "@atoms/Button";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  projectUrl?: string;
  githubUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  imageUrl,
  projectUrl,
  githubUrl,
}) => {
  return (
    <Card hover className="flex flex-col h-full">
      {imageUrl && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
      )}
      <Text variant="h3" className="mb-2">
        {title}
      </Text>
      <div className="grow mb-4">
        <Text variant="p" className="text-gray-600">
          {description}
        </Text>
      </div>
      <div className="mb-4 flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {projectUrl && (
          <Button
            variant="primary"
            size="sm"
            onClick={() => window.open(projectUrl, "_blank")}
          >
            Ver Proyecto
          </Button>
        )}
        {githubUrl && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(githubUrl, "_blank")}
          >
            GitHub
          </Button>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;
