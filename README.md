# 📚 BookVault

A full-stack CRUD application for managing books and authors, built with React, Node.js/Express, and PostgreSQL.

## 🌐 Live Demo

- **Frontend:** https://booksvaultprajan.onrender.com
- **Backend API:** https://books-7c95.onrender.com

---

## 🛠️ Tech Stack

**Frontend**
- React 19
- Vite
- Tailwind CSS
- React Router v7
- Recharts

**Backend**
- Node.js
- Express
- PostgreSQL
- pg (node-postgres)
- dotenv
- cors

---

## 📁 Project Structure

```
BookVault/
├── frontend/         # React + Vite frontend
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── main.jsx
│   └── package.json
├── backend/          # Node.js + Express backend
│   ├── router/
│   ├── db/
│   │   ├── db.js
│   │   └── populateDB.js
│   ├── app.js
│   └── package.json
└── .gitignore
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js
- PostgreSQL installed and running

### 1. Clone the repo
```bash
git clone https://github.com/PrajanBasnet/Books.git
cd Books
```

### 2. Setup Backend
```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:
```
PORT=5000
DB_USER=your_db_user
DB_HOST=localhost
DB_NAME=bookvault
DB_PASSWORD=your_password
DB_PORT=5432
```

Seed the database:
```bash
node db/populateDB.js
```

Start the backend:
```bash
npm run dev
```

### 3. Setup Frontend
```bash
cd frontend
npm install
```

Create a `.env` file inside `frontend/`:
```
VITE_API_URL=http://localhost:5000
```

Start the frontend:
```bash
npm run dev
```

Frontend runs on `http://localhost:5173`

---

## 📦 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/dashboard` | Get stats and all books |
| GET | `/api/books` | Get all books |
| POST | `/api/books` | Add a new book |
| PUT | `/api/books/:id` | Update a book |
| DELETE | `/api/books/:id` | Delete a book |
| GET | `/api/authors` | Get all authors |
| POST | `/api/authors` | Add a new author |

---

## 🗄️ Database Schema

- **authors** — id, name
- **books** — id, title, description, published_at, price, stock, author_id
- **categories** — id, name
- **book_categories** — book_id, category_id (junction table)

---

## ☁️ Deployment

Deployed on [Render](https://render.com):
- **Frontend** → Static Site
- **Backend** → Web Service
- **Database** → PostgreSQL

---

## 👤 Author

**Prajan Basnet**
- GitHub: [@PrajanBasnet](https://github.com/PrajanBasnet)
