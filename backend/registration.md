# Registration Module

## Overview
This module collects learner registrations from the LMS frontend and stores them in the MySQL table named registration.

## Technologies Used
- React for the frontend form
- Node.js + Express for the backend API
- MySQL database
- mysql2 for database connection
- Axios for frontend-to-backend communication

## Database
- Database: lms_portal_db
- Username: root
- Password: root
- Table: registration

## Fields
- email
- course
- location
- designation

## API
- POST /api/courses/1/enroll

## Database Table Structure
```sql
CREATE TABLE registration (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(100) NOT NULL,
  course VARCHAR(100) NOT NULL,
  location VARCHAR(100) NOT NULL,
  designation VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Backend Implementation
### Database Connection Setup
File: backend/src/config/db.js
```js
const mysql = require('mysql2/promise');
require('dotenv').config();

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'lms_portal_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  charset: 'utf8mb4'
};

const pool = mysql.createPool(dbConfig);

async function initializeDatabase() {
  const connection = await pool.getConnection();

  try {
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbConfig.database}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`);
    await connection.query(`USE \`${dbConfig.database}\``);
    await connection.query(`
      CREATE TABLE IF NOT EXISTS registration (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(100) NOT NULL,
        course VARCHAR(100) NOT NULL,
        location VARCHAR(100) NOT NULL,
        designation VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    `);
  } finally {
    connection.release();
  }
}

module.exports = { pool, initializeDatabase };
```

### API Controller Logic
File: backend/src/controllers/courseController.js
```js
const { pool } = require('../config/db');

const courseController = {
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
```

## Frontend Implementation
### Registration Form
File: frontend/src/pages/CoursesPage.js
```jsx
const [formData, setFormData] = useState({
  email: '',
  course: initialCourses[0].title,
  location: '',
  designation: ''
});

const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await axios.post('/api/courses/1/enroll', {
      ...formData,
      course: selectedCourse
    });

    if (response.data.success) {
      setStatusMessage('Registration saved successfully. Our team will contact you shortly.');
    }
  } catch (error) {
    setStatusMessage(error.response?.data?.message || 'Unable to connect to the server.');
  }
};
```

## Features Implemented
- User registration from the frontend form
- Backend API to accept and process registration data
- MySQL insertion using parameterized queries
- Input validation for required fields
- Success and error feedback in the UI

## Verification
A real API request returned:
```json
{
  "status": 201,
  "body": {
    "success": true,
    "message": "Registration saved successfully"
  }
}
```

## Notes
- Uses parameterized queries
- Includes basic error handling
- Keeps the frontend form and backend API integrated
