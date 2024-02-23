# Node.js TypeScript Express PostgreSQL Docker Boilerplate

This boilerplate provides a starting point for building a Node.js application using TypeScript, Express and PostgreSQL, containerized with Docker. It includes basic setup for development and production environments.

## Features

- Node.js Express server setup with TypeScript
- Docker and Docker Compose integration for easy development and deployment
- Basic REST API example

## Prerequisites

Before you begin, ensure you have installed the following on your development machine:

- [Node.js](https://nodejs.org/) (version 20.x or later)
- [Typescript](https://typescriptlang.org)
- [Express](https://expressjs.com) (web framework for Node.js)
- [PostgreSQL](https://www.postgresql.org/) (database)
- [Prisma](https://www.prisma.io/) (ORM)
- [Knex](https://knexjs.org/) (migrations)
- [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/install/) (for containerization)
- [Pnpm](https://pnpm.io/) (for managing dependencies)
- [SWC](https://swc.rs) (for compiling and bundling)
- [Volta](https://volta.sh) (optional) (for managing different node modules on local machine)

## Getting Started

1. **Clone the repository**

   ```
   git clone https://github.com/yigitunallar/nodejs-typescript-express-docker-boilerplate-2024.git
   cd nodejs-typescript-express-docker-boilerplate-2024
   ```

2. **Pin specific node version to the project**

   Using volta:

   ```
   volta pin node@20

   ```

3. **Install dependencies**

   Using pnpm:

   ```
   pnpm install
   ```

4. **Running the application**

   - **Development environment**

     Run the application locally:

     ```
     pnpm build
     pnpm start
     ```

     Run migrations locally:

     ```
     pnpm db:migrate
     ```

   - **With Docker**

     Build and start the container:

     ```
     docker compose up
     ```

     Activate live reloading, run this on a separate terminal:

     ```
     pnpm watch
     ```

     Run migrations inside docker:

     ```
     pnpm docker:db:migrate
     ```

     Rollback migrations inside docker:

     ```
     pnpm docker:db:migrate:undo
     ```

     Changes made to schema/codes/libs will require to run:

     ```
     pnpm rebuild:be
     ```

     Connect to the db inside docker:

     ```
     pnpm db:console
     ```

     Add seeds to the db:

     ```
     pnpm seed:dev
     ```

     Debugging:

     Debugger listens on ws://0.0.0.0:9229 inside docker. Use 'debugger;' keyword inside your code to debug on 'VS Code Debug' tab.

     Schema changes:
     Make required changes to schema.prisma file.

## API Endpoints

Describe your API endpoints here.

## Project Structure

Outline your project structure here, highlighting key directories and files.

## Testing

Explain how to run tests for your application.

## Deployment

Provide basic instructions for deploying the application to a production environment.

## Contributing

We welcome contributions! Please read our contributing guidelines before submitting pull requests.

## License

Specify the license under which your project is made available.

## Contact

Provide contact information or links to where users can get help with your project.
