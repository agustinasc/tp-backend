const Carrito = require('../models/Carrito')
const Producto = require('../models/Producto')
const crearRepository = require('../repositories/genericRepository')

const carritoRepo = crearRepository(Carrito)

const calcularTotal = async (productos) => {
    let total = 0;
  
    for (const item of productos) {
        if(!item.producto || item.cantidad <= 0){
            throw new Error("Producto o cantidad invalida");  
        }

        const producto = await Producto.findById(item.producto)
        if(!producto){
            throw new Error(`Producto no encontrado: ${item.producto}`)
        }

        total += producto.precio * item.cantidad;
    }
  
    return total;
  };
  

const encontrarTodos = () => carritoRepo.encontrarTodos();
const encontrarPorId = (id) => carritoRepo.encontrarPorId(id)

const crear = async (data) => {
    const total = await calcularTotal(data.productos)
    return carritoRepo.crear({...data, total})
}

const actualizarPorId = async (id, data) => {
    const total = await calcularTotal(data.productos) 
    return carritoRepo.actualizarPorId(id, { ...data, total})
}

const eliminarPorId = (id) => carritoRepo.eliminarPorId(id);


module.exports = {  
    encontrarTodos,
    encontrarPorId,
    crear,
    actualizarPorId,
    eliminarPorId,
  };