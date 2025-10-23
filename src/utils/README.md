# Utilidades

Esta carpeta contiene **funciones de utilidad** y helpers reutilizables.

## Características:

- Funciones puras y reutilizables
- Sin dependencias de React
- Ejemplos: formatters, validators, helpers

## Estructura:

Organiza las utilidades por categoría o propósito.

## Ejemplo:

```tsx
// formatters.ts
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
};
```
