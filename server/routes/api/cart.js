const router = require('express').Router()

module.exports = router;

router.put('/', (req, res, next) => {
  try {
    if (!req.session.cart) {
      req.session.cart = []
    }
    req.session.cart.push(req.body);
    res.json(req.session.cart)
  } catch (err) {
    next(err)
  }
});

router.delete('/', (req, res, next) => {
  try {
    if (req.session.cart) {
      const index = req.session.cart.map(item => item.id).indexOf(req.body.id);
      if (index === -1) {
        console.log("In if")
        res.status(404).send("Item not in cart!");
      } else {
        req.session.cart.splice(index, 1);
        res.json(req.session.cart)
      }
    }
  } catch (err) {
    next(err)
  }
});