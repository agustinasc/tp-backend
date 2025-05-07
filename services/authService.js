const jwt = require('jsonwebtoken')
const Usuario = require('../models/Usuario')

const JWT_SECRET = process.env.JWT_SECRET || 'secreto123';

const login = async (email, contraseña) => {
    const usuario = await Usuario.findOne({ email })
    if (!usuario) throw new Error("Usuario no encontrado");
    
    const esValida = await usuario.compararContraseña(contraseña)
    if (!esValida) throw new Error("Contraseña incorrecta");
    
    const token = jwt.sign(
        { id: usuario._id, rol: usuario.rol },
        JWT_SECRET,
        { expiresIn: '7d' }
      );

      return {token, usuario }
}   

module.exports = {
    login,
  }