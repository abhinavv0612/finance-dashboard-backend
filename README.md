# 💰 Financial Data Management System (Backend)

## 🚀 Overview

This project is a backend system for managing financial records with role-based access control.
It allows users to create, view, update, and delete financial transactions, along with providing aggregated insights via a dashboard API.

The system is designed with clean architecture principles and focuses on scalability, maintainability, and real-world backend practices.

---

## 🧱 Tech Stack

* **Node.js + Express** – Backend framework
* **PostgreSQL** – Relational database
* **Prisma ORM** – Database interaction
* **Joi** – Request validation
* **JWT (jsonwebtoken)** – Authentication
* **Jest + Supertest** – Integration testing

---

## 🏗️ Architecture

The project follows a layered architecture:

```
Route → Controller → Service → Repository → Database
```

* **Controller** → Handles HTTP requests
* **Service** → Business logic
* **Repository** → Database queries
* **Middleware** → Authentication, RBAC & error handling

---

## 🔐 Authentication & Authorization

### 🔑 Authentication

* Implemented using **JWT (JSON Web Tokens)**
* Users register and login to receive a token
* Token must be sent in request headers:

```
Authorization: Bearer <token>
```

---

### 🔐 Role-Based Access Control (RBAC)

Roles supported:

* **ADMIN** → Full access
* **ANALYST** → Create & update records
* **VIEWER** → Read-only access

RBAC is enforced using middleware based on the role extracted from the JWT token.

---

## 📦 API Endpoints

---

### 🔐 Auth APIs

#### Register

```
POST /api/auth/register
```

**Body:**

```json
{
  "name": "Abhinav",
  "email": "abhinav@example.com",
  "password": "123456",
  "role": "ADMIN"
}
```

---

#### Login

```
POST /api/auth/login
```

**Body:**

```json
{
  "email": "abhinav@example.com",
  "password": "123456"
}
```

**Response:**

```json
{
  "token": "jwt_token_here"
}
```

---

### 👤 User APIs

#### Create User (ADMIN only)

```
POST /api/users
```

**Headers:**

```
Authorization: Bearer <token>
```

**Body:**

```json
{
  "name": "Test User",
  "email": "test@example.com",
  "role": "VIEWER"
}
```

---

#### Get Users

```
GET /api/users
```

---

### 💰 Financial Records APIs

#### Create Record

```
POST /api/records
```

**Body:**

```json
{
  "amount": 5000,
  "type": "INCOME",
  "category": "Salary",
  "date": "2026-04-03T00:00:00.000Z",
  "userId": "user_id"
}
```

---

#### Get Records (Filtering + Search + Pagination)

```
GET /api/records?search=salary&type=INCOME&page=1&limit=10
GET /api/records?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD
```

---

#### Update Record

```
PUT /api/records/:id
```

---

#### Delete Record (Soft Delete)

```
DELETE /api/records/:id
```

---

### 📊 Dashboard API

#### Get Summary

```
GET /api/dashboard
```

**Response includes:**

* Total income
* Total expense
* Balance
* Category-wise breakdown
* Recent transactions (last 5)

---

## 📚 API Documentation (Swagger)

Interactive API documentation is available using Swagger UI.

After starting the server, access:

https://finance-dashboard-backend-4qiu.onrender.com/api-docs/

Features:
- View all API endpoints
- Test APIs directly from browser
- Supports authentication via Bearer token

## ✅ Features Implemented

* JWT-based authentication
* Role-based access control (RBAC)
* Financial records CRUD operations
* Filtering (type, category, date)
* Search functionality
* Pagination support
* Soft delete implementation
* Dashboard aggregation API
* Rate limiting for API protection
* Request validation using Joi
* Global error handling
* Integration testing using Jest & Supertest
* Interactive API documentation using Swagger

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```
git clone <your-repo-link>
cd finance-dashboard-backend
```

---

### 2. Install dependencies

```
npm install
```

---

### 3. Configure environment variables

Create a `.env` file:

```
DATABASE_URL="postgresql://postgres:password@localhost:5432/finance_db"
JWT_SECRET="your_secret_key"
```

---

### 4. Run database migrations

```
npx prisma migrate dev
```

---

### 5. Start the server

```
npm run dev
```

---

### 6. Access API documentation
Open in browser:
https://finance-dashboard-backend-4qiu.onrender.com/api-docs/
## Notes
- JWT authentication required for protected routes
- Use /api/auth/login to get token
- Hosted on Render (cold start ~30s)

## 🧪 Testing

Integration tests are implemented using **Jest** and **Supertest**.

Run tests using:

```
npm test
```

---

## ⚠️ Assumptions

* Authentication is handled using JWT tokens
* Role is extracted from token instead of headers
* Soft delete is used instead of permanent deletion
* System is designed for a single service environment

---

## 🚀 Future Improvements

* Advanced analytics (monthly trends)
* Refresh token mechanism
* Multi-user tenancy support

---

## 💡 Key Highlights

* Clean layered architecture
* Secure JWT-based authentication
* Strong RBAC implementation
* Real-world API design (pagination, filtering, search)
* Data safety using soft delete
* Rate limiting for API protection
* Integration testing for reliability
* Swagger based API documentation for easy testing and integration

---

## 👨‍💻 Author

**Abhinav Tomar**

