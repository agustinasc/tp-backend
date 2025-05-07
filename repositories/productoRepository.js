const Producto = require('../models/Producto')
const { eliminarPorId } = require('../services/productoService')

const findAll = () => Producto.find()

const create = (data) => {
    const nuevo = new Producto(data)
    return nuevo.save()
}

const encontrarProductoPorId = (id) => Producto.findById(id)

const actualizarProducto = (id, data) => Producto.findByIdAndUpdate(id, data)

const eliminarProductoPorId = (id) => Producto.findByIdAndDelete(id)

const insertarMultiples = async (productos) => {
    return await Producto.insertMany(productos)
}

module.exports = {
    findAll,
    create,
    encontrarProductoPorId,
    actualizarProducto,
    eliminarProductoPorId,
    insertarMultiples
}