import React from "react";
import Icon from "@atoms/Icon";

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
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center gap-3 px-4 py-3 
        text-white text-left font-medium
        rounded-[10px]
        transition-all duration-300
        hover:bg-opacity-80
        ${isActive ? "bg-opacity-90" : "bg-opacity-100"}
        ${className}
      `}
      style={{ backgroundColor: "#1d1d1d" }}
    >
      <Icon name={icon} size="md" color="white" />
      <span className="capitalize">{label}</span>
    </button>
  );
};

export default NavButton;
