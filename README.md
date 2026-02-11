 # 📌 FullStack User Management System
 A **Full Stack User Management Application** built with **Spring Boot** (Backend) and **React.js** (Frontend).  
Supports **user registration**, **login with JWT authentication**, and **CRUD operations** for managing users.

## 📝 Project Overview

This project allows users to:

  - Register a new account

  - Login securely using JWT

  - View, Add, Edit, and Delete users (CRUD operations)

   - Access secured endpoints with token-based authentication

   - Use a simple frontend built with React.js to interact with backend APIs

It is a mini full-stack application designed to show practical knowledge of backend API development, frontend integration, and secure data handling.

 ## 🛠️ Tech Stack

**Backend:**

- **Java 17** – for backend development

- **Spring Boot 3.5.3** – to simplify and structure the backend application

- **Spring Security** – to secure endpoints with JWT and roles

- **JWT (io.jsonwebtoken)** – for token-based authentication

- **Maven** – for dependency management and build automation

- **MySQL** – for persistent database storage (H2 can be used for in-memory testing)

- **Postman** – for manual testing of API endpoints

**Frontend:**
- **React.js** – for building dynamic and responsive user interfaces

- **React Router DOM** – for client-side routing and navigation between pages

- **Axios** – to make HTTP requests to the backend APIs

- **HTML & CSS** – for structuring and styling the UI

- **JavaScript (ES6+)** – for frontend logic and interactivity

- **Bootstrap / Custom CSS** – for responsive and clean UI design

## ✨**Features:**
### 🔐 Authentication
- User Registration  
- User Login  
- JWT-based authentication  
- Secured REST APIs using Spring Security  

### 👤 User Management (CRUD)
- Add User  
- View Users  
- Update User  
- Delete User  

### 🎨 Frontend
- Simple and clean UI  
- Login & Register pages  
- User list with edit and delete options  
- Protected routes after login  

## 📂 Project Structure
**Backend (Spring Boot)**
backend/
├── controller
│ ├── AuthController.java
│ └── UserController.java
├── service
│ ├── AuthService.java
│ └── UserService.java
├── repository
│ └── UserRepository.java
├── model
│ └── User.java
├── security
│ ├── JwtFilter.java
│ └── JwtUtil.java
├── exception
└── FullstackManagementApplication.java

**Frontend (React.js)**
frontend/
├── src
│ ├── api
│ │ └── axiosInstance.js
│ ├── components
│ │ └── Navbar.js
│ ├── pages
│ │ ├── Login.js
│ │ ├── Register.js
│ │ ├── Home.js
│ │ ├── AddUser.js
│ │ ├── EditUser.js
│ │ └── ViewUser.js
│ ├── services
│ │ └── UserService.js
│ ├── styles
│ │ ├── Auth.css
│ │ ├── Home.css
│ │ └── Navbar.css
│ ├── App.js
│ └── index.js

## 🔧 Backend Configuration (application.properties)
**Spring Boot Application Name**
spring.application.name=fullstackmanagement
**MySQL Database Configuration**
spring.datasource.url=jdbc:mysql://localhost:3306/fullstack_db
spring.datasource.username=YOUR_DB_USERNAME
spring.datasource.password=YOUR_DB_PASSWORD
**⚡ Important:** Replace `YOUR_DB_PASSWORD` with your actual password
JPA / Hibernate Settings
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
**Server Port**
server.port=5000
**JWT Configuration**
jwt.secret=YOUR_JWT_SECRET_KEY
jwt.expiration=36000000

▶️**How to Run the Project**
1️⃣ Start MySQL Database
   CREATE DATABASE fullstack_db;
2️⃣**Backend Setup**
   cd backend
   mvn clean install
   mvn spring-boot:run
   Backend will run at:http://localhost:5000
3️⃣**Frontend Setup**
   cd frontend
   npm install
   npm start
   Frontend will run at: http://localhost:3000

🔑 Make sure the backend is running before using the frontend. JWT tokens are stored in localStorage for protected routes.

## 🔑 API Endpoints
🔓**Public**
| Method | Endpoint         | Description                     |
| :----: | :--------------- | :------------------------------ |
|  POST  | `/auth/register` | 📝 Register a new user          |
|  POST  | `/auth/login`    | 🔑 Login user and get JWT token |

🔐 **User Management (Secured – JWT required)**
| Method | Endpoint      | Description           |
| :----: | :------------ | :-------------------- |
|   GET  | `/users`      | 👥 Get all users      |
|   GET  | `/users/{id}` | 👤 Get user by ID     |
|  POST  | `/users`      | ➕ Add new user       |
|   PUT  | `/users/{id}` | ✏️ Update user by ID  |
| DELETE | `/users/{id}` | 🗑️ Delete user by ID |

## 📬 Testing APIs with Postman
 1️⃣Install Postman from https://www.postman.com/downloads/

 2️⃣Test Public Endpoints (no JWT required):

   /auth/register (POST)

   /auth/login (POST) → returns JWT token

 3️⃣Test Secured Endpoints (JWT required):

    /users, /users/{id}, etc.

Include header: Authorization: Bearer <JWT_TOKEN>

⚡ Tip: Save JWT token in Postman environment variables for easier testing.

## ⚙️ Prerequisites

Before running this project, make sure you have the following installed:

- **Java 17** – required for running **Spring Boot** backend
- **Maven** – to build and run the backend project
- **MySQL** – for database storage (**create a database `fullstack_db`**)
- **Node.js & npm** – to run the **React** frontend
- **Postman** (optional) – for testing API endpoints
- **IDE / Code Editor** (like **VS Code**, **IntelliJ IDEA**, or **Eclipse**)

 ⚡ **Tip:** Make sure MySQL is running and the database credentials in `application.properties` are correct before starting the backend.
 
## ⚠️ Troubleshooting

| Problem                | Cause                         | Solution                                                             |
| ---------------------- | ----------------------------- | -------------------------------------------------------------------- |
| ERR_CONNECTION_REFUSED | Backend not running           | Start Spring Boot server, check port 5000                            |
| CORS Error             | Backend not allowing frontend | Add `@CrossOrigin(origins = "http://localhost:3000")` in controllers |
| 404 / API not found    | Wrong endpoint                | Check `/auth` or `/users` endpoints                                  |

## 👩‍💻 Author

**Hema Gayathri Ganisetti**


 





