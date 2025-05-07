const validarProducto = (req, res, next) => {
    const { nombre, precio, categoria } = req.body

    if (!nombre || !precio || !categoria) {
        return res.status(400).json( { error: 'Faltan campos requeridos: nombre, precio o categoria'})
    }
    next()
}

module.exports = validarProducto
