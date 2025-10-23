# 🎨 Portfolio de Gael García

Portfolio personal desarrollado con React, TypeScript y Tailwind CSS siguiendo el patrón Atomic Design.

## ✨ Características

- ⚛️ **React 18** con TypeScript
- 🎨 **Tailwind CSS** para estilos
- 🏗️ **Atomic Design** para arquitectura de componentes
- ⚡ **Vite** como build tool
- 📱 **Responsive Design** - Funciona en todos los dispositivos
- 🎯 **Componentes Reutilizables** - Fácil de extender y mantener

## 🚀 Inicio Rápido

### Requisitos Previos

- Node.js 16.x o superior
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone <tu-repositorio>

# Navegar al directorio
cd Gael_Garcia_Portfolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 📦 Scripts Disponibles

```bash
npm run dev       # Inicia el servidor de desarrollo
npm run build     # Construye la aplicación para producción
npm run preview   # Previsualiza la build de producción
```

## 🏗️ Estructura del Proyecto

```
Gael_Garcia_Portfolio/
├── public/              # Archivos públicos estáticos
├── src/
│   ├── components/      # Componentes organizados por Atomic Design
│   │   ├── atoms/      # Componentes básicos (Button, Input, Text)
│   │   ├── molecules/  # Combinaciones de átomos (FormField, Card)
│   │   ├── organisms/  # Secciones completas (Hero, ContactForm, Sidebar)
│   │   └── templates/  # Layouts de página (MainLayout)
│   ├── pages/          # Páginas de la aplicación (Home)
│   ├── hooks/          # Custom React hooks
│   ├── utils/          # Funciones de utilidad
│   ├── types/          # Definiciones de TypeScript
│   ├── context/        # React Context
│   ├── services/       # Servicios y APIs
│   ├── data/           # Datos estáticos
│   ├── assets/         # Imágenes, iconos, fuentes
│   ├── App.tsx         # Componente principal
│   ├── main.tsx        # Punto de entrada
│   └── style.css       # Estilos globales
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Atomic Design

Este proyecto sigue el patrón Atomic Design:

- **Atoms**: Componentes UI básicos (Button, Input, Text)
- **Molecules**: Combinaciones de átomos (FormField, ProjectCard)
- **Organisms**: Secciones completas (Hero, ContactForm, Sidebar)
- **Templates**: Estructuras de página (MainLayout)
- **Pages**: Páginas completas con contenido (Home)

[Más información sobre Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)

## 🛠️ Tecnologías Utilizadas

- **React** - Librería de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS utility-first
- **Vite** - Build tool y dev server
- **ESLint** - Linting de código

## 🎯 Alias de Importación

El proyecto está configurado con alias para importaciones más limpias:

```typescript
import Button from "@atoms/Button";
import FormField from "@molecules/FormField";
import Sidebar from "@organisms/Sidebar";
import MainLayout from "@templates/MainLayout";
import Home from "@pages/Home";
```

## 📝 Personalización

### Modificar Información Personal

1. **Hero Section**: Edita `src/components/organisms/Hero/Hero.tsx`
2. **Proyectos**: Edita `src/components/organisms/ProjectsSection/ProjectsSection.tsx`
3. **Sidebar**: Edita `src/components/organisms/Sidebar/Sidebar.tsx`

### Añadir Nuevos Proyectos

Modifica el array `defaultProjects` en `src/components/organisms/ProjectsSection/ProjectsSection.tsx`

### Cambiar Colores

Edita las variables CSS en `src/style.css` o usa las clases de Tailwind directamente.

## 🚀 Despliegue

### Build para Producción

```bash
npm run build
```

Los archivos optimizados estarán en la carpeta `dist/`

### Desplegar en Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Desplegar en Netlify

```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Desplegar
netlify deploy --prod
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👤 Autor

**Gael García**

- Portfolio: [tu-sitio.com]
- GitHub: [@tu-usuario]
- LinkedIn: [tu-linkedin]

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

⭐ ¡No olvides dar una estrella al proyecto si te ha sido útil!
