const db = require('./database')
const User = require('./user')
const Product = require('./product')
const Category = require('./category')
const Review = require('./review')
const Order = require('./order')

// associations go here!
Product.belongsToMany(Category, {through: 'product-category'})
Category.belongsToMany(Product, {through: 'product-category'})

Product.belongsToMany(Order, {through: 'product-order'})
Order.belongsToMany(Product, {through: 'product-order'})


module.exports = {
  db,
  User,
  Product,
  Category,
  Review,
  Order
}
