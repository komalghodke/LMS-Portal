# Architecture Overview

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Client Layer                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  React Frontend (localhost:3000)                     │  │
│  │  - Homepage, Courses, Login pages                    │  │
│  │  - Components-based architecture                     │  │
│  │  - Axios for API communication                       │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                          ↓ HTTPS/REST
┌─────────────────────────────────────────────────────────────┐
│                    API Layer                                │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Express.js Backend (localhost:5000)                 │  │
│  │  - REST API endpoints                                │  │
│  │  - JWT Authentication middleware                     │  │
│  │  - CORS enabled for frontend communication           │  │
│  │  - Input validation                                  │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                          ↓ SQL
┌─────────────────────────────────────────────────────────────┐
│                    Data Layer                               │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  PostgreSQL Database                                 │  │
│  │  - Users table                                       │  │
│  │  - Courses table                                     │  │
│  │  - Enrollments table                                 │  │
│  │  - Assignments table                                 │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## Component Architecture (Frontend)

```
App (Root)
├── Navbar (Navigation)
├── Routes
│   ├── HomePage
│   │   └── Features Grid
│   ├── CoursesPage
│   │   └── Course Card List
│   └── LoginPage
│       └── Login Form
└── Footer
```

## API Route Structure (Backend)

```
/api
├── /auth
│   ├── POST /register
│   ├── POST /login
│   ├── POST /logout
│   └── POST /refresh-token
├── /users
│   ├── GET /
│   ├── GET /:id
│   ├── PUT /:id
│   └── DELETE /:id
└── /courses
    ├── GET /
    ├── POST /
    ├── GET /:id
    ├── PUT /:id
    ├── DELETE /:id
    └── POST /:id/enroll
```

## Authentication Flow

1. **User Registration/Login**
   - Frontend sends credentials to `/api/auth/login`
   - Backend validates and returns JWT token
   - Token stored in frontend (localStorage/sessionStorage)

2. **Authenticated Requests**
   - Frontend includes JWT in `Authorization: Bearer <token>` header
   - Backend middleware validates token
   - Request proceeds if valid

3. **Token Refresh**
   - When token expires, call `/api/auth/refresh-token`
   - Backend issues new token if refresh token is valid

## Database Schema (To Be Implemented)

### Users
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  role ENUM('admin', 'instructor', 'student'),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

### Courses
```sql
CREATE TABLE courses (
  id UUID PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  instructor_id UUID REFERENCES users(id),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

### Enrollments
```sql
CREATE TABLE enrollments (
  id UUID PRIMARY KEY,
  student_id UUID REFERENCES users(id),
  course_id UUID REFERENCES courses(id),
  enrolled_at TIMESTAMP,
  UNIQUE(student_id, course_id)
);
```

## Deployment Considerations

- **Frontend:** Can be deployed to Netlify, Vercel, or AWS S3
- **Backend:** Can be deployed to Heroku, AWS EC2, or similar
- **Database:** Managed PostgreSQL service (AWS RDS, Azure Database, etc.)
- **Environment:** Use separate .env files for dev, staging, production

## Security Considerations

- ✅ CORS enabled for secure cross-origin requests
- ✅ JWT-based stateless authentication
- ✅ Password hashing with bcryptjs
- ⚠️ HTTPS/SSL should be enforced in production
- ⚠️ Implement rate limiting
- ⚠️ Input validation on all endpoints
- ⚠️ SQL injection prevention via parameterized queries
- ⚠️ CSRF token implementation for state-changing operations

---

**Architecture Version:** 1.0
**Last Updated:** July 24, 2026
