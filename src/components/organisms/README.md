# Organisms (Organismos)

Los **Organisms** son componentes complejos que forman secciones distintas de una interfaz. Están compuestos por grupos de moléculas y/o átomos.

## Características:

- Son componentes relativamente complejos
- Forman secciones distintas de la interfaz
- Pueden contener moléculas, átomos y lógica de negocio
- Ejemplos: navbar, hero section, formulario de contacto, footer

## Componentes en esta carpeta:

- **Hero**: Sección hero principal con título, subtítulo y CTAs
- **ProjectsSection**: Sección completa de proyectos con grid de tarjetas
- **ContactForm**: Formulario de contacto completo con validación
- **Sidebar**: Barra lateral fija con navegación, avatar y enlaces sociales

## Uso:

```tsx
import Hero from '@organisms/Hero';
import ProjectsSection from '@organisms/ProjectsSection';
import Sidebar from '@organisms/Sidebar';

<Sidebar />
<Hero
  title="¡Hola! Soy John Doe"
  subtitle="Desarrollador Web"
/>
<ProjectsSection projects={myProjects} />
```
