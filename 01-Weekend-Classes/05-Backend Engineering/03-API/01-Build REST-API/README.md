# REST API Development Project

Welcome to the **Build REST-API** project. This project is a comprehensive backend implementation using Node.js, Express, and Mongoose, focusing on a modular and scalable architecture.

## 🚀 Overview

This project serves as a robust foundation for building RESTful APIs. It implements modern backend practices, including:
- **Modular Folder Structure**: organized by features (auth, cart, etc.).
- **Common Utilities**: centralized error handling and response formatting.
- **Middleware-based Validation**: using Joi for schema validation.
- **JWT Authentication**: secure user management and access control.

---

## 🛠️ Tech Stack

- **Runtime**: Node.js (ES Modules)
- **Framework**: Express.js
- **Database**: MongoDB (via Mongoose)
- **Validation**: Joi
- **Security**: JWT (JsonWebToken) & Dotenv

---

## 📂 Project Structure Explained

Here is a detailed breakdown of every directory and key file in the project.

### Root Directory
- **`server.js`**: The entry point of the application. It handles database connection and starts the Express server.
- **`.env`**: Stores sensitive configuration like database URLs and secret keys.
- **`.env.example`**: A template for required environment variables.
- **`package.json`**: Defines project dependencies and metadata.
- **`src/`**: Contains the core source code of the application.

### `src/` Directory
- **`app.js`**: Initializes the Express application instance.
- **`common/`**: Contains shared logic used across multiple modules.
- **`modules/`**: Contains feature-specific logic (e.g., Auth, Cart).

### `src/common/` (Shared Layer)
- **`config/db.js`**: Database connection logic using Mongoose.
- **`middleware/`**: Shared Express middlewares (e.g., `validate.middleware.js`).
- **`utils/`**: Helper classes and functions:
  - `api-error.js`: custom class for standardized error reporting.
  - `api-response.js`: helper for consistent success responses.
  - `jwt.utils.js`: logic for generating and verifying auth tokens.
- **`dto/`**: Data Transfer Objects for standardized data structures.

### `src/modules/` (Feature Layer)
Each module (like `auth` or `cart`) follows a clean architecture pattern:
- **`*.model.js`**: Defines the Mongoose schema (User, Product, etc.) and database interactions.
- **`*.service.js`**: The most important layer. It contains the **Business Logic**, such as password hashing, token generation, and database queries.
- **`*.controller.js`**: Orchestrates the flow. It takes user input from the request, calls the service, and sends back the standardized response.
- **`*.routes.js`**: Maps URLs (like `/api/v1/auth/login`) to specific controller methods.
- **`*.middleware.js`**: Handles module-specific security, like checking if a user is an 'admin' before allowing access to certain routes.

---

## 🔐 Auth Workflow Breakdown

Since the Authentication module is the core of this API, here is its detailed logic flow:

1. **Registration**: Validates input -> Checks for existing email -> Hashes temporary tokens -> Creates User record.
2. **Login**: Finds user -> Validates password -> Generates **Access Token** (short-lived) and **Refresh Token** (long-lived) -> Saves hashed refresh token in DB for security.
3. **Token Refresh**: Takes a valid refresh token -> Verifies it against the database record -> Issues a new access token.
4. **Security**: Uses SHA-256 for hashing sensitive tokens and standard JWT for identifying users.

---

## 📝 Key Code Explanations (Line-by-Line Logic)

### `server.js` (The Heart)
- **Line 1 (`import "dotenv/config"`)**: Reads the `.env` file first so that all other files can access your database secrets and ports.
- **Line 3 (`import connectDB ...`)**: Imports the database configuration. We do this at the start because without a database, the API cannot function.
- **Line 8 (`const start = async () => { ... }`)**: An asynchronous wrapper that ensures the DB is connected (`await connectDB()`) *before* the server starts listening (`app.listen`).

### `src/common/utils/api-error.js`
This project uses a custom `ApiError` class. Instead of returning generic 500 errors, we can use `throw ApiError.notFound("User not found")`. This makes the code much cleaner and ensures the user always gets a helpful error message and the correct status code.

---

## 🏗️ Getting Started

### Prerequisites
- Node.js (LTS version)
- MongoDB (Local or Atlas)

### Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Copy `.env.example` to `.env`.
   - Fill in your `MONGODB_URI` and `JWT_SECRET`.
4. Run the application:
   ```bash
   node server.js
   ```

---

## 🛡️ Best Practices Implemented
- **Layered Architecture**: Separation of concerns between Routes, Controllers, and Services.
- **Centralized Error Handling**: Standardized error responses across all endpoints.
- **Environment Safety**: NEVER commit your `.env` file! Always use `env.example`.
- **Validation**: Strict input validation using Joi to prevent malicious or malformed data.
