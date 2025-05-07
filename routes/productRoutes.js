const express = require('express')
const router = express.Router()
const { encontrarTodos, crear, crearMultiples, encontrarPorId, actualizar, eliminar } = require('../controllers/productoController')


router.get('/', encontrarTodos)
router.get('/:id', encontrarPorId)
router.post('/', crear)
router.post('/batch', crearMultiples)
router.put('/:id', actualizar)
router.delete('/:id', eliminar)


module.exports = router; 