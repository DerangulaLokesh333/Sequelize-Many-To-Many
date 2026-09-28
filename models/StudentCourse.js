const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const StudentCourse = sequelize.define("StudentCourse", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    studentId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = StudentCourse;