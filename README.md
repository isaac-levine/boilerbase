# Boilerbase

<!-- ![Boilerbase Logo](https://github.com/isaac-levine/boilerbase/assets/80065258/d9dcdfa5-1eae-4f64-8eb1-3afc33422157) -->
<div style="display: flex; align-items: center; gap: 24px; margin-bottom: 24px">
  <img src="https://github.com/isaac-levine/boilerbase/assets/80065258/d9dcdfa5-1eae-4f64-8eb1-3afc33422157" alt="Boilerbase Logo" width="150">
  <p style="flex: 1">Free and open-source boilerplate generator and community marketplace. Generate custom SaaS boilerplates or explore community-reviewed templates.</p>
</div>

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](https://github.com/isaac-levine/boilerbase/issues)

## Features

- 🚀 **Smart Generation**: Create custom boilerplates based on your exact needs
- 🔍 **Transparency**: Community reviews, ratings, and public discussions
- 💻 **Modern Stack**: Next.js, TypeScript, and best practices built-in
- 🤝 **Community-Driven**: Open marketplace for sharing and discovering templates

## Documentation

- [Getting Started](docs/getting-started.md)
- [Configuration Guide](docs/configuration.md)
- [API Reference](docs/api-reference.md)
- [Contributing Guide](CONTRIBUTING.md)

## Quick Start

```bash
# Clone the repository
git clone https://github.com/isaac-levine/boilerbase.git

# Install dependencies
cd boilerbase
npm install

# Set up environment variables
cp .env.example .env.local

# Set up database
npm run db:migrate

# Start development server
npm run dev
```

## System Requirements

- Node.js 18+
- PostgreSQL 14+
- npm or yarn

## Tech Stack

- **Framework:** Next.js 14, React 18
- **Language:** TypeScript
- **Database:** PostgreSQL, Prisma
- **Authentication:** NextAuth.js
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## Development

```bash
# Run tests
npm test

# Run linter
npm run lint

# Run type checking
npm run type-check

# Build for production
npm run build
```

## Contributing

We love your input! Check out our [Contributing Guide](CONTRIBUTING.md) for guidelines.

### Development Process

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Make changes
4. Run tests (`npm test`)
5. Commit changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## Community

- Submit feature requests on our [Feature Board](https://boilerbase.featurebase.app)
- Join discussions in [GitHub Discussions](https://github.com/isaac-levine/boilerbase/discussions)
- Follow updates on [Twitter](https://twitter.com/isaaclvn)

## License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

## Acknowledgments

Thanks to all our [contributors](https://github.com/isaac-levine/boilerbase/graphs/contributors) who help improve Boilerbase!
