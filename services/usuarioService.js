const Usuario = require('../models/Usuario')
const crearRepository = require ('../repositories/genericRepository')

const usuarioRepo = crearRepository (Usuario)

const obtenerTodos = () => usuarioRepo.encontrarTodos();
const encontrarPorId = (id) => usuarioRepo.encontrarPorId(id);
const crear = (data) => usuarioRepo.crear(data);
const actualizar = (id, data) => usuarioRepo.actualizarPorId(id, data);
const eliminarPorId = (id) => usuarioRepo.eliminarPorId(id);

module.exports = {
  obtenerTodos,
  encontrarPorId,
  crear,
  actualizar,
  eliminarPorId,
};