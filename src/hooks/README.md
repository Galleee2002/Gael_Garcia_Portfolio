# Hooks Personalizados

Esta carpeta contiene **custom hooks** de React para lógica reutilizable.

## Características:

- Lógica reutilizable encapsulada
- Sigue las reglas de hooks de React
- Ejemplos: useLocalStorage, useDebounce, useFetch

## Estructura:

Cada hook debe estar en su propio archivo con el prefijo `use`.

## Ejemplo:

```tsx
// useWindowSize.ts
import { useState, useEffect } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
```
