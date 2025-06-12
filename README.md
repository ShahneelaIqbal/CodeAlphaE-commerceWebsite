# 🛍️ Basic E-commerce Web Application

This is a full-stack e-commerce web application built as part of my internship at **CodeAlpha**. It includes essential features like product listings, a shopping cart, user authentication, and order placement.

---

## 🚀 Features

### 🖥️ Frontend
- Built with **HTML, CSS, JavaScript**
- Product listing and product details page
- Add to cart, update quantity, and remove items
- Checkout with shipping form
- Responsive UI and feedback messages

### 🛠️ Backend (Node.js + Express)
- User **registration and login** using JWT authentication
- RESTful APIs for:
  - Products
  - Users
  - Orders
- Middleware for token verification
- Order placement with shipping details and Cash on Delivery option

### 💾 Database
- **MongoDB** for storing:
  - Users
  - Products
  - Orders

---

## 🔐 Environment Variables

> ⚠️ `.env` file is **NOT included** for security reasons.  
You must create your own `.env` file inside the `project` directory with the following variables:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
STRIPE_SECRET_KEY=your_secret_key
CLIENT_URL=your_url

---

🛠️ Installation & Running

1.Clone this repo
git clone https://github.com/yourusername/ecommerce-app.git
cd ecommerce-app

2.Install backend dependencies
npm install

3.Start the backend server
cd backend
node server.js

4.Open index.html in your browser

---

📝 Acknowledgements
This project was completed as part of my Web Development Internship at CodeAlpha.
