import React from "react";
import Text from "@atoms/Text";

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  className = "",
}) => (
  <div className={`text-center mb-8 md:mb-12 ${className}`}>
    <Text variant="h2" className="mb-3 md:mb-4 text-3xl md:text-4xl">
      {title}
    </Text>
    {description && (
      <Text
        variant="p"
        className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto px-4"
      >
        {description}
      </Text>
    )}
  </div>
);

export default SectionHeader;
