# Mystic Path — Backend API

Backend REST API for the Mystic Path spiritual guidance and tarot reading website. Built with Node.js, Express, and MongoDB.

## 🌐 Live API

**Base URL:** [https://tarot-backend-4pvj.onrender.com](https://tarot-backend-4pvj.onrender.com)

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas (Mongoose ODM)
- **Authentication:** JWT + bcrypt
- **Payment:** Razorpay
- **Security:** Helmet, CORS, express-rate-limit

## 📋 API Endpoints

### Services
- `GET /api/services` — Get all services
- `GET /api/services/:slug` — Get single service
- `POST /api/services` — Create a service

### Bookings
- `GET /api/bookings` — Get all bookings
- `POST /api/bookings` — Create a booking
- `PUT /api/bookings/:id` — Update booking status (Admin only)
- `DELETE /api/bookings/:id` — Delete a booking (Admin only)

### Blog
- `GET /api/blogs` — Get all blog posts (supports `?category=` filter)
- `GET /api/blogs/:slug` — Get single blog post

### Authentication
- `POST /api/auth/signup` — Register a new user
- `POST /api/auth/login` — Login and receive JWT token

### Payment
- `POST /api/payment/create-order` — Create a Razorpay order
- `POST /api/payment/verify` — Verify payment signature

### Contact
- `POST /api/contact` — Submit a contact form message

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- MongoDB Atlas account
- Razorpay account (Test Mode)

### Installation

```bash
git clone https://github.com/harsh22102005/tarot-backend.git
cd tarot-backend
npm install
```

Create a `.env` file in the root directory:
Run the development server:

```bash
npm run dev
```

Server will run on [http://localhost:5000](http://localhost:5000).

## 📄 Related Repository

Frontend: [tarot-website](https://github.com/harsh22102005/tarot-website)

## 👤 Author

**Harsh Pratap Singh**
- GitHub: [@harsh22102005](https://github.com/harsh22102005)