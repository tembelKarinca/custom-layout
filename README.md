# Custom Layout

This project is a web application built with Next.js 14 and TypeScript, featuring a basic layout suitable for a website, along with a multilingual structure.

## Table of Contents

- [Installation](#installation)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Development](#development)
- [Building](#building)
- [Starting](#starting)
- [Linting](#linting)

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/custom-layout.git
cd custom-layout
npm install
```

## Scripts

The following scripts are available in the `package.json`:

- **dev**: Starts the development server.
- **build**: Builds the project for production.
- **start**: Starts the production server.
- **lint**: Runs ESLint to check for linting errors.

You can run these scripts using npm:

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Dependencies

The project relies on the following dependencies:

- **classnames**: Utility for conditionally joining classNames.
- **next**: Next.js framework.
- **next-intl**: Internationalization library for Next.js.
- **react**: React library.
- **react-dom**: React DOM library.
- **sass**: CSS preprocessor.

Development dependencies include:

- **@types/node**: TypeScript types for Node.js.
- **@types/react**: TypeScript types for React.
- **@types/react-dom**: TypeScript types for React DOM.
- **eslint**: Pluggable JavaScript linter.
- **eslint-config-next**: ESLint configuration for Next.js.
- **typescript**: TypeScript language.

## Development

To start the development server, run:

```bash
npm run dev
```

This will start the server at `http://localhost:3000`.

## Building

To build the project for production, run:

```bash
npm run build
```

The output will be in the `.next` directory, ready to be deployed.

## Starting

To start the production server, run:

```bash
npm run start
```

Ensure you have built the project before starting the production server.

## Linting

To run ESLint and check for linting errors, run:

```bash
npm run lint
```

This will use the ESLint configuration specified in `eslint-config-next`.

## License

This project is licensed under the MIT License.
