import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <div className="min-h-screen">
    <main>{children}</main>
    <footer
      className="text-white py-6 md:py-8 px-4"
      style={{ backgroundColor: "var(--secondary-color)" }}
    >
      <div className="container-custom text-center">
        <p className="text-gray-300 text-sm md:text-base">
          © {new Date().getFullYear()} Gael Garcia. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  </div>
);

export default MainLayout;
