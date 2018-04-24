const router = require('express').Router();
const {Order, User, Product} = require('../../db');

module.exports = router;

router.param('userId', (req, res, next, userId) => {
  User.findById(userId)
  .then(user => {
    if (!user) {
      return new Error('404 Not Found');
    }
    req.user = user;
    next();
  })
  .catch(next);
})

router.get('/:userId', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      where: {
        userId: req.user.id
      },
      include: [{
        model: Product,
        as: 'products'
      }]
    })
    res.json(orders);
  } catch (err) {
    next(err);
  }
});

router.post('/:userId', async (req, res, next) => {
  let {order, cart} = req.body;
  console.log(cart);
  order = {
    ...order,
    total: Number(order.total),
    status: 'COMPLETED'
  };
  try {
    const resolvedOrder = await Order.create(order);
    //const resolvedCart = await Promise.all(resolvedOrder.addProducts(cart));
    console.log(resolvedCart);
    res.json(resolvedOrder);
  } catch (err) {
    next(err);
  }
})
