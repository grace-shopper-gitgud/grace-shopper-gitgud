const Sequelize = require('sequelize')
const db = require('./database')

const Review = db.define('review', {
    text: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: null,
        validate: {
            notEmpty: true
        }
    }
})

module.exports = Review
