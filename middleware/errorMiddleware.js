const manejarErrores = (err, req, res, next) => {
    console.error(err.stack)
    
    res.status(500).json({
        error: err.message || 'Error en el servidos'
    })
    
}

module.exports = manejarErrores 