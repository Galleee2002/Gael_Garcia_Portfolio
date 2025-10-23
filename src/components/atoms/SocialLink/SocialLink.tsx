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
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group flex items-center justify-between px-3 py-2 text-gray-700 text-sm rounded-md transition-all duration-200 hover:bg-gray-200 hover:bg-opacity-50 hover:text-gray-900 ${className}`}
  >
    <span className="font-normal">{label}</span>
    <Icon name={platform} size="md" color="#1d1d1d" />
  </a>
);

export default SocialLink;
