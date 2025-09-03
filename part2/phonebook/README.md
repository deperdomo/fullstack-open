# Phonebook Frontend

Frontend de React para la aplicación Phonebook del curso Full Stack Open - Parte 2.

## 🌐 Conexión con el Backend

Esta aplicación está configurada para funcionar con el backend desplegado en:
**https://fullstack-open-i7dg.onrender.com/**

## 🔧 Configuración de Variables de Entorno

El proyecto utiliza un archivo `.env` para configurar la URL de la API:

```env
VITE_API_URL=https://fullstack-open-i7dg.onrender.com/api/persons
```

Para desarrollo local con el backend corriendo en localhost:
```env
VITE_API_URL=http://localhost:3001/api/persons
```

## 📋 Funcionalidades

- ✅ **Mostrar contactos**: Lista todos los contactos de la agenda
- ✅ **Agregar contacto**: Añade nuevos contactos con nombre y número
- ✅ **Actualizar contacto**: Actualiza el número de un contacto existente
- ✅ **Eliminar contacto**: Elimina contactos de la agenda
- ✅ **Filtrar contactos**: Busca contactos por nombre
- ✅ **Notificaciones**: Muestra mensajes de éxito y error
- ✅ **Validación**: Previene duplicados y campos vacíos

## 🛠️ Tecnologías Utilizadas

- **React 19** - Biblioteca de JavaScript para interfaces de usuario
- **Vite** - Herramienta de construcción y desarrollo
- **Axios** - Cliente HTTP para realizar peticiones a la API
- **CSS** - Estilos personalizados para notificaciones

## 🚀 Instalación y Ejecución

1. Navega al directorio del proyecto:
   ```bash
   cd part2/phonebook
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea el archivo `.env` con la URL de la API:
   ```env
   VITE_API_URL=https://fullstack-open-i7dg.onrender.com/api/persons
   ```

4. Ejecuta en modo desarrollo:
   ```bash
   npm run dev
   ```

5. Construye para producción:
   ```bash
   npm run build
   ```

6. Previsualiza la build de producción:
   ```bash
   npm run preview
   ```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Filter.jsx          # Componente de filtrado
│   ├── Notification.jsx    # Componente de notificaciones
│   ├── PersonForm.jsx      # Formulario para agregar personas
│   └── Persons.jsx         # Lista de personas
├── services/
│   └── persons.js          # Servicios para comunicarse con la API
├── App.jsx                 # Componente principal
├── main.jsx               # Punto de entrada
├── index.css              # Estilos principales
└── notification.css       # Estilos para notificaciones
```

## 🔗 API Endpoints Utilizados

El frontend consume los siguientes endpoints del backend:

- `GET /api/persons` - Obtener todos los contactos
- `POST /api/persons` - Crear un nuevo contacto
- `PUT /api/persons/:id` - Actualizar un contacto existente
- `DELETE /api/persons/:id` - Eliminar un contacto

## 📝 Características de la Interfaz

### Notificaciones
- **Éxito (verde)**: Contacto agregado, actualizado o eliminado
- **Error (rojo)**: Errores de validación o problemas de conectividad

### Validaciones
- Nombres y números son requeridos
- No se permiten nombres duplicados
- Confirmación antes de eliminar contactos
- Confirmación antes de actualizar contactos existentes

### Manejo de Errores
- Errores de conectividad con el servidor
- Contactos que ya fueron eliminados por otros usuarios
- Errores de validación del servidor

## 🔧 Configuración para Diferentes Entornos

### Desarrollo Local
```env
VITE_API_URL=http://localhost:3001/api/persons
```

### Producción
```env
VITE_API_URL=https://fullstack-open-i7dg.onrender.com/api/persons
```

## 📱 Responsive Design

La aplicación está diseñada para funcionar en dispositivos móviles y de escritorio.

## 🧪 Linting

El proyecto incluye configuración de ESLint:
```bash
npm run lint
```
