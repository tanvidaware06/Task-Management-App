# Task Management Application

A full-stack Task Management Application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This application allows users to manage their daily tasks with authentication and CRUD operations.

## Features

- User Registration and Login
- Secure Authentication
- Create Tasks
- View Tasks
- Update Tasks
- Delete Tasks
- MongoDB Database Integration
- RESTful API
- React Frontend
- Responsive UI

## Technologies Used

### Frontend
- React.js
- Axios
- React Router DOM
- Bootstrap

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs
- dotenv

## Project Structure

```
Task-Management-App/
│
├── client/
│   ├── src/
│   ├── public/
│
├── models/
│   ├── User.js
│   └── Task.js
│
├── routes/
│   ├── auth.js
│   └── task.js
│
├── server.js
├── package.json
└── .env
```

## Installation

### Clone the repository

```bash
git clone https://github.com/tanvidaware06/Task-Management-App.git
```

### Install Backend Dependencies

```bash
npm install
```

### Install Frontend Dependencies

```bash
cd client
npm install
```

### Configure Environment Variables

Create a `.env` file in the root directory and add:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

### Run Backend

```bash
npm start
```

### Run Frontend

```bash
cd client
npm start
```

## API Endpoints

### Authentication

- POST `/api/auth/register`
- POST `/api/auth/login`

### Tasks

- GET `/api/tasks`
- POST `/api/tasks`
- PUT `/api/tasks/:id`
- DELETE `/api/tasks/:id`

## Future Improvements

- Task Categories
- Task Priority
- Due Dates
- Real-Time Updates using WebSockets
- Dark Mode
- Deployment on Render/Vercel

## Author

**Tanvi Daware**

GitHub:
https://github.com/tanvidaware06
