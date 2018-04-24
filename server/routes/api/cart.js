const router = require('express').Router()

module.exports = router;

router.get('/', (req, res, next) => {
  if (!req.session.cart) {
    req.session.cart = []
  }
  res.json(req.session.cart);
});

router.put('/', (req, res, next) => {
  try {
    if (Array.isArray(req.body)) req.session.cart = req.body;
    else req.session.cart.push(req.body);
    res.status(200).end();
  } catch (err) {
    next(err)
  }
});

router.delete('/:productId', (req, res, next) => {
  const productId = +req.params.productId
  try {
    if (req.session.cart) {
      const index = req.session.cart.map(item => item.id).indexOf(productId);
      if (index === -1) {
        res.status(404).send("Item not in cart!");
      } else {
        req.session.cart.splice(index, 1);
        res.status(200).end();
      }
    }
  } catch (err) {
    next(err)
  }
});
