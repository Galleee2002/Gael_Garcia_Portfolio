import React from "react";
import Icon from "@atoms/Icon";

interface SocialLinkProps {
  platform: "instagram" | "whatsapp" | "linkedin" | "github";
  label: string;
  href?: string;
  className?: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({
  platform,
  label,
  href = "#",
  className = "",
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        flex items-center justify-between px-4 py-2
        text-gray-700 text-sm
        transition-all duration-300
        hover:text-gray-900
        ${className}
      `}
    >
      <span>{label}</span>
      <Icon name={platform} size="md" color="#1d1d1d" />
    </a>
  );
};

export default SocialLink;
