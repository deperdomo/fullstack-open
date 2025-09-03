# Phonebook Backend

Backend API para la aplicación Phonebook del curso Full Stack Open - Parte 3.

## 🚀 URL de Despliegue

La aplicación está desplegada en Render:
**https://fullstack-open-i7dg.onrender.com/**

## 📋 Endpoints Disponibles

### GET /
- **Descripción**: Página de bienvenida con enlaces a los endpoints disponibles
- **URL**: https://fullstack-open-i7dg.onrender.com/

### GET /info
- **Descripción**: Información sobre el número de personas en la agenda y la fecha actual
- **URL**: https://fullstack-open-i7dg.onrender.com/info

### GET /api/persons
- **Descripción**: Obtiene todas las personas de la agenda
- **URL**: https://fullstack-open-i7dg.onrender.com/api/persons

### GET /api/persons/:id
- **Descripción**: Obtiene una persona específica por ID
- **URL**: https://fullstack-open-i7dg.onrender.com/api/persons/1

### POST /api/persons
- **Descripción**: Añade una nueva persona a la agenda
- **URL**: https://fullstack-open-i7dg.onrender.com/api/persons
- **Body (JSON)**:
```json
{
  "name": "Ejemplo Nombre",
  "number": "123-456-789"
}
```

### PUT /api/persons/:id
- **Descripción**: Actualiza los datos de una persona existente
- **URL**: https://fullstack-open-i7dg.onrender.com/api/persons/1
- **Body (JSON)**:
```json
{
  "name": "Nombre Actualizado",
  "number": "987-654-321"
}
```

### DELETE /api/persons/:id
- **Descripción**: Elimina una persona de la agenda
- **URL**: https://fullstack-open-i7dg.onrender.com/api/persons/1

## 🛠️ Tecnologías Utilizadas

- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web para Node.js
- **Morgan** - Middleware para logging de requests HTTP
- **CORS** - Middleware para habilitar Cross-Origin Resource Sharing

## 🔧 Instalación Local

1. Clona el repositorio
2. Navega al directorio del proyecto:
   ```bash
   cd part3/back-phonebook
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Ejecuta en modo desarrollo:
   ```bash
   npm run dev
   ```
5. O ejecuta en modo producción:
   ```bash
   npm start
   ```

El servidor se ejecutará en el puerto 3001 por defecto.

## 📝 Notas

- La aplicación utiliza un array en memoria para almacenar los datos, por lo que los datos se reinician cada vez que se redespliega la aplicación.
- El frontend de esta aplicación se encuentra en el directorio `part2/phonebook` del mismo repositorio.
- La aplicación está configurada para aceptar requests de cualquier origen (CORS habilitado).

## 🌍 Frontend Compatibilidad

Este backend está diseñado para trabajar con el frontend de React ubicado en `part2/phonebook`. El frontend debe configurar la variable de entorno `VITE_API_URL` para apuntar a esta URL del backend:

```
VITE_API_URL=https://fullstack-open-i7dg.onrender.com/api/persons
```
