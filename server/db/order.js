const Sequelize = require('sequelize')
const db = require('./database')

const Order = db.define('order', {
    status: {
        type: Sequelize.ENUM('PENDING', 'PROCESSING', 'COMPLETED', 'CANCELLED'),
        defualtValue: 'PENDING',
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validation: {
            notEmpty: true,
            isEmail: true
        }
    },
    street: {
        type: Sequelize.STRING,
        allowNull: false
    },
    unit: {
        type: Sequelize.STRING,
        allowNull: true
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false
    },
    zipcode: {
        type: Sequelize.STRING,
        allowNull: false
    },
    total: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
})

module.exports = Order
