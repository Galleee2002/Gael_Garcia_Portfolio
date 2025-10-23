# Templates (Plantillas)

Los **Templates** son estructuras de página que definen el layout pero no contienen datos específicos. Son esqueletos de páginas que pueden ser reutilizados.

## Características:

- Definen la estructura y layout de la página
- No contienen datos específicos
- Son reutilizables para diferentes páginas
- Ejemplos: layout principal, layout de blog, layout de dashboard

## Componentes en esta carpeta:

- **MainLayout**: Layout principal con navbar, área de contenido y footer

## Uso:

```tsx
import MainLayout from "@templates/MainLayout";

<MainLayout>
  <YourPageContent />
</MainLayout>;
```
