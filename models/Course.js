const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Course = sequelize.define("Course", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    duration: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Course;