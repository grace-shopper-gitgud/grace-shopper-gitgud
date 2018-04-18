const Sequelize = require('sequelize')
const db = require('./database')

const Product = db.define('product', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    imageURL: {
        type: Sequelize.STRING,
        defaultValue: 'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        validate: {
            isUrl: true
        }
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 50.0
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 10
    }
})

module.exports = Product
