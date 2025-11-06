# 💬 Real-Time Chat App

A modern real-time chat application built with **MongoDB**, **Express**, **React**, and **Node.js**, featuring **JWT authentication**, **Socket.IO** for live messaging, and **Cloudinary** image uploads.

🌐 **Live Demo:** [View Deployed App](https://chat-app-eyto.onrender.com)

---

## 🚀 Features

✅ **User Authentication** – Register, login, and logout using JWT tokens  
✅ **Profile Picture Upload** – Upload and update avatars via Cloudinary  
✅ **Real-Time Messaging** – Powered by Socket.IO for instant chat updates  
✅ **Online Users Tracking** – See who’s currently online  
✅ **Secure Passwords** – Hashed with bcryptjs  
✅ **Responsive Frontend** – Clean and modern UI built with React + Vite  
✅ **RESTful API** – Modular, maintainable Express routes and controllers  

---

## 🧠 Tech Stack

### 🖥️ Frontend:
- ⚛️ **React (Vite)**
- ⚡ **Zustand** – state management
- 🍞 **React Toastify** – notifications
- 🔄 **Axios** – API communication
- 🎨 **Tailwind CSS** – responsive design

### 🧩 Backend:
- 🧠 **Node.js + Express.js**
- 🔐 **JWT** for authentication
- 💾 **MongoDB + Mongoose**
- 💬 **Socket.IO** for real-time communication
- ☁️ **Cloudinary** for image uploads
- 🔑 **bcryptjs** for password hashing

---

## ⚙️ Installation

### 1️⃣ Clone the Repository

- git clone https://github.com/yourusername/chat-app.git
- cd chat-app
### 2️⃣ Backend Setup
bash
Copy code
- cd backend
- npm install

Create a .env file inside /backend:

env
Copy code
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
NODE_ENV=development

Run the backend:
bash
Copy code
- npm run dev
### 3️⃣ Frontend Setup
bash
Copy code
- cd ../frontend
- npm install

Create a .env file inside /frontend:

env
Copy code
VITE_API_URL=http://localhost:5001/api
Run the frontend:

bash
Copy code
npm run dev
🧩 Database Seeding
To add demo users:

bash
Copy code
node src/seeds/user.seed.js
This will clear existing users and create new demo accounts with hashed passwords and profile pictures.

## 💬 Real-Time Communication
The app uses Socket.IO for instant message delivery:

Users connect via their user ID

Online users are tracked in memory

When one user sends a message, it instantly appears for the receiver

## 🔒 Authentication Flow
User registers or logs in

Server issues a JWT token stored in HTTP-only cookies

Protected routes check for valid tokens via middleware

Logout clears the cookie safely

## 📸 Screenshots

### 🏠 Home Page
![Home Page](./assets/Home%20Page.png)

### 🔑 Login Page
![Login Page](./assets/Login%20Page.png)

### 📝 Sign Up Page
![Sign Up Page](./assets/Sign%20Up%20Page.png)

### 💬 Chat Sample
![Chat Sample](./assets/Chat%20Sample.png)

### 👤 Profile Page
![Profile Page](./assets/Profile%20Page.png)

### ⚙️ Settings Page
![Settings Page](./assets/Settings%20Page.png)

