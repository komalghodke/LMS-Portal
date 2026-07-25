const { pool } = require('../config/db');

const courseController = {
  getAllCourses: (req, res) => {
    res.json({
      courses: [
        { id: 1, title: 'MEAN Stack Development' },
        { id: 2, title: 'MERN Stack Development' },
        { id: 3, title: 'Java Programming' },
        { id: 4, title: 'GenAI for Developers' }
      ]
    });
  },

  createCourse: (req, res) => {
    res.status(201).json({ success: true, message: 'Course created successfully' });
  },

  getCourseById: (req, res) => {
    res.json({ id: req.params.id, title: 'Sample Course' });
  },

  updateCourse: (req, res) => {
    res.json({ success: true, message: 'Course updated successfully' });
  },

  deleteCourse: (req, res) => {
    res.json({ success: true, message: 'Course removed successfully' });
  },

  enrollStudent: async (req, res) => {
    const { email, course, location, designation } = req.body;

    if (!email || !course || !location || !designation) {
      return res.status(400).json({ success: false, message: 'Please provide all required fields' });
    }

    try {
      const [result] = await pool.query(
        'INSERT INTO registration (email, course, location, designation) VALUES (?, ?, ?, ?)',
        [email, course, location, designation]
      );

      const registration = {
        id: result.insertId,
        email,
        course,
        location,
        designation,
        createdAt: new Date().toISOString()
      };

      res.status(201).json({ success: true, message: 'Registration saved successfully', registration });
    } catch (error) {
      console.error('MySQL insert error:', error);
      res.status(500).json({ success: false, message: 'Database error while saving registration' });
    }
  }
};

module.exports = courseController;
