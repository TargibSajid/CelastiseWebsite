# CELASTISE Backend (NestJS + MySQL)

## 1) Import database
Open MySQL and import:

```bash
mysql -u root -p < database/init.sql
```

If you already have the base database, import only:

```bash
mysql -u root -p your_database_name < database/celastise_new_products_patch.sql
```

## 2) Configure env
Copy `.env.example` to `.env` and update MySQL credentials.

## 3) Run backend
```bash
npm install
npm run start:dev
```

Default API: http://localhost:5000/api

## Main APIs
- `GET /api/products`
- `GET /api/products/featured`
- `GET /api/products/:id`
- `GET /api/products/:id/recommended`
- `POST /api/auth/signup`
- `POST /api/auth/login`
- `POST /api/orders`
