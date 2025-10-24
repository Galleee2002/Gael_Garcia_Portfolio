import React from "react";
import MainLayout from "@templates/MainLayout";
import Hero from "@organisms/Hero";
import ExperienceSection from "@organisms/ExperienceSection";
import ProjectsSection from "@organisms/ProjectsSection";
import ContactForm from "@organisms/ContactForm";
import Text from "@atoms/Text";

const Home: React.FC = () => {
  return (
    <MainLayout>
      <Hero />

      <ExperienceSection />

      <ProjectsSection />

      {/* Sección Sobre Mí - Placeholder */}
      <section
        id="about"
        className="py-12 md:py-16 lg:py-20 bg-white px-4 md:px-0"
      >
        <div className="container-custom">
          <div className="text-center">
            <Text variant="h2" className="mb-3 md:mb-4 text-3xl md:text-4xl">
              Sobre Mí
            </Text>
            <Text variant="p" className="text-base md:text-xl text-gray-600">
              Próximamente: Mi historia y pasión por el desarrollo
            </Text>
          </div>
        </div>
      </section>

      <ContactForm />

      {/* Sección Herramientas - Placeholder */}
      <section
        id="tools"
        className="py-12 md:py-16 lg:py-20 bg-white px-4 md:px-0"
      >
        <div className="container-custom">
          <div className="text-center">
            <Text variant="h2" className="mb-3 md:mb-4 text-3xl md:text-4xl">
              Herramientas
            </Text>
            <Text variant="p" className="text-base md:text-xl text-gray-600">
              Próximamente: Tecnologías y herramientas que utilizo
            </Text>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
