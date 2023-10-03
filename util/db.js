const Sequelize = require('sequelize');

const sequelize = new Sequelize('cricketer-info', 'root', 'Root@123', {
    dialect: 'mysql', 
    host: 'localhost'})

    module.exports = sequelize;