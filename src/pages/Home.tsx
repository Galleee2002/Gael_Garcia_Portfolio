import React from "react";
import MainLayout from "@templates/MainLayout";
import Hero from "@organisms/Hero";
import ProjectsSection from "@organisms/ProjectsSection";
import ContactForm from "@organisms/ContactForm";

const Home: React.FC = () => {
  return (
    <MainLayout>
      <Hero />
      <ProjectsSection />
      <ContactForm />
    </MainLayout>
  );
};

export default Home;
