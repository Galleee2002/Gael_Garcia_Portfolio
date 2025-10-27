import React from "react";
import Text from "@atoms/Text";
import Button from "@atoms/Button";
import { scrollToElement } from "@utils/navigation";
import useScrollReveal from "@hooks/useScrollReveal";

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

const Hero: React.FC<HeroProps> = ({
  title = "¡Hola! Soy Gael Garcia",
  subtitle = "Desarrollador Web Full Stack",
  description = "Soy un desarrollador Front-End especializado en crear interfaces modernas, rápidas y responsivas. Trabajo con React, TypeScript y Tailwind CSS para construir experiencias web limpias y eficientes, adaptadas a todo tipo de pantallas y dispositivos. Mi enfoque está en combinar diseño funcional y rendimiento para lograr sitios que no solo se vean bien, sino que también ofrezcan una experiencia fluida al usuario.",
}) => {
  const titleReveal = useScrollReveal<HTMLHeadingElement>({
    direction: "up",
    duration: 700,
    delay: 0,
  });
  const subtitleReveal = useScrollReveal<HTMLDivElement>({
    direction: "up",
    duration: 700,
    delay: 100,
  });
  const descriptionReveal = useScrollReveal<HTMLDivElement>({
    direction: "up",
    duration: 700,
    delay: 200,
  });
  const buttonsReveal = useScrollReveal<HTMLDivElement>({
    direction: "up",
    duration: 700,
    delay: 300,
  });

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 md:pt-16 md:px-0"
    >
      <div className="container-custom text-left">
        <div className="max-w-3xl flex flex-col gap-3 md:gap-4">
          <h1
            ref={titleReveal.ref}
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ${titleReveal.className}`}
          >
            {title}
          </h1>
          <div ref={subtitleReveal.ref} className={subtitleReveal.className}>
            <Text
              variant="h2"
              color="text-gray-500"
              className="text-2xl sm:text-3xl md:text-4xl"
            >
              {subtitle}
            </Text>
          </div>
          <div
            ref={descriptionReveal.ref}
            className={descriptionReveal.className}
          >
            <Text variant="p" className="text-sm sm:text-base text-gray-600">
              {description}
            </Text>
          </div>
          <div
            ref={buttonsReveal.ref}
            className={`flex flex-col sm:flex-row gap-3 md:gap-4 justify-start mt-2 ${buttonsReveal.className}`}
          >
            <Button
              variant="primary"
              size="md"
              className="sm:text-base md:px-7! md:py-3.5! md:text-lg!"
              onClick={() => scrollToElement("#projects")}
            >
              Ver Proyectos
            </Button>
            <Button
              variant="secondary"
              size="md"
              className="sm:text-base md:px-7! md:py-3.5! md:text-lg!"
              onClick={() => scrollToElement("#contact")}
            >
              Contacto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
