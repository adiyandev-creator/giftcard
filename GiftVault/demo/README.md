# GiftVault no-backend demo

This folder is a self-contained testing demo for GiftVault. It does not require PHP, MySQL, Composer, Node, Reloadly credentials, cPanel, or an installer.

## Run it

From the repository root:

```bash
cd GiftVault/demo
python3 -m http.server 4173
```

Open:

```text
http://localhost:4173
```

## What you can test

- Landing page navigation
- Store product search
- Gift card purchases using a seeded browser wallet
- Delivered order/code history
- Wallet top-up requests
- Admin approval/rejection of wallet requests
- Support ticket creation
- Notifications
- Responsive dark luxury UI

## Data storage

The demo stores all state in `localStorage` under `giftvault-demo-state`. Click **Reset demo** to restore the original seeded data.
