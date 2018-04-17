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
        defaultValue: 'https://www.pexels.com/photo/photo-of-person-typing-on-computer-keyboard-735911/',
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