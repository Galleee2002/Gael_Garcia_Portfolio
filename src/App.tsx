import React, { useState } from "react";
import Home from "@pages/Home";
import Sidebar from "@organisms/Sidebar";
import DotGrid from "@atoms/DotGrid";
import MenuIcon from "@atoms/MenuIcon";

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-200 relative">
      {/* Background animado - Solo en el área del contenido principal */}
      <div className="fixed inset-0 lg:left-80 z-0">
        <DotGrid
          dotSize={10}
          gap={15}
          baseColor="#d1d5db"
          activeColor="#374151"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Botón de menú móvil */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-lg shadow-lg lg:hidden hover:bg-gray-900 transition-colors"
        aria-label="Toggle menu"
      >
        <MenuIcon isOpen={isSidebarOpen} />
      </button>

      {/* Sidebar */}
      <Sidebar
        avatarSrc="/src/assets/images/perfil.webp"
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Contenido principal */}
      <div className="lg:ml-80 relative z-10">
        <Home />
      </div>
    </div>
  );
};

export default App;
