import React from "react";
import Text from "@atoms/Text";
import LogoLoop from "@organisms/LogoLoop";
import { techLogos } from "@data/technologies";

interface SkillsSectionProps {
  id?: string;
  className?: string;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({
  id = "skills",
  className = "",
}) => {
  return (
    <section
      id={id}
      className={`py-12 md:py-16 lg:py-20 bg-white px-4 md:px-0 ${className}`}
    >
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-12">
          <Text variant="h2" className="mb-3 md:mb-4 text-3xl md:text-4xl">
            Tecnologías y Herramientas
          </Text>
          <Text variant="p" className="text-base md:text-xl text-gray-600">
            Herramientas y tecnologías con las que trabajo día a día
          </Text>
        </div>

        <div className="max-w-6xl mx-auto">
          <div
            style={{
              height: "200px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <LogoLoop
              logos={techLogos}
              speed={120}
              direction="left"
              logoHeight={48}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Tecnologías y herramientas"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
