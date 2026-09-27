const express = require("express");

const router = express.Router();

// Temporary in-memory student data
let students = [
    {
        id: 1,
        name: "Rahul",
        age: 20,
        course: "BTech CSE"
    },
    {
        id: 2,
        name: "Priya",
        age: 21,
        course: "BCA"
    }
];

// GET /students - Get all students
router.get("/", (req, res) => {
    try {
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: "Failed to get students" });
    }
});

// GET /students/:id - Get one student
router.get("/:id", (req, res) => {
    try {
        const id = Number(req.params.id);
        const student = students.find(s => s.id === id);

        if (!student) {
            return res.status(404).json({
                error: "Student not found"
            });
        }

        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ error: "Failed to get student" });
    }
});

// POST /students - Create a student
router.post("/", (req, res) => {
    try {
        const { name, age, course } = req.body;

        if (!name || age === undefined || !course) {
            return res.status(400).json({
                error: "name, age and course are required"
            });
        }

        const newStudent = {
            id: students.length
                ? Math.max(...students.map(s => s.id)) + 1
                : 1,
            name,
            age,
            course
        };

        students.push(newStudent);

        res.status(201).json(newStudent);
    } catch (error) {
        res.status(500).json({ error: "Failed to create student" });
    }
});

// PUT /students/:id - Update a student
router.put("/:id", (req, res) => {
    try {
        const id = Number(req.params.id);
        const index = students.findIndex(s => s.id === id);

        if (index === -1) {
            return res.status(404).json({
                error: "Student not found"
            });
        }

        const { name, age, course } = req.body;

        if (!name || age === undefined || !course) {
            return res.status(400).json({
                error: "name, age and course are required"
            });
        }

        students[index] = {
            id,
            name,
            age,
            course
        };

        res.status(200).json(students[index]);
    } catch (error) {
        res.status(500).json({ error: "Failed to update student" });
    }
});

// DELETE /students/:id - Delete a student
router.delete("/:id", (req, res) => {
    try {
        const id = Number(req.params.id);
        const index = students.findIndex(s => s.id === id);

        if (index === -1) {
            return res.status(404).json({
                error: "Student not found"
            });
        }

        const deletedStudent = students.splice(index, 1)[0];

        res.status(200).json({
            message: "Student deleted successfully",
            student: deletedStudent
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete student" });
    }
});

module.exports = router;