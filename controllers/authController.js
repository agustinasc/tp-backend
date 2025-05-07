const authService = require('../services/authService')

class AuthController {
    async login(req, res) {
        const { email, contraseña } = req.body

        try {
            const { token, usuario } = await authService.login(email, contraseña)
            res.json({ token, usuario})
        } catch (error) {
            res.status(401).json({ error: error.message })
        }
    }
}
module.exports = new AuthController();
