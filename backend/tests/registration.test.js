const request = require('supertest');
const fs = require('fs');
const path = require('path');
const { app } = require('../src/index');

const registrationsFile = path.join(__dirname, '..', 'src', 'data', 'registrations.json');

beforeEach(() => {
  fs.writeFileSync(registrationsFile, JSON.stringify([], null, 2));
});

test('POST /api/courses/1/enroll stores a registration', async () => {
  const response = await request(app)
    .post('/api/courses/1/enroll')
    .send({
      name: 'Aarav Sharma',
      email: 'aarav@example.com',
      phone: '9876543210',
      course: 'MEAN Stack Development',
      message: 'Looking for full-stack training.'
    });

  expect(response.status).toBe(201);
  expect(response.body.success).toBe(true);
  expect(response.body.registration.course).toBe('MEAN Stack Development');

  const registrations = JSON.parse(fs.readFileSync(registrationsFile, 'utf8'));
  expect(registrations).toHaveLength(1);
  expect(registrations[0].email).toBe('aarav@example.com');
});
