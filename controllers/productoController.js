const productoService = require('../services/productoService')

const encontrarTodos = async (req, res) =>{
    try {
        const data = await productoService.obtenerTodos()
        res.json(data)
    } catch (error) {
        console.error('No se encontraron los productos (controller)', error.message)
        res.status(500).json({ error: 'Error del servidor'})
  }
}

const crear = async (req, res) =>{
    try {
        const nuevo = await productoService.crear(req.body)
        res.status(201).json(nuevo)
    } catch (error) {
        console.error('Error al crear producto:', error.message);
        res.status(400).json({ error: 'Error al crear producto'})       
    }
 
}

const crearMultiples = async (req, res) => {
   try {
    const nuevos = await productoService.crearMultiples(req.body)
    res.status(201).json(nuevos)
   } catch (error) {
    console.error('Error al crear productos multiples', error.message)
    res.status(500).json({ error: 'Error del servidor'})
   }
}

const encontrarPorId = async (req, res) => {
    try {
        const data = await productoService.encontrarPorId(req.params.id)
        if (!data){
            return res.status(404).json({ error: 'No encontrado'})
        }
        res.status(200).json(data)
    } catch (error) {
        console.error('Error al buscar por ID', error.message);
        res.status(500).json({ error: 'Error del servidor'})
    }
}

const actualizar = async (req, res) => {
    try {
        const actualizado = await productoService.actualizarProducto(req.params.id, req.body)
        if(!actualizado){
            return res.status(404).json({ error: 'No encontrado'})
        }
        res.status(200).json(actualizado)
    } catch (error) {
        console.error('Error al actualizar', error.message);
        res.status(500).json({ error: 'Error del servidor'})
    }
}

const eliminar = async (req, res) => {
    try {
        const eliminado = await productoService.eliminarProductoPorId(req.params.id)
        if(!eliminado){
            return res.status(404).json({ error: 'No encontrado'})
        }
        res.status(200).json({ message: 'Eliminado correctamente'})
    } catch (error) {
        console.error('Error al eliminar ', error.message);
        res.status(500).json({ error: 'Error del servidor'})
    }
}

module.exports = {
    encontrarTodos,
    crear,
    crearMultiples,
    encontrarPorId,
    actualizar,
    eliminar
}