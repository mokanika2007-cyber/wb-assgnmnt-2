# Express Lab 2 - Student CRUD API

## 1. Install dependencies

Open this folder in VS Code and run:

```bash
npm install
```

## 2. Start the server

```bash
npm start
```

The server will run at:

http://localhost:3000

## 3. Postman URLs

### GET all students
GET http://localhost:3000/students

Expected status: 200

### GET one student
GET http://localhost:3000/students/1

Expected status: 200

### POST a student
POST http://localhost:3000/students

Headers:
Content-Type: application/json

Body -> raw -> JSON:

```json
{
  "name": "Aman",
  "age": 20,
  "course": "BTech CSE"
}
```

Expected status: 201

### PUT a student
PUT http://localhost:3000/students/1

Headers:
Content-Type: application/json

Body -> raw -> JSON:

```json
{
  "name": "Rahul Updated",
  "age": 21,
  "course": "BTech AI-ML"
}
```

Expected status: 200

### DELETE unknown student
DELETE http://localhost:3000/students/99

Expected status: 404

### DELETE existing student
DELETE http://localhost:3000/students/1

Expected status: 200

## Lab requirements covered

- Express app setup
- /students router
- Separate routes/studentRoutes.js
- GET, POST, PUT and DELETE CRUD APIs
- Correct HTTP status codes
- JSON request/response bodies
- try/catch error handling
- Custom global logger middleware
- Postman testing
