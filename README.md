# Express TypeScript Boilerplate

This is an Express-based backend boilerplate inspired by https://github.com/hagopj13/node-express-boilerplate and modified using TypeScript, Prisma ORM, and a testing setup (Unit and End-to-End testing).

## 📦 Features

- **TypeScript**: Full TypeScript support for better type safety.
- **Express**: Fast, minimal, and flexible Node.js web application framework.
- **Prisma ORM**: Database access and migrations.
- **ZOD**: Validation.
- **Testing**: Unit tests and E2E (End-to-End) tests with support for mocking, assertions, and running API tests.
- **Environment Configuration**: `.env` file for handling environment variables.
- **Pre-configured with Docker**: Ready to run locally with Docker Compose.
- **Winston Logger**: For logging and error handling.
- ... and more to come

---

## 🚀 Getting Started

Follow the steps below to set up the project locally:

### Prerequisites

Before getting started, make sure you have the following installed:

- **Node.js** (>= 16.x)
- **Docker**
- **Docker Compose**

## Migrations

- **Create migration file**: `npx prisma migrate dev --name file-name --create-only`
- **Execute migrations**: `npx prisma migrate deploy`
- **Update Prisma Client and generate types**: `npx prisma generate`
