# 🧁 Backend - Panadería App

Este proyecto es el backend de una aplicación para una panadería, desarrollado con Node.js, Express y MongoDB. 
Proporciona una API RESTful segura para gestionar usuarios, perfiles y productos, integrando autenticación, roles y una API externa de mapas.

## 🚀 Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- Leaflet (API externa para mapas)
- Dotenv
- CORS
- Bcrypt

## 📌 Funcionalidades

✅ CRUD completo de 3 entidades:
- **Usuarios**
- **Perfiles**
- **Productos**

✅ Autenticación:
- Registro y login con **JWT**
- Hashing de contraseñas con **bcrypt**
- Middleware para verificación de token y control de acceso

✅ Roles y permisos:
- **Admin**: acceso completo a todas las rutas
- **Ventas**: acceso limitado a productos y ventas
- **Cliente**: acceso a productos.

✅ Seguridad:
- Rutas protegidas con middleware de autenticación
- Control de acceso a recursos según el rol del usuario

✅ Filtrado y búsqueda:
- Búsqueda de productos por nombre
- Filtro por categoría

✅ API externa:
- Se utiliza **Leaflet.js** con OpenStreetMap para mostrar la ubicación de la panadería en un mapa interactivo


## 🗂 Estructura del proyecto

📁 backend/
├── controllers/
│ ├── authController.js
│ ├── productoController.js
│ ├── perfilController.js
│ └── usuarioController.js
├── middlewares/
│ ├── authMiddleware.js
│ └── roleMiddleware.js
├── models/
│ ├── Usuario.js
│ ├── Perfil.js
│ └── Producto.js
├── routes/
│ ├── authRoutes.js
│ ├── productoRoutes.js
│ ├── perfilRoutes.js
│ └── usuarioRoutes.js
├── .env
├── app.js
└── server.js