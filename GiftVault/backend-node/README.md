# GiftVault Enterprise Node API

Production-oriented Node.js/Express/PostgreSQL API for GiftVault. It uses MVC-style controllers, repository-ready data access, reusable services, Prisma ORM, JWT authentication, bcrypt passwords, multer uploads, Helmet, rate limiting, Winston logging, node-cron jobs, OpenAPI docs and a supplier adapter architecture.

## Quick start

```bash
cd GiftVault/backend-node
cp .env.example .env
npm install
npx prisma generate
npx prisma migrate dev --name init
node prisma/seed.js
npm run dev
```

API base URL:

```text
http://localhost:8080/api/v1
```

Swagger UI:

```text
http://localhost:8080/api/docs
```

Seed owner login:

```text
owner@giftvault.test / Password123!
```

## cPanel deployment

1. Create a PostgreSQL database in cPanel.
2. Set all variables from `.env.example` in Node.js Application Manager.
3. Run `npm install --omit=dev` and `npx prisma migrate deploy` over SSH.
4. Set startup file to `src/server.js`.
5. Use PM2 if available: `pm2 start src/server.js --name giftvault-api`.

## Architecture

- `controllers`: HTTP request handling.
- `services`: business logic such as authentication, pricing and suppliers.
- `suppliers`: pluggable supplier adapters; Reloadly is the first implementation.
- `middleware`: auth, validation, uploads and errors.
- `prisma/schema.prisma`: normalized PostgreSQL schema with roles, permissions, users, wallets, products, orders, support, notifications, logs, settings and cron jobs.
