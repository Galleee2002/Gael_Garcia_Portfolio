import React from "react";
import Icon from "@atoms/Icon";
import { themeColors } from "@utils/colors";

interface NavButtonProps {
  icon: "home" | "experience" | "projects" | "about" | "contact" | "tools";
  label: string;
  onClick?: () => void;
  isActive?: boolean;
  className?: string;
}

const NavButton: React.FC<NavButtonProps> = ({
  icon,
  label,
  onClick,
  isActive = false,
  className = "",
}) => (
  <button
    onClick={onClick}
    className={`group w-full flex items-center gap-3 px-3 py-1.5 md:py-2 lg:py-2.5 text-white text-left text-sm font-medium rounded-lg transition-all duration-200 hover:bg-opacity-90 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] ${
      isActive ? "bg-opacity-95 shadow-md" : "bg-opacity-100"
    } ${className}`}
    style={{ backgroundColor: themeColors.secondary }}
  >
    <Icon name={icon} size="md" color="white" />
    <span className="capitalize tracking-wide">{label}</span>
  </button>
);

export default NavButton;
