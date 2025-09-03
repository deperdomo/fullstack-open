# Full Stack Open - Universidad de Helsinki

Este repositorio contiene todos los ejercicios y proyectos del curso **Full Stack Open** de la Universidad de Helsinki.

## 📁 Estructura del Proyecto

```
fullstackopen/
├── part0/          # Fundamentos de desarrollo web
├── part1/          # Introducción a React
├── part2/          # Comunicación con el servidor
├── part3/          # Programación en el servidor con NodeJS y Express
└── netlify.toml    # Configuración para despliegue en Netlify
```

## 🚀 Despliegues

### 📱 Frontend - Phonebook (Part 2)
- **Proyecto:** `part2/phonebook`
- **Plataforma:** Netlify
- **URL:** [Pendiente de configurar]
- **Tecnologías:** React, Vite, Axios

**Configuración de despliegue:**
```toml
base = "part2/phonebook"
command = "npm run build"
publish = "part2/phonebook/dist"
```

### 🔧 Backend - Phonebook API (Part 3)
- **Proyecto:** `part3/back-phonebook`
- **Plataforma:** Render
- **URL:** https://fullstack-open-i7dg.onrender.com/
- **Tecnologías:** Node.js, Express, Morgan, CORS

## 🔧 Configuración Local

### Frontend (part2/phonebook)
```bash
cd part2/phonebook
npm install
npm run dev
```

### Backend (part3/back-phonebook)
```bash
cd part3/back-phonebook
npm install
npm run dev
```

## 🌍 Variables de Entorno

### Frontend
Crear archivo `.env` en `part2/phonebook/`:
```env
VITE_API_URL=https://fullstack-open-i7dg.onrender.com/api/persons
```

### Para desarrollo local
```env
VITE_API_URL=http://localhost:3001/api/persons
```

## 📋 API Endpoints

El backend expone los siguientes endpoints:

- `GET /` - Página de bienvenida
- `GET /api/persons` - Obtener todas las personas
- `GET /api/persons/:id` - Obtener una persona específica
- `POST /api/persons` - Crear nueva persona
- `PUT /api/persons/:id` - Actualizar persona existente
- `DELETE /api/persons/:id` - Eliminar persona
- `GET /info` - Información del sistema

## 🛠️ Tecnologías Utilizadas

### Frontend
- React 19
- Vite
- Axios
- CSS personalizado

### Backend
- Node.js
- Express.js
- Morgan (logging)
- CORS

## 📝 Notas de Despliegue

### Netlify (Frontend)
1. El archivo `netlify.toml` en la raíz configura el despliegue
2. El directorio base es `part2/phonebook`
3. Los archivos estáticos se publican desde `part2/phonebook/dist`
4. Las variables de entorno se configuran en el dashboard de Netlify

### Render (Backend)
1. El proyecto se despliega desde `part3/back-phonebook`
2. Comando de inicio: `npm start`
3. Puerto automáticamente asignado por Render

## 🔗 Enlaces Útiles

- [Curso Full Stack Open](https://fullstackopen.com/)
- [Documentación de React](https://reactjs.org/)
- [Documentación de Express](https://expressjs.com/)
- [Documentación de Netlify](https://docs.netlify.com/)
- [Documentación de Render](https://render.com/docs)
