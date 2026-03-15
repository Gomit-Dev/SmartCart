# SmartCart – Smart E-Commerce Platform

<<<<<<< HEAD
=======
![React](https://img.shields.io/badge/Frontend-React-blue)
![Node](https://img.shields.io/badge/Backend-Node.js-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-darkgreen)

>>>>>>> d79a388eb48b5c1b16e817e172b5bbc7216e6d63
A modern **full-stack e-commerce web application** built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**.
SmartCart allows users to browse products, apply smart filters, manage shopping carts, and place orders through a responsive and scalable interface.

The project demonstrates **real-world full-stack development practices**, including modular architecture, REST API integration, authentication, and state management.

---

# Live Demo

Frontend:
`https://your-demo-link.com`

Backend API:
`https://your-api-link.com`

---

# Features

### User Features

* Browse products
* Smart product search
* Category & price filters
* Product details page
* Add to cart
* Wishlist system
* Secure authentication
* Checkout system
* Order history

### Admin Features

* Add / update / delete products
* Manage orders
* Inventory management
* Dashboard analytics

### Smart Features

* Recommended products
* Recently viewed products
* Smart filtering system
* Responsive UI

---

# Tech Stack

### Frontend

* React.js
* React Router
* Tailwind CSS
* Axios
* Redux Toolkit / Context API

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication

### Tools

* Git & GitHub
* Postman
* Cloudinary (optional for image storage)

---

# Project Structure

```
smartcart
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── hooks
│   │   ├── context
│   │   ├── services
│   │   └── utils
│
└── server
    ├── controllers
    ├── models
    ├── routes
    ├── middleware
    └── config
```

---

# Installation

### 1. Clone the repository

```
<<<<<<< HEAD
git clone https://github.com/yourusername/smartcart.git
=======
git clone https://github.com/Gomit-Dev/SmartCart.git
>>>>>>> d79a388eb48b5c1b16e817e172b5bbc7216e6d63
```

---

### 2. Navigate to the project folder

```
cd smartcart
```

---

### 3. Install dependencies

Frontend:

```
cd client
npm install
```

Backend:

```
cd server
npm install
```

---

### 4. Setup environment variables

Create a `.env` file inside the **server folder**.

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

---

### 5. Run the project

Start backend:

```
cd server
npm run dev
```

Start frontend:

```
cd client
npm run dev
```

---

# API Endpoints

### Authentication

```
POST /api/auth/register
POST /api/auth/login
```

### Products

```
GET /api/products
GET /api/products/:id
POST /api/products
PUT /api/products/:id
DELETE /api/products/:id
```

### Orders

```
POST /api/orders
GET /api/orders
```

---

# Screenshots

Add screenshots of your application here.

Example:

```
/screenshots/homepage.png
/screenshots/product-page.png
/screenshots/cart.png
```

---

# Future Improvements

* Payment gateway integration (Stripe / Razorpay)
* Admin dashboard analytics
* Product recommendation system
* Real-time order tracking
* Review & rating system

---

# Learning Outcomes

This project demonstrates:

* Full-stack application architecture
* REST API development
* Authentication with JWT
* State management in React
* MongoDB data modeling
* Clean folder structure and modular code

---

# Author

Gomit Saha

GitHub:
`https://github.com/Gomit-Dev`

LinkedIn:
`https://linkedin.com/in/gomit-saha/`

---

# License

This project is licensed under the **MIT License**.

---
