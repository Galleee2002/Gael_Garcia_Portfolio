import React from "react";

interface TechBadgeProps {
  technology: string;
  className?: string;
  variant?: "default" | "experience";
}

type ColorConfig = {
  bg: string;
  text: string;
  border: string;
  hover: string;
};

/**
 * Helper para crear configuración de colores
 */
const color = (
  bg: string,
  text: string,
  border: string,
  hover: string
): ColorConfig => ({ bg, text, border, hover });

/**
 * Mapeo de tecnologías a sus colores específicos
 */
const techColors: Record<string, ColorConfig> = {
  // Frontend Frameworks & Libraries
  React: color(
    "bg-cyan-500",
    "text-white",
    "border-cyan-600",
    "hover:bg-cyan-600 hover:border-cyan-700"
  ),
  "Next.js": color(
    "bg-black",
    "text-white",
    "border-gray-800",
    "hover:bg-gray-900 hover:border-gray-700"
  ),
  NextJS: color(
    "bg-black",
    "text-white",
    "border-gray-800",
    "hover:bg-gray-900 hover:border-gray-700"
  ),
  Vue: color(
    "bg-emerald-500",
    "text-white",
    "border-emerald-600",
    "hover:bg-emerald-600 hover:border-emerald-700"
  ),
  Angular: color(
    "bg-red-600",
    "text-white",
    "border-red-700",
    "hover:bg-red-700 hover:border-red-800"
  ),
  Bootstrap: color(
    "bg-purple-600",
    "text-white",
    "border-purple-700",
    "hover:bg-purple-700 hover:border-purple-800"
  ),

  // Languages
  JavaScript: color(
    "bg-yellow-400",
    "text-gray-900",
    "border-yellow-500",
    "hover:bg-yellow-500 hover:border-yellow-600"
  ),
  TypeScript: color(
    "bg-blue-600",
    "text-white",
    "border-blue-700",
    "hover:bg-blue-700 hover:border-blue-800"
  ),
  Python: color(
    "bg-indigo-600",
    "text-white",
    "border-indigo-700",
    "hover:bg-indigo-700 hover:border-indigo-800"
  ),
  Java: color(
    "bg-orange-600",
    "text-white",
    "border-orange-700",
    "hover:bg-orange-700 hover:border-orange-800"
  ),

  // Backend & Runtime
  "Node.js": color(
    "bg-green-600",
    "text-white",
    "border-green-700",
    "hover:bg-green-700 hover:border-green-800"
  ),
  Express: color(
    "bg-gray-700",
    "text-white",
    "border-gray-800",
    "hover:bg-gray-800 hover:border-gray-900"
  ),
  NestJS: color(
    "bg-rose-600",
    "text-white",
    "border-rose-700",
    "hover:bg-rose-700 hover:border-rose-800"
  ),

  // Databases
  PostgreSQL: color(
    "bg-blue-700",
    "text-white",
    "border-blue-800",
    "hover:bg-blue-800 hover:border-blue-900"
  ),
  MongoDB: color(
    "bg-green-700",
    "text-white",
    "border-green-800",
    "hover:bg-green-800 hover:border-green-900"
  ),
  MySQL: color(
    "bg-sky-600",
    "text-white",
    "border-sky-700",
    "hover:bg-sky-700 hover:border-sky-800"
  ),
  MariaDB: color(
    "bg-slate-700",
    "text-white",
    "border-slate-800",
    "hover:bg-slate-800 hover:border-slate-900"
  ),
  Redis: color(
    "bg-red-600",
    "text-white",
    "border-red-700",
    "hover:bg-red-700 hover:border-red-800"
  ),

  // Cloud & DevOps
  AWS: color(
    "bg-orange-500",
    "text-white",
    "border-orange-600",
    "hover:bg-orange-600 hover:border-orange-700"
  ),
  Azure: color(
    "bg-sky-700",
    "text-white",
    "border-sky-800",
    "hover:bg-sky-800 hover:border-sky-900"
  ),
  Docker: color(
    "bg-sky-500",
    "text-white",
    "border-sky-600",
    "hover:bg-sky-600 hover:border-sky-700"
  ),
  Kubernetes: color(
    "bg-indigo-600",
    "text-white",
    "border-indigo-700",
    "hover:bg-indigo-700 hover:border-indigo-800"
  ),

  // State Management & Tools
  Redux: color(
    "bg-purple-600",
    "text-white",
    "border-purple-700",
    "hover:bg-purple-700 hover:border-purple-800"
  ),
  "Tailwind CSS": color(
    "bg-teal-500",
    "text-white",
    "border-teal-600",
    "hover:bg-teal-600 hover:border-teal-700"
  ),
  Git: color(
    "bg-orange-600",
    "text-white",
    "border-orange-700",
    "hover:bg-orange-700 hover:border-orange-800"
  ),
  GraphQL: color(
    "bg-pink-600",
    "text-white",
    "border-pink-700",
    "hover:bg-pink-700 hover:border-pink-800"
  ),

  // Firebase & BaaS
  Firebase: color(
    "bg-amber-500",
    "text-white",
    "border-amber-600",
    "hover:bg-amber-600 hover:border-amber-700"
  ),
  Supabase: color(
    "bg-emerald-600",
    "text-white",
    "border-emerald-700",
    "hover:bg-emerald-700 hover:border-emerald-800"
  ),

  // Web Fundamentals
  HTML: color(
    "bg-orange-600",
    "text-white",
    "border-orange-700",
    "hover:bg-orange-700 hover:border-orange-800"
  ),
  CSS: color(
    "bg-indigo-500",
    "text-white",
    "border-indigo-600",
    "hover:bg-indigo-600 hover:border-indigo-700"
  ),
  SASS: color(
    "bg-pink-600",
    "text-white",
    "border-pink-700",
    "hover:bg-pink-700 hover:border-pink-800"
  ),
};

const defaultColor = color(
  "bg-gray-600",
  "text-white",
  "border-gray-700",
  "hover:bg-gray-700 hover:border-gray-800"
);

const TechBadge: React.FC<TechBadgeProps> = ({
  technology,
  className = "",
  variant = "default",
}) => {
  const colors = techColors[technology] || defaultColor;

  // Si es variante de experiencia, usar fondo negro y texto blanco
  if (variant === "experience") {
    return (
      <span
        className={`px-3 py-1 text-xs md:text-sm rounded-full border transition-all duration-200 font-medium bg-black text-white border-black hover:bg-gray-900 hover:border-gray-900 ${className}`}
      >
        {technology}
      </span>
    );
  }

  return (
    <span
      className={`px-3 py-1 text-xs md:text-sm rounded-full border transition-all duration-200 font-medium ${colors.bg} ${colors.text} ${colors.border} ${colors.hover} ${className}`}
    >
      {technology}
    </span>
  );
};

export default TechBadge;
