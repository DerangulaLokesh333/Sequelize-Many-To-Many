const Student = require("./Student");
const Course = require("./Course");
const StudentCourse = require("./StudentCourse");

Student.belongsToMany(Course, {
    through: StudentCourse,
    foreignKey: "studentId"
});

Course.belongsToMany(Student, {
    through: StudentCourse,
    foreignKey: "courseId"
});

module.exports = {
    Student,
    Course,
    StudentCourse
};