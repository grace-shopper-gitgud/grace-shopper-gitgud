const Sequelize = require('sequelize')
const db = require('./database')

const Order = db.define('order', {
    status: {
        type: Sequelize.ENUM('PENDING', 'PROCESSING', 'COMPLETED', 'CANCELLED'),
        defualtValue: 'PENDING',
        allowNull: false
    },
    address: {
        type: Sequelize.TEXT,
        allowNull: false,
        validation: {
            notEmpty: true
        }
    }
})

module.exports = Order
