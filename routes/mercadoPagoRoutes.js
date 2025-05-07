/* const express = require('express')
const mercadopago = require('mercadopago')

const router = express.Router();

mercadopago.configure({
  access_token: 'TESTUSER71486247' 
});

router.post('/create-preference', async (req, res) => {
  try {
    const items = req.body.items.map(product => ({
      title: product.nombre,
      unit_price: product.precio,
      quantity: product.quantity,
    }));

    const preference = {
      items,
      back_urls: {
        success: 'http://localhost:3000/success',
        failure: 'http://localhost:3000/failure',
      },
      auto_return: 'approved'
    };

    const response = await mercadopago.preferences.create(preference);
    res.json({ id: response.body.id });
  } catch (error) {
    console.error('Error creando preferencia:', error);
    res.status(500).json({ error: 'Error al crear preferencia' });
  }
});

module.exports = router

 */