# BrowsePing Official Website

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8)](https://tailwindcss.com/)

## Overview

The official website for BrowsePing - an open-source browser extension that transforms your solitary browsing into a vibrant social experience. This Next.js application serves as the main landing page, documentation hub, and information portal for the BrowsePing project.

Visit the live website at [browseping.com](https://browseping.com)

## Installation for Development

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/browseping/web.git
   cd web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables** (if needed)
   
   Copy the example environment file:
   ```bash
   cp .env.local.example .env.local
   ```

   Edit `.env.local` to add any required environment variables.

4. **Start the development server**
   ```bash
   npm run dev
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000)

## Available Scripts

The project includes the following npm scripts:

- **`npm run dev`**: Starts the development server with Turbopack. This enables hot reloading and fast refresh for an optimal development experience.

- **`npm run build`**: Creates an optimized production build. This compiles and optimizes all assets for deployment.

- **`npm start`**: Runs the production build locally. Use this to test the production build before deploying.

- **`npm run lint`**: Runs ESLint to check for code quality issues and enforce coding standards.

## Development Workflow

1. Run `npm run dev` to start the development server
2. Open [http://localhost:3000](http://localhost:3000) in your browser
3. Edit files in the `src/` directory - changes will be reflected immediately
4. Run `npm run lint` before committing to ensure code quality
5. Create a pull request following our [Contributing Guidelines](CONTRIBUTING.md)

## Local Development with Docker
This project provides Docker support for local development only to ensure a consistent development environment across different machines.

> Note: Docker is not used for production deployment.
Production builds and deployments are handled by Vercel.
### Prerequisites
Make sure you have the following installed:
- Docker (v20+ recommended)
- Docker Compose (comes bundled with Docker Desktop)
### Why Docker for Local Development?

Using Docker helps to:
- Avoid Node.js version mismatches
- Simplify onboarding for new contributors
- Match local development closely with the CI environment
- Run the project without manually installing dependencies
---
### Run the Project Using Docker
**Start the development server**
```
docker-compose up --build
```
This will:

- Build the Docker image
- Install dependencies inside the container
- Start the Next.js dev server
Once running, open:
```
http://localhost:3000
```
**Stop the Containers**
```
docker-compose down
```
**Clean Docker cache (if needed)**
```
docker system prune -f
```

## Project Structure

```
web/
├── src/
│   ├── app/              # Next.js App Router pages and layouts
│   ├── components/       # Reusable React components
│   └── hooks/            # Custom React hooks
├── public/               # Static assets (images, fonts, etc.)
├── .env.local.example    # Environment variables template
└── package.json          # Dependencies and scripts
```

## Building for Production

To create a production build:

```bash
npm run build
```

This will generate an optimized build in the `.next` directory. To test the production build locally:

```bash
npm start
```

## Deployment

The BrowsePing website is deployed on [Vercel](https://vercel.com), the platform created by the makers of Next.js.

For deployment instructions, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Contributing

We welcome contributions to the BrowsePing website! Whether it's fixing bugs, improving documentation, or adding new features, your help is appreciated.

Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on how to get started.

Join our community on [Discord](https://discord.gg/GdhXuEAZ) to discuss ideas and collaborate with other contributors.

## Community & Links

- **Website**: [browseping.com](https://browseping.com)
- **Discord**: [Join our community](https://discord.gg/GdhXuEAZ)
- **Twitter/X**: [@BrowsePing](https://x.com/browseping)
- **LinkedIn**: [BrowsePing Company](https://www.linkedin.com/company/browseping)
- **GitHub**: [github.com/browseping](https://github.com/browseping)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
