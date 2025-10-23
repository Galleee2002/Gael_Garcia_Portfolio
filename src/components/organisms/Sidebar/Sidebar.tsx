import React from "react";
import Avatar from "@atoms/Avatar";
import NavButton from "@atoms/NavButton";
import SocialLink from "@atoms/SocialLink";
import Text from "@atoms/Text";

interface SidebarProps {
  avatarSrc?: string;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ avatarSrc, className = "" }) => {
  const navigationItems = [
    { icon: "home" as const, label: "Inicio" },
    { icon: "experience" as const, label: "Experiencias" },
    { icon: "projects" as const, label: "Proyectos" },
    { icon: "about" as const, label: "Sobre mi" },
    { icon: "contact" as const, label: "Contáctame" },
    { icon: "tools" as const, label: "Herramientas" },
  ];

  const socialLinks = [
    { platform: "instagram" as const, label: "Instagram", href: "#" },
    { platform: "whatsapp" as const, label: "WhatsApp", href: "#" },
    { platform: "linkedin" as const, label: "LinkedIn", href: "#" },
    { platform: "github" as const, label: "Github", href: "#" },
  ];

  return (
    <aside
      className={`fixed left-0 top-0 h-screen w-80 flex flex-col ${className}`}
      style={{ backgroundColor: "#e5e5e5" }}
    >
      {/* Avatar Section */}
      <div className="flex justify-center py-8">
        <Avatar src={avatarSrc} size="xl" />
      </div>

      {/* Navigation Buttons */}
      <nav className="flex flex-col gap-2 px-4">
        {navigationItems.map((item) => (
          <NavButton
            key={item.label}
            icon={item.icon}
            label={item.label}
            onClick={() => console.log(`Navegando a ${item.label}`)}
          />
        ))}
      </nav>

      {/* Social Links Section */}
      <div className="mt-auto pb-6">
        <div className="px-4 mb-2">
          <Text variant="h5" color="text-gray-800" className="font-semibold">
            Conectar
          </Text>
        </div>
        <div className="flex flex-col">
          {socialLinks.map((link) => (
            <SocialLink
              key={link.platform}
              platform={link.platform}
              label={link.label}
              href={link.href}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
