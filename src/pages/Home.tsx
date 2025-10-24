import React from "react";
import MainLayout from "@templates/MainLayout";
import Hero from "@organisms/Hero";
import ExperienceSection from "@organisms/ExperienceSection";
import ProjectsSection from "@organisms/ProjectsSection";
import ContactForm from "@organisms/ContactForm";
import PlaceholderSection from "@organisms/PlaceholderSection";

const Home: React.FC = () => {
  return (
    <MainLayout>
      <Hero />

      <ExperienceSection />

      <ProjectsSection />

      <PlaceholderSection
        id="about"
        title="Sobre Mí"
        subtitle="Próximamente: Mi historia y pasión por el desarrollo"
      />

      <ContactForm />

      <PlaceholderSection
        id="tools"
        title="Herramientas"
        subtitle="Próximamente: Tecnologías y herramientas que utilizo"
      />
    </MainLayout>
  );
};

export default Home;
