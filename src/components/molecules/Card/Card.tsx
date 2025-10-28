import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hover = false,
}) => {
  return (
    <div
      className={`
        bg-white rounded-lg shadow-md p-6
        ${
          hover
            ? "transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            : ""
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
