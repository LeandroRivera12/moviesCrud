const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const movies = sequelize.define('modelName', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    synopsis: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    releaseYear: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    
});

module.exports = movies;