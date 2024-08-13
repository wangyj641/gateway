# Gateway
- A gateway for microservices and APIs

### Key Skills
- Nest.js framework
- TypeScript
- Fastify
- SWagger documentation

### Key Features
- User management
- Feishu APIs

### How to start

- Prerequisites

create Docker monoDB container
```bash
docker run --name mongodb -p 27017:27017 -d mongodb/mongodb-community-server:latest
```

Install dependencies
```bash
pnpm install
```

- Running the app

```bash
# development
pnpm run start

# watch mode
pnpm run start:dev

# production mode
pnpm run start:prod
```

- Test

```bash
# unit tests
pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```
