const cors = require('cors');

// Este middleware habilita CORS para todas las rutas
const corsOptions = {
    origin: ['http://localhost:5173', 'tp-panaderia.netlify.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};

app.use(cors(corsOptions));
