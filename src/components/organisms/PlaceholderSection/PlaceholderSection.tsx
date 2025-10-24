import React from "react";
import Text from "@atoms/Text";

interface PlaceholderSectionProps {
  id: string;
  title: string;
  subtitle: string;
  bgColor?: string;
  className?: string;
}

const PlaceholderSection: React.FC<PlaceholderSectionProps> = ({
  id,
  title,
  subtitle,
  bgColor = "bg-white",
  className = "",
}) => (
  <section
    id={id}
    className={`py-12 md:py-16 lg:py-20 ${bgColor} px-4 md:px-0 ${className}`}
  >
    <div className="container-custom">
      <div className="text-center">
        <Text variant="h2" className="mb-3 md:mb-4 text-3xl md:text-4xl">
          {title}
        </Text>
        <Text variant="p" className="text-base md:text-xl text-gray-600">
          {subtitle}
        </Text>
      </div>
    </div>
  </section>
);

export default PlaceholderSection;
