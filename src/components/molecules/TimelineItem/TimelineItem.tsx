import React from "react";
import TimelineDot from "@atoms/TimelineDot";
import TimelineLine from "@atoms/TimelineLine";
import Text from "@atoms/Text";
import TechBadge from "@atoms/TechBadge";
import useScrollReveal from "@hooks/useScrollReveal";
import type { Experience } from "../../../types/common.types";

interface TimelineItemProps {
  experience: Experience;
  isLast?: boolean;
  className?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  experience,
  isLast = false,
  className = "",
}) => {
  const { ref, className: revealClassName } = useScrollReveal<HTMLDivElement>({
    direction: "left",
    duration: 700,
    delay: 0,
  });

  return (
    <div
      ref={ref}
      className={`flex gap-4 md:gap-6 ${className} ${revealClassName}`}
    >
      {/* Columna de la línea temporal (izquierda) */}
      <div className="flex flex-col items-center pt-1">
        <TimelineDot variant="primary" size="md" />
        {!isLast && (
          <TimelineLine
            variant="solid"
            height="auto"
            className="mt-2 min-h-[120px]"
          />
        )}
      </div>

      {/* Columna del contenido (derecha) */}
      <div className="flex-1 pb-8 md:pb-12">
        {/* Período */}
        <Text
          variant="span"
          className="text-sm md:text-base font-medium text-gray-500 mb-1 block"
        >
          {experience.period}
        </Text>

        {/* Título del puesto */}
        <Text
          variant="h3"
          className="text-xl md:text-2xl font-semibold text-gray-800 mb-1"
        >
          {experience.title}
        </Text>

        {/* Empresa y ubicación */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <Text
            variant="span"
            className="text-base md:text-lg font-medium text-gray-700"
          >
            {experience.company}
          </Text>
          {experience.location && (
            <>
              <span className="text-gray-400">•</span>
              <Text
                variant="span"
                className="text-sm md:text-base text-gray-500"
              >
                {experience.location}
              </Text>
            </>
          )}
        </div>

        {/* Descripción */}
        <Text
          variant="p"
          className="text-sm md:text-base text-gray-600 mb-3 leading-relaxed"
        >
          {experience.description}
        </Text>

        {/* Tecnologías */}
        {experience.technologies && experience.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, index) => (
              <TechBadge key={index} technology={tech} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
