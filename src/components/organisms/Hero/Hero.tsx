import React from "react";
import Text from "@atoms/Text";
import Button from "@atoms/Button";

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

const Hero: React.FC<HeroProps> = ({
  title = "¡Hola! Soy Gael García",
  subtitle = "Desarrollador Web Full Stack",
  description = "Soy un desarrollador Front-End especializado en crear interfaces modernas, rápidas y responsivas. Trabajo con React, TypeScript y Tailwind CSS para construir experiencias web limpias y eficientes, adaptadas a todo tipo de pantallas y dispositivos. Mi enfoque está en combinar diseño funcional y rendimiento para lograr sitios que no solo se vean bien, sino que también ofrezcan una experiencia fluida al usuario.",
}) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="container-custom text-left">
        <div className="max-w-3xl flex flex-col gap-4">
          <h1 className="text-6xl md:text-7xl font-bold ">{title}</h1>
          <Text
            variant="h2"
            color="text-gray-500"
            className="text-3xl md:text-4xl  "
          >
            {subtitle}
          </Text>
          <Text variant="p" className="text-base text-gray-600 ">
            {description}
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Button
              variant="primary"
              size="lg"
              onClick={() => (window.location.href = "#projects")}
            >
              Ver Proyectos
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => (window.location.href = "#contact")}
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
