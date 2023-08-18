# User accounts

## Description
User account management system with registration, authentication and account list management.
**Stack**: GraphQL, Express, Apollo Server, Prisma, PostgreSQL, JWT, Docker

## Quick start
Commands:
```shell
git clone https://github.com/KhitrovMaksim/user-accounts.git
cd user-accounts
docker compose -f docker-compose.dev.yml up -d
```
## Requirements
- Docker v24.0.0 or later
- Node.js v18.0.0 or later
- Dev environment variables:
```dotenv
# .env
PORT=3000
JWT_SECRET=super_secret
DATABASE_URL=postgresql://postgres:postgres@localhost:5433/user-accounts
```
## Stay in touch

- Author - Maksim Khitrov
- LinkedIn - [https://www.linkedin.com/in/maksim-khitrov/](https://www.linkedin.com/in/maksim-khitrov/)


## ToDo
- Docker compose for production
- Env variables for production
- Logger
- Errors handling (Exception handling, status code)
- Roles (for routs)
- Try Catch
- TypeScript
- Clients (React, React Native)
- Ci/Cd
- Docs
