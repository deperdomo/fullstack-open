# 📱 Phonebook - Full Stack Application

Una aplicación completa de agenda telefónica construida con React (frontend) y Node.js/Express (backend).

## 🌐 Aplicación en Línea

**🚀 URL del proyecto desplegado:** https://phonebbook.netlify.app/

La aplicación está completamente funcional y conectada a una API backend desplegada en Render.

## ✨ Funcionalidades

- ✅ **Ver contactos**: Lista todos los contactos de la agenda
- ✅ **Agregar contacto**: Añade nuevos contactos con nombre y número
- ✅ **Actualizar contacto**: Actualiza el número de un contacto existente
- ✅ **Eliminar contacto**: Elimina contactos de la agenda
- ✅ **Filtrar contactos**: Busca contactos por nombre en tiempo real
- ✅ **Notificaciones**: Muestra mensajes de éxito y error
- ✅ **Validación**: Previene duplicados y campos vacíos
- ✅ **Responsive**: Funciona en móviles y escritorio

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 19** - Biblioteca de JavaScript para interfaces de usuario
- **Vite** - Herramienta de construcción y desarrollo rápido
- **Axios** - Cliente HTTP para comunicación con la API
- **CSS** - Estilos personalizados para notificaciones y diseño

### Backend
- **Node.js** - Runtime de JavaScript del lado del servidor
- **Express.js** - Framework web para Node.js
- **Morgan** - Middleware para logging de requests HTTP
- **CORS** - Middleware para habilitar Cross-Origin Resource Sharing

## 🚀 Despliegue

### 🌐 Producción
- **Frontend:** https://phonebbook.netlify.app/ (Netlify)
- **Backend:** https://fullstack-open-i7dg.onrender.com/ (Render)

### 📋 Arquitectura del Despliegue
```
┌─────────────────────┐    HTTP/HTTPS    ┌──────────────────────┐
│   Frontend (React)  │ ◄─────────────► │   Backend (Express)  │
│                     │    Axios API     │                      │
│  Netlify Deploy     │     Requests     │   Render Deploy      │
└─────────────────────┘                  └──────────────────────┘
```

## 🔧 Configuración Local

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn
- Git

### 1. Clonar el repositorio
```bash
git clone https://github.com/deperdomo/fullstack-open.git
cd fullstack-open/part2/phonebook
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
Crear archivo `.env` en el directorio del proyecto:

**Para conectar al backend en producción:**
```env
VITE_API_URL=https://fullstack-open-i7dg.onrender.com/api/persons
```

**Para desarrollo local (si tienes el backend corriendo):**
```env
VITE_API_URL=http://localhost:3001/api/persons
```

### 4. Ejecutar en modo desarrollo
```bash
npm run dev
```

La aplicación estará disponible en: http://localhost:5173/

### 5. Construir para producción
```bash
npm run build
```

Los archivos se generarán en el directorio `dist/`

### 6. Previsualizar build de producción
```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
phonebook/
├── public/
│   ├── _redirects          # Configuración de rutas para Netlify
│   └── vite.svg           # Icono de Vite
├── src/
│   ├── components/
│   │   ├── Filter.jsx      # Componente de filtrado de contactos
│   │   ├── Notification.jsx # Componente de notificaciones
│   │   ├── PersonForm.jsx  # Formulario para agregar/editar personas
│   │   └── Persons.jsx     # Lista de personas
│   ├── services/
│   │   └── persons.js      # Servicios para comunicación con API
│   ├── App.jsx            # Componente principal de la aplicación
│   ├── main.jsx           # Punto de entrada de React
│   ├── index.css          # Estilos principales
│   └── notification.css   # Estilos para notificaciones
├── .env                   # Variables de entorno
├── .gitignore            # Archivos ignorados por Git
├── package.json          # Dependencias y scripts
├── vite.config.js        # Configuración de Vite
└── README.md             # Este archivo
```

## 🔗 API Endpoints

El frontend consume la siguiente API REST:

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/persons` | Obtener todos los contactos |
| GET | `/api/persons/:id` | Obtener un contacto específico |
| POST | `/api/persons` | Crear un nuevo contacto |
| PUT | `/api/persons/:id` | Actualizar un contacto existente |
| DELETE | `/api/persons/:id` | Eliminar un contacto |

### Formato de datos
```json
{
  "id": 1,
  "name": "Arto Hellas",
  "number": "040-123456"
}
```

## 📝 Características de la Interfaz

### 🎨 Notificaciones
- **Verde (éxito)**: Contacto agregado, actualizado o eliminado correctamente
- **Rojo (error)**: Errores de validación, conectividad o contactos no encontrados

### ✅ Validaciones
- Nombres y números telefónicos son campos requeridos
- No se permiten nombres duplicados
- Confirmación antes de eliminar contactos
- Confirmación antes de actualizar contactos existentes

### 🔄 Manejo de Errores
- Errores de conectividad con el servidor
- Contactos que fueron eliminados por otros usuarios
- Errores de validación del servidor
- Timeout de requests

## 🧪 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo
npm run build        # Construye para producción
npm run preview      # Previsualiza build de producción
npm run lint         # Ejecuta ESLint para verificar código
```

## 🌍 Variables de Entorno

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `VITE_API_URL` | URL base de la API del backend | `https://fullstack-open-i7dg.onrender.com/api/persons` |

## 🚀 Despliegue en Netlify

Este proyecto está configurado para desplegarse automáticamente en Netlify:

1. **Archivo de configuración**: `netlify.toml` en la raíz del repositorio
2. **Directorio base**: `part2/phonebook`
3. **Comando de build**: `npm run build`
4. **Directorio de publicación**: `dist`
5. **Redirects SPA**: Configurados para rutas de React

### Redespligues Automáticos
Cada push a la rama `main` del repositorio activa automáticamente un nuevo despliegue.

## 🔧 Desarrollo

### Estructura de Componentes
- **App.jsx**: Componente principal que maneja el estado global
- **Filter.jsx**: Componente controlado para filtrar contactos
- **PersonForm.jsx**: Formulario para agregar nuevos contactos
- **Persons.jsx**: Lista que renderiza todos los contactos
- **Notification.jsx**: Componente para mostrar mensajes al usuario

### Gestión de Estado
La aplicación utiliza React hooks para gestión de estado:
- `useState` para estado local de componentes
- `useEffect` para efectos secundarios y carga de datos
- Comunicación con API a través de servicios centralizados

## 🐛 Solución de Problemas

### El frontend no se conecta al backend
1. Verificar que la variable `VITE_API_URL` esté configurada correctamente
2. Verificar que el backend esté funcionando: https://fullstack-open-i7dg.onrender.com/api/persons
3. Verificar la consola del navegador para errores de CORS

### Errores de build
1. Verificar que todas las dependencias estén instaladas: `npm install`
2. Verificar la versión de Node.js: `node --version` (debe ser 18+)
3. Limpiar node_modules y reinstalar: `rm -rf node_modules && npm install`

## 📄 Licencia

Este proyecto es parte del curso Full Stack Open de la Universidad de Helsinki.

## 👨‍💻 Autor

**Deivi Perdomo**
- Proyecto del curso Full Stack Open
- Universidad de Helsinki

---

**🌐 Visita la aplicación:** https://phonebbook.netlify.app/
