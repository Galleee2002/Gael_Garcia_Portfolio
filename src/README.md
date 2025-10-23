# Estructura del Proyecto - Atomic Design

Este proyecto sigue el patrón **Atomic Design** para organizar componentes de manera escalable y mantenible.

## 📁 Estructura de Carpetas

```
src/
├── components/           # Componentes organizados por Atomic Design
│   ├── atoms/           # Componentes básicos indivisibles
│   ├── molecules/       # Combinaciones de átomos
│   ├── organisms/       # Secciones completas de UI
│   └── templates/       # Layouts de página
├── pages/               # Páginas completas de la aplicación
├── hooks/               # Custom hooks de React
├── utils/               # Funciones de utilidad
├── types/               # Definiciones de TypeScript
├── context/             # React Context para estado global
├── services/            # Lógica de negocio y APIs
├── data/                # Datos estáticos y configuraciones
├── assets/              # Recursos estáticos
│   ├── images/         # Imágenes
│   ├── icons/          # Iconos
│   └── fonts/          # Fuentes
└── styles/              # Estilos globales adicionales
```

## 🎨 Atomic Design - Niveles

### 1. Atoms (Átomos)

Componentes UI más básicos que no se pueden dividir más.

- Ejemplos: Button, Input, Text, Icon
- Path: `@atoms/ComponentName`

### 2. Molecules (Moléculas)

Combinaciones de átomos que funcionan juntos.

- Ejemplos: FormField, Card, ProjectCard
- Path: `@molecules/ComponentName`

### 3. Organisms (Organismos)

Secciones complejas formadas por moléculas y átomos.

- Ejemplos: Hero, ContactForm, Sidebar
- Path: `@organisms/ComponentName`

### 4. Templates (Plantillas)

Estructuras de página sin contenido específico.

- Ejemplos: MainLayout, DashboardLayout
- Path: `@templates/ComponentName`

### 5. Pages (Páginas)

Instancias de templates con contenido real.

- Ejemplos: Home, About, Contact
- Path: `@pages/PageName`

## 🔧 Alias de Importación

Este proyecto usa alias para importaciones más limpias:

```tsx
import Button from "@atoms/Button";
import FormField from "@molecules/FormField";
import Sidebar from "@organisms/Sidebar";
import MainLayout from "@templates/MainLayout";
import Home from "@pages/Home";
import { useWindowSize } from "@hooks/useWindowSize";
import { formatDate } from "@utils/formatters";
import type { Project } from "@types/common.types";
```

## 📝 Convenciones de Código

1. **Nombres de Componentes**: PascalCase
2. **Nombres de Archivos**: Mismos que el componente
3. **Estructura de Componente**:
   ```tsx
   ComponentName/
   ├── ComponentName.tsx
   └── index.ts
   ```
4. **Props Interface**: Nombrar como `ComponentNameProps`
5. **TypeScript**: Usar tipos estrictos siempre que sea posible

## 🚀 Desarrollo

### Comandos

```bash
npm run dev       # Inicia servidor de desarrollo
npm run build     # Construye para producción
npm run preview   # Preview de build de producción
```

## 🎯 Buenas Prácticas

1. **Single Responsibility**: Cada componente debe tener una sola responsabilidad
2. **Composición**: Preferir composición sobre herencia
3. **Props**: Mantener props interfaces simples y claras
4. **Reutilización**: Los componentes deben ser lo más reutilizables posible
5. **Testing**: Escribir tests para componentes críticos (futura implementación)
