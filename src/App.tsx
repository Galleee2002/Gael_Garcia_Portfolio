import React from "react";
import Home from "@pages/Home";
import Sidebar from "@organisms/Sidebar";

const App: React.FC = () => (
  <div className="min-h-screen bg-gray-50">
    <Sidebar avatarSrc="/src/assets/images/perfil.webp" />
    <div className="ml-80">
      <Home />
    </div>
  </div>
);

export default App;
