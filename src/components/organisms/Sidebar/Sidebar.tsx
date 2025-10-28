import React, { useEffect, useRef } from "react";
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
    label: "GitHub",
    href: "https://github.com/Galleee2002",
  },
];

const Sidebar: React.FC<SidebarProps> = ({
  avatarSrc,
  className = "",
  isOpen = false,
  onClose,
}) => {
  const sidebarRef = useRef<HTMLElement>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  // Prevenir scroll del body cuando el sidebar está abierto
  useEffect(() => {
    if (isOpen) {
      // Guardar la posición actual del scroll
      const scrollY = window.scrollY;

      // Aplicar estilos para prevenir scroll
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      // Restaurar scroll cuando se cierra el sidebar
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      // Restaurar la posición del scroll
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    // Cleanup al desmontar el componente
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  // Detectar swipe hacia la izquierda para cerrar el sidebar en móvil
  useEffect(() => {
    if (!isOpen || !sidebarRef.current) return;

    const handleTouchStart = (e: TouchEvent): void => {
      const touch = e.touches[0];
      touchStartRef.current = {
        x: touch.clientX,
        y: touch.clientY,
      };
    };

    const handleTouchEnd = (e: TouchEvent): void => {
      if (!touchStartRef.current) return;

      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - touchStartRef.current.x;
      const deltaY = touch.clientY - touchStartRef.current.y;

      // Verificar que el movimiento sea principalmente horizontal
      const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY);

      // Verificar que sea un swipe hacia la izquierda con suficiente distancia
      if (isHorizontalSwipe && deltaX < -50 && onClose) {
        onClose();
      }

      touchStartRef.current = null;
    };

    const sidebar = sidebarRef.current;
    sidebar.addEventListener("touchstart", handleTouchStart, { passive: true });
    sidebar.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      sidebar.removeEventListener("touchstart", handleTouchStart);
      sidebar.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isOpen, onClose]);
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        ref={sidebarRef}
        className={`fixed left-0 top-0 h-screen w-72 sm:w-80 flex flex-col z-40 transition-transform duration-300 shadow-lg ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 ${className}`}
        style={{ backgroundColor: "#e5e5e5" }}
      >
        {/* Avatar Section */}
        <div className="flex flex-col items-center gap-1.5 pt-4 pb-3 px-4 md:gap-2 lg:gap-3 lg:pt-6 lg:pb-5 flex-shrink-0">
          <Avatar
            src={avatarSrc}
            size="lg"
            className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
          />
          <div className="w-full text-center">
            <TextType
              text={["Web Developer", "Amazing Interfaces"]}
              as="p"
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className="text-gray-800 font-semibold text-sm md:text-base lg:text-lg"
            />
          </div>
        </div>

        {/* Navigation Section */}
        <nav className="flex flex-col gap-1 px-6 mb-3 md:gap-1.5 lg:mb-4 flex-shrink-0">
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
        <div className="mt-auto pb-16 px-6 md:pb-4 lg:pb-5 flex-shrink-0">
          <div className="mb-1.5 md:mb-2">
            <Text
              variant="h6"
              color="var(--secondary-color)"
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
