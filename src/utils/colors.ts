/**
 * Sistema de colores centralizado del portfolio
 *
 * Este archivo exporta todos los colores utilizados en el proyecto,
 * permitiendo su manipulación centralizada desde TypeScript.
 * Solo se utilizan colores principales del tema.
 */

/**
 * Colores principales del tema
 */
export const themeColors = {
  primary: "#374151",
  secondary: "#1d1d1d",
  background: "#f4f4f4",
  backgroundMenu: "#e5e5e5",
  text: "#000000",
  textSecondary: "#adadad",
} as const;

/**
 * Colores de tecnologías para hover
 */
export const techColors = {
  react: "#61DAFB",
  html: "#E34F26",
  javascript: "#F7DF1E",
  css: "#1572B6",
  tailwind: "#06B6D4",
  bootstrap: "#7952B3",
  nextjs: "#000000",
  typescript: "#3178C6",
  chatgpt: "#10A37F",
  gemini: "#8E75B2",
  cursor: "#000000",
} as const;

/**
 * Colores de redes sociales para hover
 */
export const socialColors = {
  instagram: "#E4405F",
  whatsapp: "#25D366",
  linkedin: "#0A66C2",
  github: "#000000",
} as const;

/**
 * Exportación por defecto para acceso rápido
 */
export default themeColors;
