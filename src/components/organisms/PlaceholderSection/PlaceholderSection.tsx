import React from "react";
import Text from "@atoms/Text";
import Card from "@molecules/Card";
import useScrollReveal from "@hooks/useScrollReveal";

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
}) => {
  const { ref, className: revealClassName } = useScrollReveal<HTMLDivElement>({
    direction: "up",
    duration: 700,
    delay: 0,
  });

  return (
    <section
      id={id}
      className={`py-12 md:py-16 lg:py-20 ${bgColor} px-6 md:px-8 lg:px-12 ${className}`}
    >
      <div
        ref={ref}
        className={`container-custom max-w-4xl ${revealClassName}`}
      >
        <Card
          hover
          className="text-center py-8 md:py-12 min-h-[300px] flex flex-col justify-center"
        >
          <Text variant="h2" className="mb-3 md:mb-4 text-3xl md:text-4xl">
            {title}
          </Text>
          <Text
            variant="p"
            className="text-base md:text-xl text-gray-600 leading-relaxed"
          >
            {subtitle}
          </Text>
        </Card>
      </div>
    </section>
  );
};

export default PlaceholderSection;
