const express = require('express')
const router = express.Router()
const { encontrarTodos, crear, encontrarPorId, actualizar, eliminarPorId } = require('../controllers/usuarioController')
const { verificarToken, autorizarRol } = require('../middleware/authMiddleware')

router.get('/', verificarToken, autorizarRol(['admin']), encontrarTodos) //admin solo puede obtener todos los usuarios
router.get('/:id', verificarToken, encontrarPorId) //cualquier usuario auteticado puede hacerlo
router.post('/', verificarToken, autorizarRol(['admin']), crear) //admin solo puede crear un nuevo usuario
//router.post('/batch', crearMultiples)
router.put('/:id', verificarToken, autorizarRol(['admin']), actualizar) //admin solo puede modificar un usuario
router.delete('/:id', verificarToken, autorizarRol(['admin']), eliminarPorId) //admin solo puede eliminar un usuario


module.exports = router; 