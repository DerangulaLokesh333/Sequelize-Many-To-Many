const express = require("express");
const sequelize = require("./db");

const {
    createStudent,
    createCourse,
    assignCourse,
    getStudentsWithCourses
} = require("./controllers/studentController");

const app = express();

app.use(express.json());


// Create student
app.post("/students", createStudent);


// Create course
app.post("/courses", createCourse);


// Assign course to student
app.post("/student-courses", assignCourse);


// Get students with their courses
app.get("/students", getStudentsWithCourses);


async function startServer() {
    try {
        await sequelize.authenticate();

        console.log("Database connected successfully");

        await sequelize.sync();

        console.log("Tables created successfully");

        app.listen(3000, () => {
            console.log("Server running on port 3000");
        });

    } catch (error) {
        console.log("Failed to start server:", error.message);
    }
}

startServer();