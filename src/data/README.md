# Data

Esta carpeta contiene **datos estáticos** y configuraciones.

## Características:

- Datos mock para desarrollo
- Configuraciones estáticas
- Constantes de la aplicación

## Estructura:

Organiza datos por tipo o dominio.

## Ejemplo:

```tsx
// projects.data.ts
import { Project } from "@types/common.types";

export const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Una plataforma completa de comercio electrónico",
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/user/project",
  },
  // ... más proyectos
];
```
