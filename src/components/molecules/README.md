# Molecules (Moléculas)

Las **Molecules** son grupos de átomos unidos entre sí que funcionan como una unidad. Son componentes relativamente simples pero más complejos que los átomos.

## Características:

- Están compuestos por varios átomos
- Tienen un propósito específico
- Son reutilizables en diferentes contextos
- Ejemplos: campo de formulario (label + input), tarjeta de producto, ítem de navegación

## Componentes en esta carpeta:

- **FormField**: Campo de formulario completo con label, input y mensaje de error
- **Card**: Tarjeta contenedora con estilos consistentes
- **ProjectCard**: Tarjeta para mostrar proyectos con imagen, descripción y tecnologías

## Uso:

```tsx
import FormField from '@molecules/FormField';
import ProjectCard from '@molecules/ProjectCard';

<FormField
  label="Email"
  type="email"
  placeholder="tu@email.com"
  required
/>

<ProjectCard
  title="Mi Proyecto"
  description="Descripción del proyecto"
  technologies={['React', 'TypeScript']}
/>
```
