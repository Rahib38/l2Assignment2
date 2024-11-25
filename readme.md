# Bike Store Management System 🚲

A full-stack application built with TypeScript, Express.js, and MongoDB to manage bike inventory, orders, and revenue calculation seamlessly.

## 🚀 Live Demo

Bike Store Live Application

([live URL ](https://l2-assignment2-lovat.vercel.app/))

## ✨ Features

- Product Management:
  - Create, read, update, and delete bikes (CRUD).
  - Filter bikes by name, category, or brand.
- Order Management:
  - Place an order for bikes.
  - Automatic inventory update after order placement.
  - Handle insufficient stock gracefully.
- Revenue Calculation:
  - Aggregate total revenue from orders.
- Error Handling:
  - Custom error messages for validation, missing resources, or server issues.

## 🛠 Technologies Used

- Backend: Node.js, Express.js
- Database: MongoDB, Mongoose
- Language: TypeScript
- Tools: Postman, Git, Visual Studio Code
- Hosting: (Vercel)

## 🚀 Getting Started

### Prerequisites

- Node.js installed (v22)
- MongoDB installed or access to a cloud MongoDB instance (e.g., MongoDB Atlas).
- Git installed.

### Installation

1. Clone the repository:

```tsx
git clone https://github.com/your-username/bike-store.git
cd l2Assignment2
```

2. Install dependencies:

```tsx
  npm install
```

3. Set up environment variables:
   Create a .env file in the root directory and add the following variables:

```tsx
PORT = 5000;
MONGO_URI = your_mongodb_uri;
```

### Running Locally

1. Start the server:

```tsx
npm run start:dev
```

2. Visit the application:
   Open http://localhost:5000 in your browser.

📖 API Documentation

1. Create a Bike
   Endpoint: POST /api/create-bike
   Request Body:

```tsx
 {
  "name": "Xtreme Mountain Bike",
  "brand": "Giant",
  "price": 1200,
  "category": "Mountain",
  "description": "High-performance bike for tough terrains.",
  "quantity": 50,
  "inStock": true
}
```

Response:

```tsx
 {
  "message": "Bike created successfully",
  "status": true,
  "data": { /* Created Bike Details */ }
}
```

2. Get All Bikes
   Endpoint: GET /api/products

3. Get a Bike by ID
   Endpoint: GET /api/products/:bikeId

4. Update a Bike
   Endpoint: PUT /api/products/:bikeId

5. Delete a Bike
   Endpoint: DELETE /api/products/:bikeId

6. Place an Order
   Endpoint: POST /api/orders/create-order

7. Get Total Revenue
   Endpoint: GET /api/orders

(For detailed API documentation, refer to the /docs directory or API testing collection shared.)

## 🙌 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## 💬 Questions?

If you have any questions, feel free to contact me at nadimulrahib38@gmail.com
