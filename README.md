# LMS Portal - Learning Management System

A comprehensive, modern Learning Management System (LMS) built with full-stack technologies.

## 📋 Project Overview

The LMS Portal is a web-based platform designed for educational institutions to manage courses, students, assignments, and assessments. It provides separate interfaces for administrators, instructors, and students with role-based access control.

### Key Features

- ✅ **User Management** - Role-based user management (Admin, Instructor, Student)
- 📚 **Course Management** - Create, manage, and organize courses
- 👥 **Student Enrollment** - Students can browse and enroll in courses
- 📝 **Assignments** - Create and submit assignments
- ✔️ **Grading** - Comprehensive gradebook and assessment tools
- 💬 **Discussion Forums** - Course-based discussion spaces
- 🔐 **Authentication** - Secure JWT-based authentication

## 🏗️ Project Structure

```
LMS-Portal-Demo-Project/
├── backend/                 # Node.js/Express API server
│   ├── src/
│   │   ├── index.js        # Entry point
│   │   ├── routes/         # API routes
│   │   ├── controllers/    # Business logic
│   │   ├── models/         # Database models
│   │   ├── middleware/     # Custom middleware
│   │   └── config/         # Configuration files
│   ├── package.json
│   └── .env.example
├── frontend/               # React web application
│   ├── public/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── .gitignore
├── docs/                   # Documentation
└── README.md
```

## 🛠️ Tech Stack

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** PostgreSQL
- **Authentication:** JWT (JSON Web Tokens)
- **Password Hashing:** bcryptjs

### Frontend
- **Framework:** React 18
- **Language:** JavaScript/JSX
- **Routing:** React Router v6
- **HTTP Client:** Axios
- **Styling:** CSS3

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- PostgreSQL database
- Git

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Configure your environment variables:
   - `DATABASE_URL` - PostgreSQL connection string
   - `JWT_SECRET` - Secret key for JWT tokens
   - `PORT` - Server port (default: 5000)

5. Start the backend server:
   ```bash
   npm run dev
   ```

The API will be available at `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The application will open at `http://localhost:3000`

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh-token` - Refresh authentication token

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Courses
- `GET /api/courses` - Get all courses
- `POST /api/courses` - Create new course
- `GET /api/courses/:id` - Get course by ID
- `PUT /api/courses/:id` - Update course
- `DELETE /api/courses/:id` - Delete course
- `POST /api/courses/:id/enroll` - Enroll student in course

## 🔐 Authentication

The system uses JWT (JSON Web Tokens) for authentication. After successful login, the client receives a token that must be sent with subsequent requests in the `Authorization` header:

```
Authorization: Bearer <token>
```

## 📁 Database Schema (To Be Implemented)

### Users Table
- id (UUID)
- name (String)
- email (String, unique)
- password (String, hashed)
- role (ENUM: admin, instructor, student)
- created_at (Timestamp)

### Courses Table
- id (UUID)
- title (String)
- description (Text)
- instructor_id (UUID, FK)
- created_at (Timestamp)
- updated_at (Timestamp)

### Enrollments Table
- id (UUID)
- student_id (UUID, FK)
- course_id (UUID, FK)
- enrolled_at (Timestamp)

## 🧪 Testing

### Run Backend Tests
```bash
cd backend
npm test
```

### Run Frontend Tests
```bash
cd frontend
npm test
```

## 📝 Development Guidelines

- Follow RESTful API design principles
- Write meaningful commit messages
- Maintain code consistency with existing style
- Add comments for complex business logic
- Update documentation when adding features

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature-name`
2. Commit your changes: `git commit -m "Add some feature"`
3. Push to the branch: `git push origin feature/your-feature-name`
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team

- **Developed by:** CDAC Learning Team
- **Project:** PGCP-AC-CDAC GenAI Demo

## 📞 Support

For issues or questions, please reach out to the development team.

## 🗺️ Roadmap

### Phase 1 (Current)
- [x] Project setup and scaffolding
- [ ] Database schema and migrations
- [ ] Authentication implementation
- [ ] Basic CRUD operations

### Phase 2
- [ ] Course management features
- [ ] Assignment submission system
- [ ] Grading system
- [ ] User profile management

### Phase 3
- [ ] Discussion forums
- [ ] Real-time notifications
- [ ] Analytics and reporting
- [ ] Mobile app (if applicable)

---

**Last Updated:** July 24, 2026
