const Sequelize = require('sequelize')
const db = require('./database')

const Category = db.define('category', {
    title: {
        type: Sequelize.STRING
    }
})

module.exports = Category
