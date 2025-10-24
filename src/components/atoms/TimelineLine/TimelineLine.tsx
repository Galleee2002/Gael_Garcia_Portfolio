import React from "react";

interface TimelineLineProps {
  variant?: "solid" | "dashed";
  height?: "auto" | "full";
  className?: string;
}

const TimelineLine: React.FC<TimelineLineProps> = ({
  variant = "solid",
  height = "full",
  className = "",
}) => {
  const variantStyles = {
    solid: "border-l-2 border-gray-300",
    dashed: "border-l-2 border-dashed border-gray-300",
  };

  const heightStyles = {
    auto: "flex-1",
    full: "h-full",
  };

  return (
    <div
      className={`${variantStyles[variant]} ${heightStyles[height]} ${className}`}
    />
  );
};

export default TimelineLine;
