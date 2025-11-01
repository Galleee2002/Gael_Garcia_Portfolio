import React from "react";
import LogoLoop from "@organisms/LogoLoop";
import SectionHeader from "@molecules/SectionHeader";
import useScrollReveal from "@hooks/useScrollReveal";
import { techLogos } from "@data/technologies";
import { themeColors } from "@utils/colors";

interface SkillsSectionProps {
  id?: string;
  className?: string;
}

const logoLoopProps = {
  logos: techLogos,
  speed: 100,
  logoHeight: 48,
  gap: 56,
  pauseOnHover: true,
  scaleOnHover: true,
  fadeOut: false,
  fadeOutColor: themeColors.background,
};

const logoRowStyle = {
  height: "72px",
  position: "relative" as const,
  overflow: "hidden" as const,
};

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
      className={`pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-10 lg:pb-12 bg-white px-6 md:px-8 lg:px-12 ${className}`}
    >
      <div className="container-custom">
        <div ref={titleReveal.ref} className={titleReveal.className}>
          <SectionHeader
            title="Tecnologías y Herramientas"
            description="Herramientas y tecnologías con las que trabajo día a día"
          />
        </div>

        <div
          ref={logoLoopReveal.ref}
          className={`max-w-6xl mx-auto ${logoLoopReveal.className}`}
        >
          <div className="py-6 space-y-4">
            <div style={logoRowStyle}>
              <LogoLoop
                {...logoLoopProps}
                direction="left"
                ariaLabel="Tecnologías y herramientas - fila 1"
              />
            </div>

            <div style={logoRowStyle}>
              <LogoLoop
                {...logoLoopProps}
                direction="right"
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
