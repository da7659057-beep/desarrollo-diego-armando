# Desarrollo Diego Armando — Sitio web

Sitio web premium en React + Vite + Tailwind CSS + Framer Motion, con panel de administración privado para editar el contenido sin tocar código.

## Requisitos

- Node.js 18 o superior

## Instalación

```bash
npm install
npm run dev
```

Abre `http://localhost:5173` para ver el sitio.

## Compilar para producción

```bash
npm run build
npm run preview
```

Los archivos listos para publicar quedan en la carpeta `dist/`.

## Panel de administración

Entra a `/admin` (por ejemplo `http://localhost:5173/admin`).

- Contraseña por defecto: `diego2026`
- **Cámbiala antes de publicar el sitio**, editando `ADMIN_PASSWORD` en `src/context/AdminAuthContext.jsx`.

Desde el panel puedes editar:

- Marca y datos de contacto (nombre, eslogan, correo, WhatsApp, redes)
- Hero (título, subtítulo, botones, etiquetas)
- Estadísticas
- Servicios
- Por qué elegirme
- Testimonios
- Proceso de trabajo
- Preguntas frecuentes

Los cambios se guardan automáticamente en el navegador (localStorage). Esto es ideal para uso personal desde tu propio equipo; si necesitas que el contenido se comparta entre distintos dispositivos o visitantes, el siguiente paso natural es conectar el `ContentContext` (`src/context/ContentContext.jsx`) a una base de datos o API (por ejemplo Supabase, Firebase o un backend propio) en lugar de `localStorage`.

## Formulario de contacto

El formulario de la sección "Contacto" abre WhatsApp con el mensaje prellenado. Para recibir los mensajes por correo o guardarlos en una base de datos, conecta un servicio como Formspree, Resend o un backend propio en `src/components/sections/Contact.jsx`.

## Íconos de servicios

Los campos "Ícono" del panel usan nombres de [lucide-react](https://lucide.dev/icons/). Escribe el nombre exacto del ícono (ej. `Rocket`, `ShoppingBag`, `Trophy`).

## SEO y rendimiento

- Metadatos Open Graph y Twitter Card configurados en `index.html`.
- Datos estructurados (`schema.org`) incluidos para mejorar la indexación.
- `robots.txt` incluido; agrega tu propio `sitemap.xml` antes de publicar.
- El logo real (`logo-mark.png` para el ícono y `logo-full.png` para el lockup completo) ya está en `public/` y se usa en la barra de navegación, el footer, el panel de administración y las etiquetas Open Graph.
- Al compilar con `npm run build`, Vite genera CSS y JS minificados y con code-splitting para tiempos de carga bajos.

## Estructura del proyecto

```
src/
  components/       componentes compartidos (Navbar, Footer, admin)
  components/sections/  cada sección del sitio (Hero, Servicios, etc.)
  context/          estado global (contenido editable + autenticación admin)
  data/             contenido por defecto del sitio
  pages/            páginas (Home, AdminLogin, AdminDashboard)
```
