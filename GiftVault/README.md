# GiftVault

GiftVault is a React 19 + PHP 8.3 gift card marketplace for cPanel/Apache hosting. It includes wallet funding, JWT auth, product catalog, order APIs, admin review flows, Reloadly integration hooks, SQL schema, and installer.

## Deploy
1. Import `backend/database.sql` into MySQL.
2. Copy `backend/.env.example` to environment variables in cPanel or Apache config.
3. Run `composer install` in `backend`.
4. Run `npm install && npm run build` in `frontend` and upload `dist` to public web root.
5. Point API requests to `/backend/api` and delete `/backend/install` after setup.
