# Phonebook Backend

Backend API para la aplicación Phonebook del curso Full Stack Open - Parte 3.

**🗄️ Base de Datos**: Integrado con MongoDB Atlas para persistencia de datos  
**🚀 Estado**: Ejercicios 3.12-3.18 completados exitosamente

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
- **Descripción**: Obtiene todas las personas de la agenda desde MongoDB
- **URL**: https://fullstack-open-i7dg.onrender.com/api/persons

### GET /api/persons/:id
- **Descripción**: Obtiene una persona específica por ID desde MongoDB
- **URL**: https://fullstack-open-i7dg.onrender.com/api/persons/[mongodb-id]
- **Respuesta**: Retorna 404 si la persona no existe

### POST /api/persons
- **Descripción**: Añade una nueva persona a MongoDB
- **URL**: https://fullstack-open-i7dg.onrender.com/api/persons
- **Validación**: Nombre y número requeridos, nombre debe ser único
- **Body (JSON)**:
```json
{
  "name": "Ejemplo Nombre",
  "number": "123-456-789"
}
```

### PUT /api/persons/:id
- **Descripción**: Actualiza los datos de una persona existente en MongoDB
- **URL**: https://fullstack-open-i7dg.onrender.com/api/persons/[mongodb-id]
- **Body (JSON)**:
```json
{
  "name": "Nombre Actualizado",
  "number": "987-654-321"
}
```

### DELETE /api/persons/:id
- **Descripción**: Elimina una persona de MongoDB
- **URL**: https://fullstack-open-i7dg.onrender.com/api/persons/[mongodb-id]

## 🛠️ Tecnologías Utilizadas

- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web para Node.js
- **MongoDB Atlas** - Base de datos NoSQL en la nube
- **Mongoose** - ODM para MongoDB y Node.js
- **dotenv** - Gestión de variables de entorno
- **Morgan** - Middleware para logging de requests HTTP
- **CORS** - Middleware para habilitar Cross-Origin Resource Sharing

## 🏗️ Arquitectura del Proyecto

```
back-phonebook/
├── models/
│   └── person.js          # Modelo de Mongoose para Person
├── .env                   # Variables de entorno (no incluido en git)
├── index.js              # Servidor Express principal
├── mongo.js              # Script CLI para MongoDB
├── package.json          # Dependencias y scripts
└── README.md             # Documentación del proyecto
```

## 🗄️ Base de Datos

- **Proveedor**: MongoDB Atlas
- **Cluster**: cluster.zekxdh1.mongodb.net
- **Colección**: persons
- **Esquema**: { name: String (requerido), number: String (requerido) }

## 🔧 Instalación Local

### Prerrequisitos
- Node.js instalado
- Cuenta en MongoDB Atlas configurada
- Variables de entorno configuradas

### Configuración
1. Clona el repositorio
2. Navega al directorio del proyecto:
   ```bash
   cd part3/back-phonebook
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Crea archivo `.env` con las variables necesarias:
   ```env
   MONGODB_URI=mongodb+srv://usuario:password@cluster.xxxxx.mongodb.net/phonebook?retryWrites=true&w=majority
   PORT=3001
   ```
5. Ejecuta en modo desarrollo:
   ```bash
   npm run dev
   ```
6. O ejecuta en modo producción:
   ```bash
   npm start
   ```

El servidor se ejecutará en el puerto 3001 por defecto.

## 🔒 Manejo de Errores

La aplicación incluye middleware centralizado para manejo de errores:
- **CastError**: IDs de MongoDB inválidos → 400 Bad Request
- **ValidationError**: Datos que no cumplen validación → 400 Bad Request
- **Rutas desconocidas**: → 404 Not Found

## ✅ Ejercicios Completados

- **3.12**: CLI tool para MongoDB (`mongo.js`)
- **3.13**: GET /api/persons desde MongoDB
- **3.14**: POST /api/persons con validación
- **3.15**: DELETE /api/persons/:id
- **3.16**: Middleware de manejo de errores
- **3.17**: PUT /api/persons/:id para actualizar
- **3.18**: GET /api/persons/:id individual

## 📝 Notas Importantes

- **Persistencia**: Los datos ahora se almacenan permanentemente en MongoDB Atlas
- **Validación**: Nombres únicos y campos requeridos implementados
- **IDs**: Se utilizan ObjectIds de MongoDB en lugar de IDs numéricos
- **Seguridad**: Variables de entorno para credenciales de base de datos
- **Producción**: Configurado para despliegue con variables de entorno

## 🌍 Frontend Compatibilidad

Este backend está diseñado para trabajar con el frontend de React ubicado en `part2/phonebook`. El frontend debe configurar la variable de entorno `VITE_API_URL` para apuntar a esta URL del backend:

```env
VITE_API_URL=https://fullstack-open-i7dg.onrender.com/api/persons
```

## 🚀 Scripts Disponibles

```bash
npm start        # Ejecutar en producción
npm run dev      # Ejecutar en desarrollo con nodemon
node mongo.js    # Herramienta CLI para MongoDB
```
