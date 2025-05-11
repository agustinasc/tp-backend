const cors = require('cors');

// Este middleware habilita CORS para todas las rutas
/* const corsOptions = {
    origin: ['http://localhost:5173', 'tp-panaderia.netlify.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};

app.use(cors(corsOptions));
 */

const corsOptions = {
    origin: [
        'http://localhost:5173',  // Permite solicitudes desde localhost en desarrollo
        'https://tp-panaderia.netlify.app',  // Permite solicitudes desde tu frontend en producción
        'https://tp-backend-bkfw.onrender.com'  // Asegúrate de que esté permitido en producción
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,  // Esto es necesario para permitir cookies y otros encabezados de autenticación
};

app.use(cors(corsOptions));  // Asegúrate de que se está usando correctamente

