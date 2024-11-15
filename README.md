# Portfolio Web de Repositorios GitHub

Portfolio web personal que muestra mis proyectos y repositorios de GitHub, desarrollado como trabajo final para la materia Programación III.

## 🚀 Características

- Visualización dinámica de repositorios de GitHub
- Vista previa de READMEs expandibles
- Diseño responsivo y moderno
- Integración con GitHub REST API
- Secciones de Portfolio, CV y Contacto

## 🛠️ Tecnologías Utilizadas

- React.js
- Node.js
- GitHub REST API
- React Router DOM
- Axios
- React Markdown
- Vite

## 📋 Requisitos Previos

- Node.js (v14 o superior)
- npm o yarn
- Token de acceso personal de GitHub con permisos de lectura de repositorios

## ⚙️ Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/portfolio-github.git
cd portfolio-github
```

2. Instalar dependencias:
```bash
npm install
```

3. Crear archivo `.env` en la raíz del proyecto:
```env
VITE_GITHUB_TOKEN=tu_token_de_github
```

4. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

## 🔧 Configuración

### Token de GitHub

1. Ir a GitHub Settings > Developer Settings > Personal Access Tokens
2. Generar nuevo token con permisos:
   - `repo`
   - `read:user`
3. Copiar el token generado al archivo `.env`

### Personalización

- Modificar `src/services/github.services.js` para ajustar las consultas a la API
- Actualizar `src/pages/Home.jsx` con tu información personal
- Personalizar estilos en `src/styles/estilos.css`

## 📁 Estructura del Proyecto

```
portfolio/
├── src/
│   ├── components/    # Componentes reutilizables
│   ├── hooks/         # Hooks personalizados
│   ├── pages/         # Páginas principales
│   ├── services/      # Servicios y APIs
│   └── styles/        # Archivos CSS
├── public/            # Archivos estáticos
└── package.json       # Dependencias y scripts
```

## 🚀 Despliegue

El proyecto está configurado para despliegue en Vercel:

1. Conectar repositorio con Vercel
2. Configurar variables de entorno en Vercel
3. Desplegar automáticamente

## 📜 Scripts Disponibles

- `npm run dev`: Inicia servidor de desarrollo
- `npm run build`: Compila para producción
- `npm run preview`: Vista previa de producción
- `npm run lint`: Ejecuta ESLint

## 🔐 Seguridad

- Token de GitHub almacenado en variables de entorno
- Validación de datos en formularios
- Control de rate limiting de GitHub API

## 👥 Autor

- Camila Urenda
- GitHub: [@camiurenda](https://github.com/camiurenda)
- LinkedIn: [Camila Urenda](https://www.linkedin.com/in/camila-urenda-77363a137/) 
