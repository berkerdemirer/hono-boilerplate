# Hono Boilerplate with BetterAuth

A modern, secure, and scalable web application boilerplate built with Hono.js and BetterAuth.

## Features

- 🚀 Built with Hono.js - A fast, lightweight, and modern web framework
- 🔐 Authentication powered by BetterAuth
- 📦 TypeScript support out of the box
- 🗄️ Database integration with Drizzle ORM
- 📝 OpenAPI documentation support
- 🛡️ Security features:
  - CSRF protection
  - CORS configuration
  - Secure headers
  - Request ID tracking
- 🌐 Multi-language support (English, Estonian, Turkish)
- 📧 Email support with Resend
- 🧪 Testing setup with Vitest
- 📊 Code coverage reporting
- 🧹 Code formatting with Prettier
- 🔍 Linting with ESLint
- 🐶 Git hooks with Husky

## Prerequisites

- Node.js (v22 or higher)
- PostgreSQL database
- npm or yarn package manager

## Installation

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

3. Create a `.env` file with your environment variables

4. Run database migrations:

```bash
npm run db:push
```

5. Optional

If you wish, you could delete the migrations file and run `npm run db:generate` and `npm run db:migrate` to create new migrations files and then apply the migrations to your db.

## Development

Start the development server:

```bash
npm run dev
```

The server will start at http://localhost:3000

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run coverage` - Generate test coverage report
- `npm run type-check` - TypeScript type checking
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed the database

## Project Structure

```
src/
├── config/      # Configuration files
├── controllers/ # Route controllers
├── db/         # Database related files
├── middlewares/ # Custom middlewares
├── routes/     # API routes
├── templates/  # HTML templates
└── utils/      # Utility functions
```

## Notes

- If you want to use the email verification, you should set the callbackURL from the client side by initiating the verification sending action
- In order for your mails to reach, you should use verified domain as your emailFrom config under config/email.ts. Otherwise resend will block your request.
- If you want to check how this backend would work with a client app check: https://github.com/berkerdemirer/vite-react-boilerplate

## License

MIT
