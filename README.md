# TODO API

A minimal backend API for managing tasks, built with Node.js and Express, containerized with Docker.

## 📦 Description

This application provides a RESTful API to manage tasks with the following fields:
- `text`: description of the task
- `status`: status of the task (`in progress` or `completed`)

Supported features:

✅ Create tasks  
✅ Update task status  
✅ Delete tasks  
✅ Retrieve task list with optional status filter

---

## 🛠 How to run with Docker Compose

Clone the repository:

git clone https://github.com/MaksimAverman/todo_api-todo.git

cd todo_api-todo

### Locally

1️⃣ Install dependencies:

npm install

2️⃣ Start the application:

node app.js

2️⃣ Start everything:

docker-compose up --build

✅ The API will be available at http://localhost:3000

3️⃣ Stop the containers:

docker-compose down

---

## 🔧 API Endpoints
### POST /tasks
  Create a new task

Example:

```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"text":"Test task","status":"in progress"}'
```

### GET /tasks
  Retrieve all tasks (with optional status filter)

Example:
```bash
curl http://localhost:3000/tasks

curl http://localhost:3000/tasks?status=completed
```

### PATCH /tasks/:id
  Update the status of a task

Example:
```bash
curl -X PATCH http://localhost:3000/tasks/1 \
-H "Content-Type: application/json" \
-d "{\"status\":\"completed\"}"
```

### DELETE /tasks/:id
  Delete a task

Example:
```bash
curl -X DELETE http://localhost:3000/tasks/1
```
