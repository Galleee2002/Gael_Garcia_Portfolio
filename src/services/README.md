# Services

Esta carpeta contiene **servicios** para lógica de negocio y llamadas a APIs.

## Características:

- Llamadas a APIs externas
- Lógica de negocio compleja
- Abstracción de datos

## Estructura:

Organiza servicios por dominio o API.

## Ejemplo:

```tsx
// api.service.ts
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export const apiService = {
  get: async <T,>(endpoint: string): Promise<T> => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) throw new Error("API request failed");
    return response.json();
  },

  post: async <T,>(endpoint: string, data: any): Promise<T> => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("API request failed");
    return response.json();
  },
};
```
