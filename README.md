# Bun Project with Webpack, Linting, and Testing

This is a **Bun** project configured with essential features for modern development.

## Features

- **Runtime**: [Bun](https://bun.sh) - A fast JavaScript all-in-one toolkit.
- **Linting**: [Biome](https://biomejs.dev) - Fast linting and formatting.
- **Testing**: [Bun Test](https://bun.sh/docs/test/runner) - Built-in fast test runner.
- **Bundling**: [Webpack](https://webpack.js.org/) - Configured for TypeScript.
- **Compression**: Gzip and Brotli compression enabled via `compression-webpack-plugin`.

## Project Structure

- `src/`: Source code (Entry point: `index.ts`).
- `tests/`: Test files.
- `dist/`: Output directory for bundled and compressed files.
- `biome.json`: Linting and formatting configuration.
- `webpack.config.js`: Webpack configuration.

## Getting Started

### Prerequisites

Ensure you have [Bun](https://bun.sh) installed.

### Installation

```bash
bun install
```

### Development Scripts

#### Linting
Check for linting errors:
```bash
bun run lint
```
Fix linting errors automatically:
```bash
bun run lint:fix
```

#### Testing
Run tests using Bun's native test runner:
```bash
bun test
```

#### Building
Bundle the application using Webpack. This will output the bundled JavaScript and compressed versions (`.gz`, `.br`) to the `dist/` directory.
```bash
bun run build
```

## Configuration Details

### Webpack & Compression
The project uses `webpack` with `ts-loader` to compile TypeScript. `compression-webpack-plugin` is configured to generate:
- **Gzip**: Standard compression.
- **Brotli**: High-performance compression.

Check `webpack.config.js` for details.

### Biome
`biome.json` is configured for linting and formatting. It serves as a faster alternative to ESLint and Prettier.
