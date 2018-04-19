const Sequelize = require('sequelize')
const db = require('./database')

const Category = db.define('category', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        validation: {
            unique: true,
            notEmpty: true
        }
    }
})

module.exports = Category
