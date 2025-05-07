const productoRepo = require('../repositories/productoRepository')

const obtenerTodos = async () => {
    return await productoRepo.findAll()
}

const crear = async (data) => {
    return await productoRepo.create(data)
}

const crearMultiples = async ( productos) => {
    return await productoRepo.insertarMultiples(productos)
}

const encontrarPorId = async (id) => {
    return await productoRepo.encontrarProductoPorId(id)
}

const actualizarProducto = async (id, data) => {
    return await productoRepo.actualizarProducto(id, data)
}

const eliminarProductoPorId = async (id) => {
    return await productoRepo.eliminarProductoPorId(id)
}

module.exports = {
    obtenerTodos,
    crear,
    crearMultiples,
    encontrarPorId,
    actualizarProducto,
    eliminarProductoPorId
}