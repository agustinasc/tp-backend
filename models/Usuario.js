const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')


const usuarioSchema = new mongoose.Schema({
    usuario: { type: String, required:true },
    email: { type: String, required:true, unique: true},
    contraseña: { type: String, required:true},
    imagen: { type: String},
    estado: { type: String, default: 'activo' },
    rol: { type: String, enum: ['admin', 'ventas', 'cliente'], default: 'cliente'}
}, {
    timestamps: true,
})

// Middleware para hashear contraseña antes de guardar
usuarioSchema.pre('save', async function (next) {
    if (!this.isModified('contraseña')) return next();
    this.contraseña = await bcrypt.hash(this.contraseña, 10);
    next();
  });
  
  // Método para comparar contraseñas
  usuarioSchema.methods.compararContraseña = function (contraseñaFormulario) {
    return bcrypt.compare(contraseñaFormulario, this.contraseña);
  };
  

module.exports = mongoose.model('Usuario', usuarioSchema)