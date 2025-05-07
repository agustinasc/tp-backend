const usuarioService = require('../services/usuarioService')


const encontrarTodos = async (req, res) =>{
    try {
        const data = await usuarioService.obtenerTodos()
        res.json(data)
    } catch (error) {
        console.error('No se encontraron los usuarios (controller)', error.message)
        res.status(500).json({ error: 'Hubo un error al obtener los usuarios'})
  }
}

const crear = async (req, res) =>{
    try {
        const nuevo = await usuarioService.crear(req.body)
        res.status(201).json(nuevo)
    } catch (error) {
        console.error('Error al crear usuario:', error.message);
        res.status(400).json({ error: 'Error al crear el usuario'})       
    }
 
}

const crearMultiples = async (req, res) => {
   try {
    const nuevos = await usuarioService.crearMultiples(req.body)
    res.status(201).json(nuevos)
   } catch (error) {
    console.error('Error al crear usuarios multiples', error.message)
    res.status(500).json({ error: 'Error del servidor'})
   }
}

const encontrarPorId = async (req, res) => {
    try {
        const data = await usuarioService.encontrarPorId(req.params.id)
        if (!data){
            return res.status(404).json({ error: 'Usuario No encontrado'})
        }
        res.status(200).json(data)
    } catch (error) {
        console.error('Error al buscar por ID', error.message);
        res.status(500).json({ error: 'Hubo un error al obtener el usuario'})
    }
}

const actualizar = async (req, res) => {
   
    try {
        const actualizado = await usuarioService.actualizar(req.params.id, req.body)
        if(!actualizado){
            return res.status(404).json({ error: 'Usuario No encontrado'})
        }
        res.status(200).json(actualizado)
    } catch (error) {
        console.error('Error al actualizar', error.message);
        res.status(500).json({ error: 'Error del servidor al actualizar el usuario'})
    }
}

const eliminarPorId = async (req, res) => {
    try {
        const eliminado = await usuarioService.eliminarPorId(req.params.id)
        if(!eliminado){
            return res.status(404).json({ error: 'Usuario No encontrado'})
        }
        res.status(200).json({ message: 'Eliminado correctamente'})
    } catch (error) {
        console.error('Error al eliminar ', error.message);
        res.status(500).json({ error: 'Error del servidor al eliminar el usuario'})
    }
}

module.exports = {
    encontrarTodos,
    crear,
    crearMultiples,
    encontrarPorId,
    actualizar,
    eliminarPorId
}