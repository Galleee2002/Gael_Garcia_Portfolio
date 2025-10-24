import React, { useState } from "react";
import Home from "@pages/Home";
import Sidebar from "@organisms/Sidebar";
import DotGrid from "@atoms/DotGrid";

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
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isSidebarOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
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
