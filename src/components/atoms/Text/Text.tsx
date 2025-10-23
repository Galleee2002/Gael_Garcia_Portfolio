import React from "react";

interface TextProps {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  className?: string;
  color?: string;
}

const Text: React.FC<TextProps> = ({
  children,
  variant = "p",
  className = "",
  color = "text-gray-900",
}) => {
  const variantStyles = {
    h1: "text-5xl font-bold ",
    h2: "text-4xl font-bold ",
    h3: "text-3xl font-semibold ",
    h4: "text-2xl font-semibold ",
    h5: "text-xl font-medium ",
    h6: "text-lg font-medium ",
    p: "text-base font-light",
    span: "text-base",
  };

  const Component = variant;

  return (
    <Component className={`${variantStyles[variant]} ${color} ${className}`}>
      {children}
    </Component>
  );
};

export default Text;
