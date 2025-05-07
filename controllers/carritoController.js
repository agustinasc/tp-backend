const carritoService = require('../services/carritoService');

class CarritoController {
  async encontrarTodos(req, res) {
    try {
      const carrito = await carritoService.encontrarTodos();
      res.json(carrito)
      
    } catch (error) {
      console.error('Error al obtener los carritos ', error.message)
      res.status(500).json({ error: 'Error al obtener los carritos' })
    }
  }

  async encontrarPorId(req, res) {
    try {
      const carrito = await carritoService.encontrarPorId(req.params.id);
      carrito ? res.json(carrito) : res.status(404).json({ error: 'No encontrado' })
    } catch (error) {
      console.error('Error al obtener el carrito', error.message)
      res.status(500).json({ error: 'Error al obtener el carrito' })
    }
    
  }

  async crear(req, res) {
    try {
      const nuevo = await carritoService.crear(req.body);
      res.status(201).json(nuevo)
      
    } catch (error) {
      console.error('Error al crear el carrito ', error.message)
      res.status(400).json({ error: error.message || 'Error al crear el carrito' })
    }
  }

  async actualizar(req, res) {
    try {
      const actualizado = await carritoService.actualizarPorId(req.params.id, req.body)
      actualizado ? res.json(actualizado) : res.status(404).json({ error: 'No encontrado' })
      
    } catch (error) {
      console.error('Error al actualizar ', error.message)
      res.status(400).json({ error: error.message || 'Error al actualizar el carrito' })
    }
  }

  async eliminarPorId(req, res) {
    try {
      const eliminado = await carritoService.eliminarPorId(req.params.id)
      eliminado ? res.json({ msg: 'Eliminado' }) : res.status(404).json({ error: 'No encontrado' })
      
    } catch (error) {
      console.error('Error al eliminar ', error.message)
      res.status(500).json({ error: 'Error al eliminar el carrito' })
    }
  }
}

module.exports = new CarritoController()
