# Notebook Web Application README

## Overview

Welcome to the Notebook Web Application! This project is built using the MERN stack (MongoDB, Express, React, Node.js) to provide a seamless and secure experience for managing your notes. The backend is built with Node.js and Express, using MongoDB to store user information and notes. The frontend is developed with React. For security, bcrypt is used to hash passwords, and JWT (JSON Web Tokens) is used for authentication.

## Features

- MERN Stack: Utilizes MongoDB, Express, React, and Node.js.
- Secure Authentication: Uses bcrypt for password hashing and JWT for user authentication.
- User Management: Register, login, and manage user profiles.
- Note Management: Create, read, update, and delete notes.
- Responsive Design: Ensures the application is usable on various devices.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. Clone the repository:
   
   git clone https://github.com/jatin17248/notebook.git
   

2. Navigate to the project directory:
   
   cd notebook-app
   

### Backend Setup

1. Navigate to the backend directory:
   
   cd backend
   

2. Install the backend dependencies:
   
   npm install
   

3. Create a `.env` file in the `backend` directory and add the following environment variables:
   
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   

4. Start the backend server using nodemon:
   
   npx nodemon ./index.js
   

   The backend server will run on `http://localhost:5000`.

### Frontend Setup

1. Navigate to the root directory (if not already there):
   
   cd ..
   

2. Install the frontend dependencies:
   
   npm install
   

3. Start the frontend development server:
   
   npm start
   

   The frontend server will run on `http://localhost:3000`.



## Usage

### User Authentication

- Register: Create a new user account.
- Login: Authenticate with email and password to access the application.
- Logout: End the current session.

### Note Management

- Create Note: Add new notes with a title and content.
- Read Notes: View the list of existing notes.
- Update Note: Edit the content of an existing note.
- Delete Note: Remove a note from the list.

### Security

- Password Hashing: User passwords are securely hashed using bcrypt before storing them in the database.
- JWT Authentication: JSON Web Tokens are used to authenticate users and secure their sessions.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.


Thank you for checking out the Notebook Web Application! Your feedback and contributions are welcome. If you have any questions or issues, feel free to open an issue or contact the project maintainers. Happy coding!