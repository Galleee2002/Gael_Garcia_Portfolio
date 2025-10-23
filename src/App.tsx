import React from "react";
import Home from "@pages/Home";
import Sidebar from "@organisms/Sidebar";

const App: React.FC = () => {
  const avatarImage = "/src/assets/images/perfil.webp";

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar avatarSrc={avatarImage} />
      <div className="ml-80">
        <Home />
      </div>
    </div>
  );
};

export default App;
