# IMEISTATION no-backend demo

This folder is a self-contained professional testing demo for IMEISTATION/GiftVault. It does not require PHP, Node, MySQL, PostgreSQL, Composer, Prisma, Reloadly credentials, cPanel, or an installer.

## Run it

From the repository root:

```bash
cd GiftVault/demo
python3 -m http.server 4173
```

Customer site:

```text
http://localhost:4173/index.html
```

Hidden admin portal:

```text
http://localhost:4173/admin.html
```

In production this maps to either `admin.imeistation.com` or `imeistation.com/admin`. The customer navigation intentionally does not expose an Admin link.

## Customer pages available for testing

Home, Store, Categories, Category Details, Product Details, Pricing, Features, FAQ, About, Contact, Privacy Policy, Terms, Refund Policy, Support, Status Page, Announcements, Blog, Login, Register, Forgot Password, Reset Password, Email Verification, Dashboard, Wallet, Deposit Funds, Transaction History, Orders, Order Details, Favorites, Notifications, Support Tickets, Create Ticket, Messages, Profile, Security, API Keys, Referral Program, Downloads, Invoices, Settings, Reseller Dashboard, Customer Management, API Access, Pricing Rules, Referral Earnings, Reports, 404-style fallback, and Maintenance.

## Admin pages available for testing

Dashboard, Users, Roles, Permissions, Wallet Management, Deposits, Transactions, Products, Categories, Brands, Suppliers, Supplier APIs, Orders, Reports, Analytics, Tickets, Announcements, Coupons, Promotions, Currencies, Taxes, Email Templates, Notifications, Activity Logs, Audit Logs, Cron Jobs, API Logs, System Settings, Security Center, Database Backup, Developer Tools, System Health, Server Status, Cache Manager, Maintenance Mode, and Error Logs.

## Test flows

- Search products in Store.
- Open Product Details.
- Buy a digital product with the seeded wallet.
- View delivered codes in Orders.
- Submit a wallet deposit request.
- Open `admin.html#deposits` directly and approve or reject the deposit.
- Create support tickets.
- Toggle light/dark mode.

## Data storage

The demo stores all state in `localStorage` under `imeistation-demo-state`. Clear browser storage to reset the full demo state.
