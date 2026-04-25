# Auth Service (TypeScript) — Express + Postgres + Drizzle

This project is a small authentication service built with **Express (TypeScript)** and **PostgreSQL** using **Drizzle ORM**.

It provides signup/signin and a protected `/me` route using a Bearer token in the `Authorization` header.

---

## Tech stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express
- **Database**: PostgreSQL
- **ORM / Migrations**: Drizzle ORM + drizzle-kit
- **Validation**: Zod
- **Auth**: JWT (token returned on sign-in)
- **Local DB**: Docker Compose (Postgres)

---

## Folder structure (high level)

```text
02-Auth-TS/
  src/
    index.ts                 (http server entry)
    app/
      index.ts               (createApplication)
      middleware/
        auth-middleware.ts    (Bearer token parsing + auth guard)
      auth/
        routes.ts
        controller.ts
        models.ts
        utils/
          token.ts
    db/
      index.ts               (drizzle client)
      schema.ts              (users table)
  drizzle.config.js
  drizzle/                   (generated migrations/artifacts)
  docker-compose.yml
  tsconfig.json
  package.json
  pnpm-lock.yaml
  .env
  dist/                      (compiled output)
```

---

## How to clone and run locally

### 1) Clone

```bash
git clone <your-repo-url>
cd "01-Weekend-Classes/05-Backend Engineering/03-API/02-Auth-TS"
```

### 2) Install dependencies

This project uses **pnpm**.

```bash
pnpm install
```

If you don’t have pnpm:

```bash
npm i -g pnpm
```

### 3) Start PostgreSQL (Docker Compose)

```bash
docker compose up -d
```

Defaults from `docker-compose.yml`:

- host: `localhost`
- port: `5432`
- user: `postgres`
- password: `postgres`
- database: `chaicode`

### 4) Configure environment variables

Create/verify `.env` with:

```env
DATABASE_URL=postgres://postgres:postgres@localhost:5432/chaicode
```

This value is used by:

- `src/db/index.ts` (runtime DB connection)
- `drizzle.config.js` (migrations)

### 5) Run migrations (Drizzle)

```bash
pnpm db:generate
pnpm db:migrate
```

Optional (DB UI):

```bash
pnpm studio
```

### 6) Run the server

Dev mode (rebuild + run on success):

```bash
pnpm dev
```

Build + start:

```bash
pnpm build
pnpm start
```

> Note: the server port is currently **hard-coded to `8080`** in `src/index.ts`.

---

## API routes

Base URL: `http://localhost:8080`

- `GET /` → welcome message

Auth routes (base: `/auth`):

- `POST /auth/sign-up`
- `POST /auth/sign-in`
- `GET /auth/me` (protected)

### Authentication

- Send the token in the header:
  - `Authorization: Bearer <token>`

The token is currently signed with a fixed secret in `src/app/auth/utils/token.ts` (for learning/dev purposes).

---

## Useful scripts

From `package.json`:

- `pnpm dev`: run TypeScript watcher and start server on success
- `pnpm build`: compile to `dist/`
- `pnpm start`: start compiled server (`node dist/index`)
- `pnpm db:generate`: generate drizzle migrations
- `pnpm db:migrate`: apply migrations
- `pnpm studio`: open drizzle studio

---

## Troubleshooting

- **DB connection fails**:
  - confirm Docker is running
  - confirm Postgres container is up (`docker compose ps`)
  - confirm `.env` has a valid `DATABASE_URL`
- **`pnpm dev` doesn’t start**:
  - ensure dependencies are installed (`pnpm install`)
  - ensure `dist/` is being generated (watch output)
- **401 on `/auth/me`**:
  - include `Authorization: Bearer <token>` header from `/auth/sign-in`

