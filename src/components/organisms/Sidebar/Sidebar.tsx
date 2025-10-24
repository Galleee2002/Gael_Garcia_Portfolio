import React from "react";
import Avatar from "@atoms/Avatar";
import NavButton from "@atoms/NavButton";
import SocialLink from "@atoms/SocialLink";
import Text from "@atoms/Text";
import TextType from "@atoms/TextType";
import { scrollToElement } from "@utils/navigation";

interface SidebarProps {
  avatarSrc?: string;
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

const navigationItems = [
  { icon: "home" as const, label: "Inicio", href: "#home" },
  { icon: "experience" as const, label: "Experiencias", href: "#experience" },
  { icon: "projects" as const, label: "Proyectos", href: "#projects" },
  { icon: "about" as const, label: "Sobre mi", href: "#about" },
  { icon: "contact" as const, label: "Contáctame", href: "#contact" },
  { icon: "tools" as const, label: "Herramientas", href: "#tools" },
];

const socialLinks = [
  {
    platform: "instagram" as const,
    label: "Instagram",
    href: "https://www.instagram.com/gaell.garciaa/",
  },
  {
    platform: "whatsapp" as const,
    label: "WhatsApp",
    href: "https://wa.me/+5401159897869",
  },
  {
    platform: "linkedin" as const,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gael-garcia-07b486294",
  },
  {
    platform: "github" as const,
    label: "Github",
    href: "http://github.com/Galleee2002",
  },
];

const Sidebar: React.FC<SidebarProps> = ({
  avatarSrc,
  className = "",
  isOpen = false,
  onClose,
}) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed left-0 top-0 h-screen w-72 sm:w-80 flex flex-col z-40 transition-transform duration-300 shadow-lg ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 ${className}`}
        style={{ backgroundColor: "#e5e5e5" }}
      >
        {/* Avatar Section */}
        <div className="flex flex-col items-center gap-3 pt-8 pb-6 px-4">
          <Avatar
            src={avatarSrc}
            size="lg"
            className="w-24 h-24 md:w-28 md:h-28"
          />
          <div className="w-full text-center">
            <TextType
              text={["Web Developer", "Amazing Interfaces"]}
              as="p"
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className="text-gray-800 font-semibold text-lg"
            />
          </div>
        </div>

        {/* Navigation Section */}
        <nav className="flex flex-col gap-1.5 px-3 mb-6">
          {navigationItems.map((item) => (
            <NavButton
              key={item.label}
              icon={item.icon}
              label={item.label}
              onClick={() => scrollToElement(item.href, onClose)}
            />
          ))}
        </nav>

        {/* Social Links Section */}
        <div className="mt-auto pb-6 px-3">
          <div className="mb-3 px-2">
            <Text
              variant="h6"
              color="text-gray-600"
              className="font-medium text-xs uppercase tracking-wider"
            >
              Conectar
            </Text>
          </div>
          <div className="flex flex-col gap-0.5">
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
    </>
  );
};

export default Sidebar;
