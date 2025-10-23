# Types

Esta carpeta contiene **definiciones de tipos** de TypeScript compartidos en toda la aplicación.

## Características:

- Interfaces y tipos reutilizables
- Enums y tipos de datos comunes
- Mejora la seguridad de tipos

## Estructura:

Organiza los tipos por dominio o funcionalidad.

## Ejemplo:

```tsx
// project.types.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  projectUrl?: string;
  githubUrl?: string;
  createdAt: Date;
}

export enum ProjectStatus {
  DRAFT = "draft",
  PUBLISHED = "published",
  ARCHIVED = "archived",
}
```
