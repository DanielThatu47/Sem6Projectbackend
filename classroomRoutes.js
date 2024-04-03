const express = require('express');
const router = express.Router();
const Classroom = require('./Classroom');

// Create a classroom
router.post('/classrooms', async (req, res) => {
    try {
        console.log(req.body);
        const classroom = await Classroom.create(req.body);
        res.status(201).json({classroom});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create classroom' });
    }
});

// Get all classrooms
router.get('/classrooms', async (req, res) => {
    try {
        const classrooms = await Classroom.find();
        res.json({ classrooms });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch classrooms' });
    }
});

module.exports = router;
