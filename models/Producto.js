const mongoose = require('mongoose')

const productoSchema = new mongoose.Schema({
    nombre: { type: String, required:true},
    precio: { type: Number, required:true},
    imagen: { type: String},
    descripcion: { type: String, required:true},
    stock: { type: Number },
    categoria: { type: String, required:true},
}, {
    timestamps: true,
})

module.exports = mongoose.model('Producto', productoSchema)