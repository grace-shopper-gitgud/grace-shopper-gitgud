const router = require('express').Router()
const {Product} = require('../../db')
module.exports = router

// GET /api/products

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
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
