import React from "react";

interface TimelineDotProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  animate?: boolean;
  className?: string;
}

const TimelineDot: React.FC<TimelineDotProps> = ({
  variant = "primary",
  size = "md",
  animate = true,
  className = "",
}) => {
  const sizeStyles = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  const variantStyles = {
    primary: "bg-gray-700 ring-4 ring-gray-300",
    secondary: "bg-gray-400 ring-4 ring-gray-200",
  };

  return (
    <div
      className={`${sizeStyles[size]} ${
        variantStyles[variant]
      } rounded-full shrink-0 transition-all duration-300 ${
        animate ? "animate-pulse-dot" : ""
      } ${className}`}
    />
  );
};

export default TimelineDot;
