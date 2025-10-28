import React from "react";
import TimelineItem from "@molecules/TimelineItem";
import SectionHeader from "@molecules/SectionHeader";
import { experiences } from "@data/experiences";

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
        <SectionHeader
          title="Experiencia"
          description="Mi trayectoria profesional en el desarrollo de software"
          className="mb-12 md:mb-16"
        />

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
