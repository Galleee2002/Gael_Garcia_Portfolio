import React from "react";
import Icon from "@atoms/Icon";
import { themeColors, socialColors } from "@utils/colors";

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
    className={`group flex items-center justify-between px-3 py-1.5 md:py-2 text-sm rounded-md ${className}`}
  >
    <span
      className="font-normal relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full"
      style={{
        color: themeColors.primary,
        "--after-bg-color": themeColors.primary,
      } as React.CSSProperties & { "--after-bg-color"?: string }}
      data-after-color={themeColors.primary}
    >
      <style>{`
        span[data-after-color="${themeColors.primary}"]::after {
          background-color: ${themeColors.primary};
        }
      `}</style>
      {label}
    </span>
    <span
      className="transition-colors duration-300"
      style={{ color: themeColors.text }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = socialColors[platform];
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = themeColors.text;
      }}
    >
      <Icon name={platform} size="md" color="currentColor" />
    </span>
  </a>
);

export default SocialLink;
