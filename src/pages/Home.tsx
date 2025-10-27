import React from "react";
import MainLayout from "@templates/MainLayout";
import Hero from "@organisms/Hero";
import ExperienceSection from "@organisms/ExperienceSection";
import ProjectsSection from "@organisms/ProjectsSection";
import ContactForm from "@organisms/ContactForm";
import PlaceholderSection from "@organisms/PlaceholderSection";
import SkillsSection from "@organisms/SkillsSection";

const Home: React.FC = () => {
  return (
    <MainLayout>
      <Hero />

      <ExperienceSection />

      <ProjectsSection />

      <PlaceholderSection
        id="about"
        title="Sobre Mí"
        subtitle="Tengo 23 años y estudio Diseño Web y Programación en la Escuela Da Vinci. Desde hace un año me dedico al desarrollo frontend, enfocándome principalmente en la parte visual de los proyectos. Me apasiona crear interfaces atractivas, intuitivas y funcionales, buscando siempre un equilibrio entre estética y usabilidad. Mi objetivo es seguir creciendo como desarrollador y combinar creatividad con código para construir experiencias digitales que conecten con las personas."
      />
      <SkillsSection id="tools" />
      <ContactForm />
    </MainLayout>
  );
};

export default Home;
