# Atoms (Átomos)

Los **Atoms** son los componentes más básicos de la interfaz. Son elementos indivisibles que no se pueden descomponer más sin perder su utilidad.

## Características:

- Son componentes UI más pequeños
- No dependen de otros componentes
- Son altamente reutilizables
- Ejemplos: botones, inputs, labels, iconos, imágenes

## Componentes en esta carpeta:

- **Button**: Botón reutilizable con diferentes variantes y tamaños
- **Text**: Componente de texto con diferentes variantes (h1-h6, p, span)
- **Input**: Input de formulario con estilos consistentes
- **Avatar**: Componente de imagen circular para fotos de perfil
- **Icon**: Componente de iconos SVG con múltiples variantes
- **NavButton**: Botón de navegación con icono y texto
- **SocialLink**: Enlace a redes sociales con icono

## Uso:

```tsx
import Button from '@atoms/Button';
import Text from '@atoms/Text';

<Button variant="primary" size="md">Click me</Button>
<Text variant="h1">Título Principal</Text>
```
