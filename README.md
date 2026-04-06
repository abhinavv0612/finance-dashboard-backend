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

---

## 🏗️ Architecture

The project follows a layered architecture:

```
Route → Controller → Service → Repository → Database
```

* **Controller** → Handles HTTP requests
* **Service** → Business logic
* **Repository** → Database queries
* **Middleware** → RBAC & error handling

---

## 🔐 Role-Based Access Control (RBAC)

Roles supported:

* **ADMIN** → Full access
* **ANALYST** → Create & update records
* **VIEWER** → Read-only access

RBAC is implemented via middleware using request headers:

```
x-user-role: ADMIN | ANALYST | VIEWER
```

---

## 📦 API Endpoints

### 👤 User APIs

#### Create User

```
POST /api/users
```

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

#### Get Records (with filters + pagination)

```
GET /api/records?type=INCOME&page=1&limit=10
GET /api/records?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD
```

#### Update Record

```
PUT /api/records/:id
```

#### Delete Record

```
DELETE /api/records/:id
```

---

### 📊 Dashboard API

#### Get Summary

```
GET /api/dashboard
```

Returns:

* Total income
* Total expense
* Balance
* Category-wise breakdown
* Recent transactions (last 5)

---

## ✅ Features Implemented

* User management with roles
* Financial records CRUD operations
* Filtering (type, category, date)
* Pagination support
* Dashboard aggregation API
* Role-based access control (RBAC)
* Request validation using Joi
* Global error handling

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```
git clone <your-repo-link>
cd finance-dashboard-backend
```

### 2. Install dependencies

```
npm install
```

### 3. Configure environment variables

Create a `.env` file:

```
DATABASE_URL="postgresql://postgres:password@localhost:5432/finance_db"
```

### 4. Run database migrations

```
npx prisma migrate dev
```

### 5. Start the server

```
npm run dev
```

---

## 🧪 Testing

APIs can be tested using:

* Thunder Client (VS Code)
* Postman

Make sure to include header:

```
x-user-role: ADMIN
```

---

## ⚠️ Assumptions

* Authentication is not implemented; role is passed via headers
* Single database instance assumed
* No soft delete implemented (hard delete used)

---

## 🚀 Future Improvements

* JWT-based authentication
* Soft delete support
* Advanced analytics (monthly trends)
* API documentation using Swagger

---

## 💡 Key Highlights

* Clean layered architecture
* Strong RBAC implementation
* Real-world API design (pagination, filtering)
* Aggregation-based dashboard
* Production-level validation & error handling

---

## 👨‍💻 Author

Abhinav Tomar
