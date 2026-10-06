# 🍳 SmartChef (Servd) — AI Cooking Assistant & Smart Pantry

SmartChef is a modern, full-stack AI-powered culinary companion designed to turn your leftover ingredients into culinary masterpieces. By combining Google Gemini AI, Strapi CMS, and Next.js, SmartChef can scan fridge photos, track your pantry, suggest personalized recipes with nutrition breakdowns, and generate printable recipe PDFs.

---

## 🌟 Key Features

- **📸 AI Pantry Scanner**: Snap or upload a photo of your fridge or pantry. Powered by **Google Gemini Vision**, SmartChef automatically detects your ingredients.
- **🧑‍🍳 AI Recipe Generator**: Generate creative recipes tailored to what you already have in stock, complete with step-by-step cooking steps, cooking times, difficulty levels, and nutritional analysis.
- **🔄 Smart Ingredient Substitutions**: Need a missing ingredient? AI suggests practical substitutes on the fly.
- **📄 Printable PDF Export**: Export generated recipes to clean, beautifully formatted PDF documents using `@react-pdf/renderer`.
- **🌍 TheMealDB Integration**: Discover recipe ideas by world cuisines, categories, and a daily featured "Recipe of the Day".
- **🔐 Clerk Authentication & Tiered Plans**: Seamless auth via Clerk with support for Free and Pro Chef subscription tiers.
- **🛡️ Rate Limiting & Bot Protection**: Uses **Arcjet** to enforce tier-based token bucket limits on AI generations and pantry scans.
- **🖼️ Automatic Recipe Imagery**: Integrates with the **Unsplash API** to provide food photography for generated meals.
- **💾 Strapi 5 Headless CMS**: Manages recipes, user profiles, pantry inventory, and persistent application state connected to a **Neon PostgreSQL** database.

---

## 🏗️ Project Architecture

```
SmartChef/
├── frontend/                # Next.js 16 Client & Server Actions
│   ├── actions/             # Server actions (Gemini AI, Pantry, MealDB)
│   ├── app/                 # Next.js App Router (Landing, Dashboard, Pantry, Recipes)
│   ├── components/          # Reusable UI components & dialogs
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Arcjet config, Clerk user sync, utility functions
│   ├── public/              # Static assets and brand logos
│   ├── proxy.js             # Clerk authentication route proxy / middleware
│   └── package.json
│
├── backend/                 # Strapi 5 Headless CMS
│   ├── config/              # Server, database, and plugin configuration
│   ├── database/            # Database migrations
│   ├── src/                 # Content types, controllers, and services
│   └── package.json
│
└── README.md
```

---

## 🛠️ Tech Stack

### **Frontend**
- **Framework**: [Next.js 16](https://nextjs.org/) (Turbopack, App Router)
- **Language & Runtime**: React 19, JavaScript (ESM)
- **Styling**: Tailwind CSS v4, Lucide Icons, Neobrutalism UI design
- **AI & Vision**: [@google/generative-ai](https://www.npmjs.com/package/@google/generative-ai) (Google Gemini API)
- **Authentication**: [@clerk/nextjs](https://clerk.com/) (Core 3)
- **Security & Rate Limiting**: [@arcjet/next](https://arcjet.com/)
- **Document Generation**: [@react-pdf/renderer](https://react-pdf.org/)
- **Image Sourcing**: [Unsplash API](https://unsplash.com/developers)
- **External Recipe Data**: [TheMealDB API](https://www.themealdb.com/api.php)

### **Backend**
- **CMS**: [Strapi 5](https://strapi.io/)
- **Database**: [PostgreSQL (Neon Serverless)](https://neon.tech/)
- **Storage**: AWS S3 compatible object storage

---

## ⚙️ Environment Variables

### **1. Frontend (`frontend/.env`)**
Create or verify `frontend/.env` with the following variables:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Database Connection (Neon Postgres)
DATABASE_URL="postgresql://<user>:<password>@<host>/<database>?sslmode=require"
DATABASE_URL_POOLED="postgresql://<user>:<password>@<pooler-host>/<database>?sslmode=require"

# Strapi Backend
NEXT_PUBLIC_STRAPI_URL="http://localhost:1337"
STRAPI_API_TOKEN="your_strapi_api_token"

# AI & APIs
GEMINI_API_KEY="your_google_gemini_api_key"
UNSPLASH_ACCESS_KEY="your_unsplash_access_key"

# Security & Rate Limiting
ARCJET_KEY="your_arcjet_api_key"

# S3 / Cloud Storage (Optional)
AWS_ENDPOINT_URL_S3="https://<bucket>.storage.<region>.aws.neon.tech"
AWS_ACCESS_KEY_ID="your_aws_key_id"
AWS_SECRET_ACCESS_KEY="your_aws_secret"
AWS_REGION="us-east-2"
```

### **2. Backend (`backend/.env`)**
Create or verify `backend/.env` with the following variables:

```env
HOST=0.0.0.0
PORT=1337

# Strapi Secrets
APP_KEYS=key1,key2,key3,key4
API_TOKEN_SALT=salt
ADMIN_JWT_SECRET=secret
JWT_SECRET=secret
TRANSFER_TOKEN_SALT=salt
ENCRYPTION_KEY=key

# Database (PostgreSQL)
DATABASE_CLIENT=postgres
DATABASE_HOST=<host>
DATABASE_PORT=5432
DATABASE_NAME=<dbname>
DATABASE_USERNAME=<username>
DATABASE_PASSWORD=<password>
DATABASE_SSL=true
```

---

## 🚀 Getting Started

### **Prerequisites**
- **Node.js**: `v20.x` or later (tested on `v22.x`)
- **npm**: `v10.x` or later

### **1. Installation**

Install all dependencies in one command from the project root:

```bash
npm run install:all
```

Or install individually:

```bash
# Root & monorepo tools
npm install

# Backend & frontend
npm --prefix backend install
npm --prefix frontend install
```

### **2. Running the Development Servers**

You can now run **both servers together with a single command** from the root folder:

```bash
npm run dev
```

This starts both:
- **Backend (Strapi)** on [http://localhost:1337](http://localhost:1337) (Admin: [http://localhost:1337/admin](http://localhost:1337/admin))
- **Frontend (Next.js)** on [http://localhost:3000](http://localhost:3000)

Alternatively, run each service individually:

```bash
npm run dev:backend    # Starts Strapi only
npm run dev:frontend   # Starts Next.js only
```

---

## 📖 Main Pages & Routes

| Route | Description |
| :--- | :--- |
| `/` | Landing page showcasing features, live stats, and pricing tiers |
| `/sign-in` & `/sign-up` | Clerk authentication pages |
| `/dashboard` | User kitchen dashboard, daily meal inspiration, and categories |
| `/recipes` | Saved and generated custom recipes |
| `/pantry` | Interactive inventory tracker & AI camera/image fridge scanner |
| `http://localhost:1337/admin` | Strapi CMS administrator dashboard |

---

## 🤝 Contributing & License

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m "feat: add amazing feature"`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Created with 💗 by Nabanita.
