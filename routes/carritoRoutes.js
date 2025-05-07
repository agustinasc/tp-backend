const express = require('express')
const router = express.Router()
const { encontrarTodos, crear, encontrarPorId, actualizar, eliminarPorId } = require('../controllers/carritoController')

router.get('/', encontrarTodos)
router.get('/:id', encontrarPorId)
router.post('/', crear)
router.put('/:id', actualizar)
router.delete('/:id', eliminarPorId)


module.exports = router; 