const router = require('express').Router();
const {Order} = require('../../db');

module.exports = router;

router.get('/:userId', async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const orders = await Order.findAll({
      where: {
        userId
      }
    })
    res.json(orders);
  } catch (err) {
    (next(err))
  }
});
