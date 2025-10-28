import React from "react";
import Icon from "@atoms/Icon";

interface SocialLinkProps {
  platform: "instagram" | "whatsapp" | "linkedin" | "github";
  label: string;
  href?: string;
  className?: string;
}

const platformColors = {
  instagram: "#E4405F",
  whatsapp: "#25D366",
  linkedin: "#0A66C2",
  github: "#1d1d1d",
};

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
    className={`group flex items-center justify-between px-3 py-1.5 md:py-2 text-sm rounded-md ${className}`}
  >
    <span
      className="font-normal relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#2a64f5] after:transition-all after:duration-300 hover:after:w-full"
      style={{ color: "#2a64f5" }}
    >
      {label}
    </span>
    <span
      className="transition-colors duration-300"
      style={{ color: "#1d1d1d" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = platformColors[platform];
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "#1d1d1d";
      }}
    >
      <Icon name={platform} size="md" color="currentColor" />
    </span>
  </a>
);

export default SocialLink;
