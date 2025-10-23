import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <div className="min-h-screen">
    <main>{children}</main>
    <footer className="bg-gray-800 text-white py-8">
      <div className="container-custom text-center">
        <p className="text-gray-300">
          © {new Date().getFullYear()} Gael Garcia. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  </div>
);

export default MainLayout;
