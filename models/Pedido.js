const mongoose = require('mongoose')

const pedidoSchema = new mongoose.Schema({
    usuario: { },
    productos: [{
        producto: { },
        cantidad: {}
    }],
    total: { type: Number },
    estado: { type: String }
})

module.exports = mongoose.model('Pedido', pedidoSchema)