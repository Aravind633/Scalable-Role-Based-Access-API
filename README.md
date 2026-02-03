# Scalable Task Management (RBAC) — Scalable REST API + React UI 

A production-ready Task Management system with JWT authentication and Role-Based Access Control (RBAC). The repository is split into two folders: `backend` (Express + MongoDB) and `client` (React + Vite + Tailwind CSS).

---

## Table of Contents

- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API docs (Swagger)](#api-docs-swagger)
- [Production readiness checklist](#production-readiness-checklist)
- [Scalability notes](#scalability-notes)
- [Contributing](#contributing)
- [License](#license)

---

##  Key Features

###  Backend (Scalable REST API)
* **Authentication**: Secure User Registration & Login using **JWT (JSON Web Tokens)** and **Bcrypt** hashing.
* **RBAC (Role-Based Access Control)**: Middleware to distinguish between `User` and `Admin` roles.
* **CRUD Operations**: Complete Create, Read, Update, and Delete functionality for Tasks.
* **API Documentation**: Integrated **Swagger UI** for testing and documenting endpoints.
* **Validation**: Robust input validation and error handling.
* **Security**: Implements security best practices (Helmet, CORS, HPP).

###  Frontend (Modern UI)
* **Tech Stack**: Built with **React (Vite)** for lightning-fast performance.
* **Styling**: **Tailwind CSS v4** for a professional, responsive design.
* **State Management**: React Hooks (`useState`, `useEffect`) for managing data.
* **Protected Routes**: Prevents unauthorized access to the Dashboard.
* **Dynamic UX**: Real-time feedback for task creation and deletion.

---

##  Tech Stack

| Component | Technology |
| :--- | :--- |
| **Frontend** | React.js (Vite), Tailwind CSS v4, Axios, React Router DOM |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas (Mongoose ODM) |
| **Auth** | JSON Web Tokens (JWT), Bcrypt.js |
| **Docs** | Swagger UI Express, Swagger JSDoc |

---

## Getting Started

### Prerequisites

- Node.js v18+ and npm
- MongoDB Atlas or a locally running MongoDB instance

### Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/your-repo-name.git
cd your-repo-name
```

### Backend (development)

1. Install dependencies and create a `.env` file:

```bash
cd backend
npm install
```

Example `.env` (put in `backend/.env`):

```env
PORT=5000
MONGO_URI=mongodb+srv://<USER>:<PASSWORD>@cluster0.mongodb.net/your_db?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_random_key_here
NODE_ENV=development
```

2. Start the server:

```bash
npm run dev
```

- Default dev server: `http://localhost:5000`

### Frontend (development)

```bash
cd ../client
npm install
npm run dev
```

- Client will usually run at: `http://localhost:5173`

## Environment Variables

Required (backend):

- `PORT` — port the server listens on (default: `5000`)
- `MONGO_URI` — MongoDB connection string (Atlas or local)
- `JWT_SECRET` — secret used to sign JWT tokens
- `NODE_ENV` — `development` or `production`

Always keep secrets out of source control; use a secrets manager for production.

### API docs (Swagger)

With backend running, visit:

```
http://localhost:5000/api-docs
```

This lets you explore and test endpoints (Register, Login, Tasks CRUD, etc.).

---

### Production readiness checklist

- Build frontend: `cd client && npm run build`
- Serve `client/dist` via a static server (NGINX) or serve from backend
- Use a process manager for backend (PM2/systemd)
- Store secrets in a secure store (Vault, AWS Secrets Manager)
- Enable HTTPS and harden headers (Helmet, HSTS, CSP)

---

### Scalability notes

- Stateless JWT-based auth enables horizontal scaling
- Add MongoDB indexes for commonly queried fields (e.g. `{ user: 1, createdAt: -1 }`)
- Modular code makes extraction into microservices straightforward

## Project Structure

```text
/
├── client/                 # React Frontend (Vite)
│   ├── src/
│   │   ├── components/     # Reusable UI components (Navbar)
│   │   ├── pages/          # Full pages (Login, Dashboard)
│   │   ├── services/       # API Axios calls
│   │   └── App.jsx         # Routing Logic
│   └── package.json
│
├── backend/                # Express Backend
│   ├── src/
│   │   ├── config/         # DB & Swagger Config
│   │   ├── controllers/    # Business Logic
│   │   ├── middlewares/    # Auth & RBAC checks
│   │   ├── models/         # Mongoose Schemas
│   │   ├── routes/         # API Endpoints
│   │   └── server.js       # Entry Point
│   └── package.json
│
└── README.md
```

