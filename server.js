const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const productoRoutes = require('./routes/productRoutes')
const usuarioRoutes = require('./routes/usuarioRoutes')
const carritoRoutes = require('./routes/carritoRoutes')
const authRoutes = require('./routes/authRoutes')
const {verificarToken, autorizarRol} = require('./middleware/authMiddleware')
const validarProducto = require('./middleware/productoMiddleware')
const manejarErrores = require('./middleware/errorMiddleware')
const { eliminarPorId, crear, actualizar } = require('./controllers/carritoController')



/* Para cargar las variables de entorno */
dotenv.config() 

/* Para cargar la Base de datos */
connectDB()

const app = express()


/* Middlewares */
//app.use(cors({ origin: 'http://localhost:5173', credentials: true }))
 const allowedOrigins = [
    'http://localhost:5173',
    'https://tp-panaderia.netlify.app',
    'https://mathius.com.ar'
  ]; 
  
  app.use(cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('No permitido por CORS'));
      }
    },
    credentials: true,
  }));
  

app.use(express.json())

app.get('/api', (req, res) => {
  res.json({ mensaje: 'API funcionando correctamente 🎉' });
});


/* Rutas */
app.use('/api/productos', productoRoutes)
app.use('/api/usuarios', usuarioRoutes)
app.use('/api/carrito', carritoRoutes)
app.use('/api/auth', authRoutes)

/* Rutas protegidas */
app.get('/api/usuarios', verificarToken, (req, res) => {
    res.json({ mensaje: 'Acceso autorizada'})
})
app.delete('/api/productos/:id', verificarToken, eliminarPorId,  autorizarRol(['admin']), (req, res) => {
    res.json({ mensaje: 'Producto Eliminado'})
})
app.post('/api/productos', verificarToken, validarProducto, crear, autorizarRol(['admin', 'ventas']), (req, res) => {
    res.json({ mensaje: 'Producto Agregado'})
})
app.put('/api/productos/:id', verificarToken, actualizar, autorizarRol(['admin', 'ventas']), (req, res) => {
    res.json({ mensaje: 'Producto Modificado'})
})

/* Middleware de errores */
app.use(manejarErrores)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});

