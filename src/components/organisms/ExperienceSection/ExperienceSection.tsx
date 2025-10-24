import React from "react";
import TimelineItem from "@molecules/TimelineItem";
import Text from "@atoms/Text";
import { experiences } from "../../../data/experiences";

interface ExperienceSectionProps {
  className?: string;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  className = "",
}) => {
  return (
    <section
      id="experience"
      className={`py-12 md:py-16 lg:py-20 bg-white px-4 md:px-0 ${className}`}
    >
      <div className="container-custom">
        {/* Encabezado de la sección */}
        <div className="text-center mb-12 md:mb-16">
          <Text
            variant="h2"
            className="mb-3 md:mb-4 text-3xl md:text-4xl font-bold text-gray-800"
          >
            Experiencia
          </Text>
          <Text
            variant="p"
            className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Mi trayectoria profesional en el desarrollo de software
          </Text>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              experience={experience}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
