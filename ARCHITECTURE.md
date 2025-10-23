# 🏗️ Arquitectura del Proyecto - Atomic Design

## 📋 Tabla de Contenidos

1. [Introducción](#introducción)
2. [Patrón Atomic Design](#patrón-atomic-design)
3. [Estructura de Carpetas](#estructura-de-carpetas)
4. [Convenciones de Código](#convenciones-de-código)
5. [Flujo de Desarrollo](#flujo-de-desarrollo)
6. [Guía de Componentes](#guía-de-componentes)

---

## 📖 Introducción

Este proyecto implementa **Atomic Design**, una metodología creada por Brad Frost para crear sistemas de diseño escalables y mantenibles. La idea es dividir la UI en componentes cada vez más complejos, desde los más básicos hasta páginas completas.

## 🎨 Patrón Atomic Design

### Niveles Jerárquicos

```
Atoms → Molecules → Organisms → Templates → Pages
```

### 1️⃣ Atoms (Átomos)

**Definición**: Los componentes UI más básicos que no se pueden dividir más sin perder su utilidad.

**Características**:

- No dependen de otros componentes
- Altamente reutilizables
- Sin lógica de negocio compleja
- Estilizados con Tailwind CSS

**Ejemplos en este proyecto**:

- `Button` - Botón con variantes (primary, secondary, outline)
- `Input` - Campo de entrada de formulario
- `Text` - Componente de texto con variantes (h1-h6, p, span)

**Cuándo crear un Atom**:

- ✅ Elemento UI básico que se usará en múltiples lugares
- ✅ Componente sin dependencias de otros componentes
- ❌ Componente con lógica de negocio compleja

---

### 2️⃣ Molecules (Moléculas)

**Definición**: Grupos de átomos que funcionan juntos como una unidad.

**Características**:

- Compuestos por 2 o más átomos
- Tienen un propósito específico
- Reutilizables en diferentes contextos
- Pueden tener estado local simple

**Ejemplos en este proyecto**:

- `FormField` - Label + Input + Error message
- `Card` - Contenedor con estilos consistentes
- `ProjectCard` - Tarjeta de proyecto con imagen, descripción y botones

**Cuándo crear una Molecule**:

- ✅ Combinación de átomos que se repite
- ✅ Unidad funcional con propósito claro
- ❌ Sección completa de la página

---

### 3️⃣ Organisms (Organismos)

**Definición**: Componentes complejos que forman secciones distintas de la interfaz.

**Características**:

- Compuestos por moléculas y/o átomos
- Pueden tener lógica de negocio
- Representan secciones completas
- Pueden manejar estado complejo

**Ejemplos en este proyecto**:

- `Hero` - Sección hero con título, subtítulo y CTAs
- `ProjectsSection` - Grid completo de proyectos
- `ContactForm` - Formulario con validación
- `Sidebar` - Barra lateral fija con navegación y enlaces sociales

**Cuándo crear un Organism**:

- ✅ Sección completa de la UI
- ✅ Componente con lógica de negocio
- ✅ Combinación de múltiples moléculas
- ❌ Layout completo de página

---

### 4️⃣ Templates (Plantillas)

**Definición**: Estructuras de página que definen el layout pero no contienen datos específicos.

**Características**:

- Definen la estructura de la página
- No contienen datos específicos
- Reutilizables para diferentes páginas
- Incluyen slots para contenido

**Ejemplos en este proyecto**:

- `MainLayout` - Layout con contenido y Footer

**Cuándo crear un Template**:

- ✅ Estructura de página reutilizable
- ✅ Layout común para múltiples páginas
- ❌ Página con contenido específico

---

### 5️⃣ Pages (Páginas)

**Definición**: Instancias específicas de templates con contenido real.

**Características**:

- Usan templates
- Contienen datos específicos
- Representan rutas de la aplicación
- Coordinan organismos

**Ejemplos en este proyecto**:

- `Home` - Página principal del portfolio

**Cuándo crear una Page**:

- ✅ Ruta específica de la aplicación
- ✅ Combinación de organismos con contenido real

---

## 📁 Estructura de Carpetas Completa

```
Gael_Garcia_Portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── atoms/
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Input/
│   │   │   │   ├── Input.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Text/
│   │   │   │   ├── Text.tsx
│   │   │   │   └── index.ts
│   │   │   └── README.md
│   │   ├── molecules/
│   │   │   ├── Card/
│   │   │   │   ├── Card.tsx
│   │   │   │   └── index.ts
│   │   │   ├── FormField/
│   │   │   │   ├── FormField.tsx
│   │   │   │   └── index.ts
│   │   │   ├── ProjectCard/
│   │   │   │   ├── ProjectCard.tsx
│   │   │   │   └── index.ts
│   │   │   └── README.md
│   │   ├── organisms/
│   │   │   ├── ContactForm/
│   │   │   │   ├── ContactForm.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Hero/
│   │   │   │   ├── Hero.tsx
│   │   │   │   └── index.ts
│   │   │   ├── ProjectsSection/
│   │   │   │   ├── ProjectsSection.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Sidebar/
│   │   │   │   ├── Sidebar.tsx
│   │   │   │   └── index.ts
│   │   │   └── README.md
│   │   └── templates/
│   │       ├── MainLayout/
│   │       │   ├── MainLayout.tsx
│   │       │   └── index.ts
│   │       └── README.md
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── README.md
│   ├── hooks/
│   │   ├── useWindowSize.ts
│   │   └── README.md
│   ├── utils/
│   │   ├── formatters.ts
│   │   └── README.md
│   ├── types/
│   │   ├── common.types.ts
│   │   └── README.md
│   ├── context/
│   │   └── README.md
│   ├── services/
│   │   └── README.md
│   ├── data/
│   │   └── README.md
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   ├── fonts/
│   │   └── README.md
│   ├── styles/
│   ├── App.tsx
│   ├── main.tsx
│   ├── style.css
│   └── README.md
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── .gitignore
├── README.md
└── ARCHITECTURE.md
```

---

## 📝 Convenciones de Código

### Nomenclatura

```typescript
// ✅ Componentes: PascalCase
Button.tsx;
FormField.tsx;
ProjectCard.tsx;

// ✅ Hooks: camelCase con prefijo 'use'
useWindowSize.ts;
useLocalStorage.ts;

// ✅ Utilidades: camelCase
formatters.ts;
validators.ts;

// ✅ Tipos: PascalCase con sufijo .types
common.types.ts;
project.types.ts;
```

### Estructura de Componente

```typescript
// ComponentName.tsx
import React from 'react';

interface ComponentNameProps {
  // Props aquí
}

const ComponentName: React.FC<ComponentNameProps> = ({
  // destructure props
}) => {
  // lógica del componente

  return (
    // JSX
  );
};

export default ComponentName;
```

### Importaciones

```typescript
// ✅ Usar alias
import Button from "@atoms/Button";
import { formatDate } from "@utils/formatters";

// ❌ Evitar rutas relativas largas
import Button from "../../components/atoms/Button";
```

---

## 🔄 Flujo de Desarrollo

### Crear un Nuevo Componente

1. **Identificar el nivel** (Atom, Molecule, Organism, Template, Page)
2. **Crear la carpeta** con el nombre del componente
3. **Crear archivos**:
   - `ComponentName.tsx` - El componente
   - `index.ts` - Export por defecto
4. **Definir props** con TypeScript interface
5. **Implementar** el componente
6. **Documentar** si es necesario

### Ejemplo: Crear un nuevo Atom

```bash
# 1. Crear carpeta
src/components/atoms/Icon/

# 2. Crear archivos
Icon.tsx
index.ts
```

```typescript
// Icon.tsx
import React from "react";

interface IconProps {
  name: string;
  size?: "sm" | "md" | "lg";
  color?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = "md",
  color = "currentColor",
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  return (
    <svg className={`${sizeClasses[size]} ${className}`} fill={color}>
      {/* SVG content */}
    </svg>
  );
};

export default Icon;
```

```typescript
// index.ts
export { default } from "./Icon";
```

---

## 📚 Guía de Componentes

### Componentes Actuales

#### Atoms

- **Button** - Botón con variantes y tamaños
- **Input** - Campo de entrada
- **Text** - Texto con variantes tipográficas

#### Molecules

- **Card** - Contenedor estilizado
- **FormField** - Campo de formulario completo
- **ProjectCard** - Tarjeta de proyecto

#### Organisms

- **Hero** - Sección hero
- **ProjectsSection** - Sección de proyectos
- **ContactForm** - Formulario de contacto
- **Sidebar** - Barra lateral fija con navegación

#### Templates

- **MainLayout** - Layout principal

#### Pages

- **Home** - Página principal

---

## 🚀 Próximos Pasos

### Componentes Sugeridos

**Atoms**:

- Icon - Componente de iconos
- Badge - Etiqueta pequeña
- Avatar - Imagen de perfil

**Molecules**:

- Skill Badge - Badge con nivel de habilidad
- Social Link - Enlace a redes sociales

**Organisms**:

- Skills Section - Sección de habilidades
- Footer - Pie de página
- About Section - Sección sobre mí

---

## 💡 Mejores Prácticas

1. **Mantén componentes pequeños y enfocados**
2. **Usa TypeScript para todas las props**
3. **Documenta componentes complejos**
4. **Sigue la jerarquía de Atomic Design**
5. **Reutiliza antes de crear nuevo componente**
6. **Mantén estilos consistentes con Tailwind**
7. **Usa alias para importaciones limpias**

---

## 📖 Recursos

- [Atomic Design por Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/)

---

¡Feliz desarrollo! 🎉
