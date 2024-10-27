# Ecommerce Shopping Website

An advanced e-commerce platform that allows users to browse products, add them to the cart, and proceed to purchase. This project covers all essential functionalities, from product search to order management, with an integrated sample payment gateway.

## Features

- **User Authentication:** Register and login functionality for users.
- **Product Search:** Easy search to find products by name, category, or description.
- **Shopping Cart:** Add products to the cart and manage quantities.
- **Order Management:** Place orders, view order history, and track the status of purchases.
- **Payment Integration:** Sample payment gateway for testing the purchasing process.
- **Responsive Design:** Optimized for both desktop and mobile devices.

## Technologies Used

- **Frontend:**
  - React
  - Redux (for state management)
  - Context API
  - Material UI (for user interface components)
- **Backend:**
  - Node.js
  - Express
  - MongoDB (as the database)

## Project Structure

### Frontend
The frontend is built using a professional React structure:
- **Components**: Reusable components are organized into separate folders, each handling specific parts of the UI.
- **Pages**: Distinct pages for various routes (e.g., home, product, cart, checkout) are structured for easy navigation and scalability.
- **State Management**: Redux and Context API are used to manage the global state across components.

### Backend
The backend follows a professional MVC (Model-View-Controller) structure:
- **Controllers**: Handle the business logic for each route.
- **Routes**: Each controller has its own set of routes to manage HTTP requests efficiently.
- **Database Integration**: MongoDB is used to store product details, user information, and order history.

