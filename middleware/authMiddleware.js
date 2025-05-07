const jwt = require('jsonwebtoken')
const Usuario = require('../models/Usuario')

const JWT_SECRET = process.env.JWT_SECRET || 'secreto123';


/* MIDDLEWARE DE AUTENTICACION */
const verificarToken = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '') //obtener el token

    if(!token){
        return res.status(401).json({ error: 'Acceso denerado. No se proporciono token'})
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) //verificando el token
        req.usuario = decoded //para guardar la informacion decodificada
        next()
    } catch (error) {
        res.status(400).json({ error: 'Token no valido'})
    }
}

/* MIDDLEWARE DE AUTORIZACION */
const autorizarRol = (rolesPermitidos) => {
    return (req, res, next) => {
        const {rol} = req.usuario

        if (!rolesPermitidos.includes(rol)){
            return res.status(403).json({ error: 'Acceso denegado. Rol no autorizado'})
        }
        next()
    }
}

module.exports = {
    verificarToken,
    autorizarRol
} 
