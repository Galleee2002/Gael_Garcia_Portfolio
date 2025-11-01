import React, { useState } from "react";
import Home from "@pages/Home";
import Sidebar from "@organisms/Sidebar";
import DotGrid from "@atoms/DotGrid";
import MenuIcon from "@atoms/MenuIcon";
import perfilImage from "@assets/images/perfil.webp";
import { useWindowSize } from "@hooks/useWindowSize";
import useSwipeGesture from "@hooks/useSwipeGesture";
import { themeColors } from "@utils/colors";

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { width } = useWindowSize();

  // Solo habilitar swipe gesture en móviles (< 1024px)
  const isMobile = width < 1024;

  // Detectar swipe desde el borde izquierdo para abrir el sidebar
  useSwipeGesture({
    onSwipeRight: () => {
      if (isMobile && !isSidebarOpen) {
        setIsSidebarOpen(true);
      }
    },
    edgeThreshold: 30,
    minSwipeDistance: 50,
    enabled: isMobile,
  });

  return (
    <div className="min-h-screen bg-gray-200 relative">
      {/* Background animado - Solo en el área del contenido principal */}
      <div className="fixed inset-0 lg:left-80 z-0">
        <DotGrid
          dotSize={10}
          gap={15}
          baseColor={themeColors.textSecondary}
          activeColor={themeColors.primary}
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
        avatarSrc={perfilImage}
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
