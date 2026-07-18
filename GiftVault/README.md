# GiftVault

GiftVault contains three runnable tracks:

1. `demo/` — a no-backend browser demo for quick testing.
2. `frontend/` — React 19 + Vite customer/admin UI scaffold.
3. `backend-node/` — enterprise Node.js + Express + PostgreSQL + Prisma REST API for the newer SaaS architecture.
4. `backend/` — legacy PHP 8.3/cPanel API scaffold retained for shared-hosting experiments.

## Fast demo

```bash
cd GiftVault/demo
python3 -m http.server 4173
```

Open `http://localhost:4173`.

## Enterprise Node API

```bash
cd GiftVault/backend-node
cp .env.example .env
npm install
npx prisma generate
npx prisma migrate dev --name init
node prisma/seed.js
npm run dev
```

API base URL: `http://localhost:8080/api/v1`.
Swagger UI: `http://localhost:8080/api/docs`.

## React frontend

```bash
cd GiftVault/frontend
npm install
VITE_API_URL=http://localhost:8080/api/v1 npm run dev
```

## Legacy PHP/cPanel path

1. Import `backend/database.sql` into MySQL.
2. Copy `backend/.env.example` to environment variables in cPanel or Apache config.
3. Run `composer install` in `backend`.
4. Run `npm install && npm run build` in `frontend` and upload `dist` to public web root.
5. Point API requests to `/backend/api` and delete `/backend/install` after setup.
