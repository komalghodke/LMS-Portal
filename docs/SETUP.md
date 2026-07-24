# Project Setup Guide

## Initial Setup Complete ✅

The LMS Portal project has been initialized with the following structure:

### Backend (`/backend`)
- **Framework:** Express.js (Node.js)
- **Structure:**
  - `src/index.js` - Main server file
  - `src/routes/` - API route definitions
  - `src/controllers/` - Business logic handlers
  - `src/models/` - Database models (to be implemented)
  - `src/middleware/` - Custom middleware
  - `src/config/` - Configuration files

**Dependencies:**
- express - Web framework
- pg - PostgreSQL client
- jsonwebtoken - JWT authentication
- bcryptjs - Password hashing
- cors - Cross-Origin Resource Sharing
- express-validator - Input validation
- multer - File upload handling

### Frontend (`/frontend`)
- **Framework:** React 18
- **Structure:**
  - `src/pages/` - Page components (Home, Courses, Login)
  - `src/components/` - Reusable React components
  - `src/services/` - API service layer
  - `public/` - Static assets

**Key Components:**
- HomePage - Landing page with features overview
- CoursesPage - Display and browse courses
- LoginPage - User authentication interface

## Next Steps

### 1. Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

### 2. Database Setup

1. Create PostgreSQL database:
   ```sql
   CREATE DATABASE lms_portal;
   ```

2. Configure database connection in `backend/.env`

3. Create database tables (schema to be added)

### 3. Environment Configuration

1. Copy `.env.example` to `.env` in backend directory:
   ```bash
   cp backend/.env.example backend/.env
   ```

2. Update environment variables with your configuration

### 4. Run the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

The application will be available at:
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5000`

## API Endpoints (Placeholder)

All endpoints are currently returning 501 (Not Implemented). Implementation details coming next:

- **Authentication:** `/api/auth/*`
- **Users:** `/api/users/*`
- **Courses:** `/api/courses/*`

## Features to Implement

- [ ] Database migration scripts
- [ ] User authentication (register/login)
- [ ] Database models and migrations
- [ ] API endpoint implementations
- [ ] Frontend form validation
- [ ] Error handling and logging
- [ ] Unit and integration tests
- [ ] Deployment configuration (Docker, etc.)

## File Organization Notes

- Backend follows MVC pattern (Models, Views/Routes, Controllers)
- Frontend uses component-based architecture
- Configuration files separated from business logic
- Each feature has dedicated route, controller, and model files

---

For detailed information, see [README.md](../README.md)
