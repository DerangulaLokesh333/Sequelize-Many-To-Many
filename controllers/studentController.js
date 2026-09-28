const { Student, Course, StudentCourse } = require("../models/associations");

// Create student
const createStudent = async (req, res) => {
    try {
        const { name, email } = req.body;

        const student = await Student.create({
            name,
            email
        });

        res.status(201).json(student);

    } catch (error) {
        res.status(500).json({
            message: "Failed to create student",
            error: error.message
        });
    }
};


// Create course
const createCourse = async (req, res) => {
    try {
        const { name, duration } = req.body;

        const course = await Course.create({
            name,
            duration
        });

        res.status(201).json(course);

    } catch (error) {
        res.status(500).json({
            message: "Failed to create course",
            error: error.message
        });
    }
};


// Assign course to student
const assignCourse = async (req, res) => {
    try {
        const { studentId, courseId } = req.body;

        const studentCourse = await StudentCourse.create({
            studentId,
            courseId
        });

        res.status(201).json(studentCourse);

    } catch (error) {
        res.status(500).json({
            message: "Failed to assign course",
            error: error.message
        });
    }
};


// Get students with their courses
const getStudentsWithCourses = async (req, res) => {
    try {
        const students = await Student.findAll({
            include: {
                model: Course
            }
        });

        res.json(students);

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch students",
            error: error.message
        });
    }
};


module.exports = {
    createStudent,
    createCourse,
    assignCourse,
    getStudentsWithCourses
};