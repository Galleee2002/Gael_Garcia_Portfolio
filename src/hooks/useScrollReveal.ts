import { useEffect, useRef, useState } from "react";

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  duration?: number;
  once?: boolean;
}

interface UseScrollRevealReturn<T extends HTMLElement = HTMLElement> {
  ref: React.RefObject<T>;
  isVisible: boolean;
  className: string;
}

/**
 * Hook personalizado para animaciones de scroll reveal
 * Detecta cuando un elemento entra en el viewport y aplica animaciones
 *
 * @param options - Opciones de configuración para el scroll reveal
 * @returns Objeto con ref, isVisible y className
 */
const useScrollReveal = <T extends HTMLElement = HTMLElement>(
  options: UseScrollRevealOptions = {}
): UseScrollRevealReturn<T> => {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px",
    delay = 0,
    direction = "up",
    duration = 700,
    once = true,
  } = options;

  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            setHasBeenVisible(true);
          }, delay);
        } else if (!once && hasBeenVisible) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, delay, once, hasBeenVisible]);

  // Generar clases de animación basadas en la dirección
  const getDirectionClasses = (): string => {
    if (isVisible) {
      return "opacity-100 translate-x-0 translate-y-0";
    }

    switch (direction) {
      case "up":
        return "opacity-0 translate-y-10";
      case "down":
        return "opacity-0 -translate-y-10";
      case "left":
        return "opacity-0 translate-x-10";
      case "right":
        return "opacity-0 -translate-x-10";
      case "fade":
        return "opacity-0";
      default:
        return "opacity-0 translate-y-10";
    }
  };

  // Generar clases de duración
  const getDurationClass = (): string => {
    if (duration <= 300) return "duration-300";
    if (duration <= 500) return "duration-500";
    if (duration <= 700) return "duration-700";
    if (duration <= 1000) return "duration-1000";
    return "duration-700";
  };

  const className = `transition-all ease-out ${getDurationClass()} ${getDirectionClasses()}`;

  return {
    ref: ref as React.RefObject<T>,
    isVisible,
    className,
  };
};

export default useScrollReveal;
