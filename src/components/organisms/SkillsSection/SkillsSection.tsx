import React from "react";
import Text from "@atoms/Text";
import LogoLoop from "@organisms/LogoLoop";
import useScrollReveal from "@hooks/useScrollReveal";
import { techLogos } from "@data/technologies";

interface SkillsSectionProps {
  id?: string;
  className?: string;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({
  id = "skills",
  className = "",
}) => {
  const titleReveal = useScrollReveal<HTMLDivElement>({
    direction: "up",
    duration: 700,
    delay: 0,
  });

  const logoLoopReveal = useScrollReveal<HTMLDivElement>({
    direction: "up",
    duration: 700,
    delay: 150,
  });

  return (
    <section
      id={id}
      className={`pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-10 lg:pb-12 bg-white px-4 md:px-0 ${className}`}
    >
      <div className="container-custom">
        <div
          ref={titleReveal.ref}
          className={`text-center mb-8 md:mb-12 ${titleReveal.className}`}
        >
          <Text variant="h2" className="mb-3 md:mb-4 text-3xl md:text-4xl">
            Tecnologías y Herramientas
          </Text>
          <Text variant="p" className="text-base md:text-xl text-gray-600">
            Herramientas y tecnologías con las que trabajo día a día
          </Text>
        </div>

        <div
          ref={logoLoopReveal.ref}
          className={`max-w-6xl mx-auto ${logoLoopReveal.className}`}
        >
          <div className="py-6 space-y-4">
            {/* Primera fila - Derecha a Izquierda */}
            <div
              style={{
                height: "64px",
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
                ariaLabel="Tecnologías y herramientas - fila 1"
              />
            </div>

            {/* Segunda fila - Izquierda a Derecha */}
            <div
              style={{
                height: "64px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <LogoLoop
                logos={techLogos}
                speed={120}
                direction="right"
                logoHeight={48}
                gap={40}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="#ffffff"
                ariaLabel="Tecnologías y herramientas - fila 2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
