const router = require('express').Router()
const {Product} = require('../../db')
module.exports = router

// GET /api/products

router.get('/', async (req, res, next) => {
  try {
    if (!req.session.cart) {
      req.session.cart = []
    }
    const products = await Product.findAll()
    console.log('sessionlog', req.session.cart)
    res.json(products)
  } catch (err) {
    next(err)
  }
})
