const Sequelize = require('sequelize')
const sequelize = require('../util/db')

const CricketInfo = sequelize.define('cricketInfo', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dob: {
        type: Sequelize.STRING,
        allowNull: false
    },
    photo: {
        type: Sequelize.STRING,
        allowNull: false    
    },
    birthPlace: {
        typr: Sequelize.STRING,
        allowNull: false    
    },
    career: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mathches: {
        type: Sequelize.INTEGER,
        allowNull: false    
    },
    score: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    fifties: {
        type: Sequelize.INTEGER
    },
    centuries: {
        type: Sequelize.INTEGER
    },
    wickets: {
        type: Sequelize.INTEGER
    },
    average: {
        type: Sequelize.INTEGER
    }
})

module.exports = CricketInfo;