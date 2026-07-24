const express = require('express');
const courseController = require('../controllers/courseController');

const router = express.Router();

// Course routes
router.get('/', courseController.getAllCourses);
router.post('/', courseController.createCourse);
router.get('/:id', courseController.getCourseById);
router.put('/:id', courseController.updateCourse);
router.delete('/:id', courseController.deleteCourse);
router.post('/:id/enroll', courseController.enrollStudent);

module.exports = router;
