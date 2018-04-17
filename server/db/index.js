const db = require('./database')
const User = require('./user')
const Product = require('./product')
const Category = require('./category')
// associations go here!
Product.belongsToMany(Category, {through: 'product-category'})
Category.belongsToMany(Product, {through: 'product-category'})


module.exports = {
  db,
  User,
  Product,
  Category
}
