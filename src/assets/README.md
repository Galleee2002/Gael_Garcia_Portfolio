# Assets

Esta carpeta contiene **recursos estáticos** de la aplicación.

## Estructura:

### `/images`

Imágenes utilizadas en la aplicación (logos, backgrounds, fotos, etc.)

### `/icons`

Iconos SVG y archivos de iconos

### `/fonts`

Fuentes personalizadas (si no se usan CDN)

## Buenas Prácticas:

- Optimiza imágenes antes de agregarlas
- Usa formatos modernos (WebP, AVIF) cuando sea posible
- Organiza por categoría dentro de cada subcarpeta
- Usa nombres descriptivos en minúsculas con guiones

## Ejemplo de uso:

```tsx
import logo from '@assets/images/logo.png';
import ProfileIcon from '@assets/icons/profile.svg';

<img src={logo} alt="Logo" />
<ProfileIcon className="w-6 h-6" />
```
