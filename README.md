# 🔐 Everything JWT – Fullstack Auth App

A full-stack authentication app built using **Node.js**, **React**, **TypeScript**, **Vite**, and
**TailwindCSS**. Features include:

- 🔒 JWT-based authentication
- 👤 Role-based route protection (Admin, User)
- ✅ Public, Private & Admin routes
- 🔁 Login/logout functionality
- 🔧 Custom backend using Node.js (no Express)
- 🌐 CORS, middleware, and secure token handling

---

## 🛠️ Tech Stack

- ⚛️ React + TypeScript + Vite (Frontend)
- 🧠 Redux Toolkit for state management
- 🎨 TailwindCSS for styling
- 🔙 Node.js (with `http` module, no Express)
- 🔐 JSON Web Tokens (JWT)
- 📦 Yarn as the package manager

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/AdarshJaso/everything-jwt.git
cd everything-jwt

# Root (React frontend)
yarn install

# Server (Node.js backend)
cd server
yarn install

# TSX to run TypeScript in Node.js without compiling
yarn global add tsx

# Nodemon for auto-restarting server
yarn global add nodemon

# Start backend from /server folder
cd server
yarn dev

# Start frontend from root
yarn dev
```
