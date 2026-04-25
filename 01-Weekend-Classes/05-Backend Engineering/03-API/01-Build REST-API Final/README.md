# Build REST API (Final) — Express + MongoDB

This project is a backend REST API built with **Express** and **MongoDB (Mongoose)**. It includes an authentication module with common flows like register/login, refresh token, email verification, forgot/reset password, and a protected “me” route.

---

## Tech stack

- **Runtime**: Node.js (ESM modules)
- **Framework**: Express
- **Database**: MongoDB (Mongoose)
- **Auth**: JWT (access + refresh), cookies
- **Validation**: Joi
- **Email**: Nodemailer (SMTP)
- **Dev tooling**: Nodemon
- **DB local setup**: Docker Compose (MongoDB)

---

## Folder structure (high level)

```text
01-Build REST-API Final/
  server.js
  package.json
  docker-compose.yml
  .env
  env.example
  src/
    app.js
    common/
      config/
        db.js
      dto/
      middleware/
        validate.middleware.js
      utils/
    modules/
      auth/
        auth.routes.js
        auth.controller.js
        auth.middleware.js
        dto/
        ...
      cart/
        chaicode.js   (placeholder/WIP)
```

---

## How to clone and run locally

### 1) Clone

```bash
git clone <your-repo-url>
cd "01-Weekend-Classes/05-Backend Engineering/03-API/01-Build REST-API Final"
```

### 2) Install dependencies

```bash
npm install
```

### 3) Setup environment variables

This repo includes:

- `env.example` (template)
- `.env` (your local environment — **do not commit secrets**)

Create/update `.env` based on `env.example`.

Minimum important variables used by the server:

- **Server**
  - `PORT` (server listens on this; defaults to `5000` if not set)
  - `NODE_ENV`
- **MongoDB**
  - `MONGODB_URI`
- **JWT**
  - `JWT_ACCESS_SECRET`
  - `JWT_ACCESS_EXPIRES_IN`
  - `JWT_REFRESH_SECRET`
  - `JWT_REFRESH_EXPIRES_IN`
- **SMTP (Nodemailer)**
  - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
  - `SMTP_FROM_NAME`, `SMTP_FROM_EMAIL`
- **Client**
  - `CLIENT_URL`

### 4) Start MongoDB

Recommended (Docker Compose):

```bash
docker compose up -d
```

MongoDB will be available on `localhost:27017` (see `docker-compose.yml`).

To stop MongoDB:

```bash
docker compose down
```

### 5) Run the API

Development (auto-restart):

```bash
npm run dev
```

Production:

```bash
npm start
```

On startup, the server:

- connects to MongoDB (`src/common/config/db.js`)
- starts listening on `PORT` (`server.js`)

---

## API routes

All auth routes are mounted under:

- Base path: **`/api/auth`** (see `src/app.js`)

Available endpoints:

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/refresh-token`
- `POST /api/auth/logout` (protected)
- `GET /api/auth/verify-email/:token`
- `POST /api/auth/forgot-password`
- `PUT /api/auth/reset-password/:token`
- `GET /api/auth/me` (protected)

---

## Useful scripts

From `package.json`:

- `npm run dev`: start with nodemon
- `npm start`: start with node
- `npm run db:up`: start MongoDB via Docker Compose
- `npm run db:down`: stop Docker Compose

---

## Troubleshooting

- **MongoDB connection error**:
  - ensure Docker is running
  - ensure `MONGODB_URI` matches your Mongo instance and credentials
- **Port already in use**:
  - change `PORT` in `.env`
- **Emails not sending**:
  - verify SMTP variables in `.env`

