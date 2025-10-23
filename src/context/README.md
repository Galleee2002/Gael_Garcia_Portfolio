# Context

Esta carpeta contiene **React Context** para gestión de estado global.

## Características:

- Estado global de la aplicación
- Evita prop drilling
- Ejemplos: ThemeContext, AuthContext, LanguageContext

## Estructura:

Cada contexto debe incluir:

- Context
- Provider
- Custom hook para usar el context

## Ejemplo:

```tsx
// ThemeContext.tsx
import React, { createContext, useContext, useState } from "react";

interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
```
