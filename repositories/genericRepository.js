 const crearRepository = (Modelo) => ({
    encontrarTodos: () => Modelo.find(),
    encontrarPorId: (id) => Modelo.findById(id),
    crear: (data) => new Modelo(data).save(),
    actualizarPorId: (id, data) => Modelo.findByIdAndUpdate(id, data, { new: true}),
    eliminarPorId: (id) => Modelo.findByIdAndDelete(id)
})

module.exports = crearRepository 