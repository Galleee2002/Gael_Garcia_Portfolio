/**
 * Navega suavemente a un elemento en la página
 */
export const scrollToElement = (href: string, callback?: () => void): void => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    callback?.();
  }
};
