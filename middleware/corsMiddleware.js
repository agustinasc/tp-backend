const cors = require('cors');

// Este middleware habilita CORS para todas las rutas
const corsOptions = {
    origin: 'http://localhost:3000', // Cambia esto a la URL de tu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};

app.use(cors(corsOptions));
