const router = require('express').Router()
const {Product, Review} = require('../../db')
module.exports = router

// GET /api/products

router.get('/', async (req, res, next) => {
  try {
    if (!req.session.cart) {
      req.session.cart = []
    }
    const products = await Product.findAll({
      include: [{
        model: Review,
        as: 'reviews'
      }]
    })
    res.json(products)
  } catch (err) {
    next(err)
  }
});

// check if product exists
router.get('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.productId);
    res.json(product);
  } catch (err) {
    next(err);
  }
});
