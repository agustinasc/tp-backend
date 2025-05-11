/*const cors = require('cors');

// Este middleware habilita CORS para todas las rutas
 const corsOptions = {
    origin: ['http://localhost:5173', 'http://tp-panaderia.netlify.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}; 

app.use(cors(corsOptions));


const allowedOrigins = [
    'http://localhost:5173',
    'https://tp-panaderia.netlify.app'
  ];
  
  app.use(cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('No permitido por CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  }));
   */