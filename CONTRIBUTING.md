# Contributing to BrowsePing Website

Thank you for your interest in contributing to the BrowsePing website! This document provides guidelines for contributing to our Next.js web application. Please read through these guidelines carefully before submitting your contribution.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
- [Branch Naming Conventions](#branch-naming-conventions)
- [Commit Message Conventions](#commit-message-conventions)
- [Pull Request Process](#pull-request-process)
- [Code Review Guidelines](#code-review-guidelines)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors. Be professional, considerate, and constructive in all interactions.

## How to Contribute

1. **Fork the repository** to your own GitHub account
2. **Clone your fork** locally
3. **Create a new branch** following our branch naming conventions
4. **Make your changes** with clear, descriptive commits
5. **Test thoroughly** to ensure nothing breaks
6. **Push to your fork** and submit a pull request
7. **Respond to feedback** during the code review process

## Branch Naming Conventions

**⚠️ IMPORTANT**: Always create a new branch for your contribution. Never commit directly to `main` or `develop`.

Use the following prefixes for your branch names:

- `feature/` - For new features or enhancements
  - Example: `feature/add-testimonials-section`
  - Example: `feature/improve-hero-animation`

- `fix/` - For bug fixes
  - Example: `fix/mobile-navigation-overflow`
  - Example: `fix/broken-contact-form`

- `hotfix/` - For urgent production fixes
  - Example: `hotfix/critical-seo-meta-tags`

- `refactor/` - For code refactoring without changing functionality
  - Example: `refactor/simplify-page-components`

- `docs/` - For documentation changes
  - Example: `docs/update-readme`
  - Example: `docs/add-deployment-guide`

- `style/` - For styling and UI improvements
  - Example: `style/update-color-scheme`
  - Example: `style/improve-responsive-design`

- `perf/` - For performance improvements
  - Example: `perf/optimize-image-loading`

- `chore/` - For maintenance tasks, dependency updates, etc.
  - Example: `chore/update-dependencies`
  - Example: `chore/configure-prettier`

**Format**: `<type>/<short-description-in-kebab-case>`

## Commit Message Conventions

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. Your commit messages must follow this format:

```
<type>(<scope>): <subject>

<body> (optional)

<footer> (optional)
```

### Commit Types

- **feat**: A new feature
  - Example: `feat(hero): add animated hero section`
  
- **fix**: A bug fix
  - Example: `fix(navigation): resolve mobile menu overflow`
  
- **docs**: Documentation changes only
  - Example: `docs(readme): update installation instructions`
  
- **style**: Code style changes (formatting, CSS, etc.) - no logic change
  - Example: `style(homepage): improve responsive breakpoints`
  
- **refactor**: Code changes that neither fix bugs nor add features
  - Example: `refactor(components): extract reusable Button component`
  
- **perf**: Performance improvements
  - Example: `perf(images): implement next/image optimization`
  
- **test**: Adding or updating tests
  - Example: `test(api): add integration tests for contact form`
  
- **chore**: Maintenance tasks, dependency updates, build configuration
  - Example: `chore(deps): update next to version 15.5.9`
  
- **ci**: Changes to CI/CD configuration
  - Example: `ci(github): add automated deployment workflow`
  
- **build**: Changes to build system or external dependencies
  - Example: `build(webpack): update build configuration`

### Commit Message Examples

✅ **Good commits:**
```
feat(leaderboard): add real-time user rankings
fix(contact): prevent form submission on empty fields
docs(contributing): add commit message guidelines
style(footer): improve mobile responsive layout
refactor(api): simplify data fetching logic
perf(seo): add static metadata generation
chore(deps): bump tailwindcss from 4.0.0 to 4.0.1
```

❌ **Bad commits:**
```
updated stuff
fix bug
WIP
changes
fixed it
```

## Pull Request Process

### Before Submitting a PR

1. **Test your changes** - Ensure everything works as expected
2. **Run the build** - Make sure `npm run build` completes without errors
3. **Check for breaking changes** - Your PR should only contain intended changes
4. **Update documentation** - If you've added features, update the README
5. **Run linting** - Execute `npm run lint` and fix all issues
6. **Self-review your code** - Check for console logs, commented code, or debug statements

### ⚠️ CRITICAL: Review Your Changes Carefully

**Before committing and creating a PR, you MUST:**

- ✅ Review every single file you're committing
- ✅ Ensure ONLY your intended changes are included
- ✅ Remove any accidental changes, debug code, or unrelated modifications
- ✅ Verify no breaking changes are introduced to existing functionality
- ✅ Test that existing pages and features still work correctly

**⚠️ WARNING**: Pull requests that include unrelated changes, breaking changes, or modifications beyond the stated purpose will be **immediately closed with an "invalid" tag** and will not be reviewed.

We take code quality seriously. Please respect our codebase and review guidelines.

### PR Title Format

Your PR title should follow the same convention as commit messages:

```
<type>(<scope>): <description>
```

Examples:
- `feat(homepage): add hero animation`
- `fix(contact): resolve form validation issue`
- `docs(readme): improve setup instructions`

### PR Description Template

When creating a pull request, include:

```markdown
## Description
Brief description of what this PR does

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update
- [ ] Code refactoring
- [ ] Performance improvement
- [ ] UI/UX improvement

## Related Issue
Closes #(issue number)

## Changes Made
- List specific changes made
- Be clear and concise
- Include any important details

## Testing Done
- Describe how you tested your changes
- Include test cases if applicable
- Mention browsers/devices tested

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] I have read and followed all guidelines in CONTRIBUTING.md
- [ ] My commits follow Conventional Commits format
- [ ] I have tested my changes thoroughly
- [ ] **CRITICAL**: Only my intended changes are included
- [ ] I have updated relevant documentation
```

## Code Review Guidelines

### For Contributors

- Be patient during the review process
- Respond to feedback constructively
- Make requested changes promptly
- Ask questions if feedback is unclear
- Be open to suggestions and improvements

### Review Timeline

- Initial review: Within 2-3 business days
- Follow-up reviews: Within 1-2 business days
- Please be patient - maintainers are often volunteers

## Development Setup

Please refer to the [README.md](README.md) for detailed development setup instructions.

Quick start:
```bash
git clone https://github.com/browseping/web.git
cd web
npm install
cp .env.local.example .env.local
npm run dev
```

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid using `any` type unless absolutely necessary
- Use meaningful variable and function names
- Leverage Next.js 15 TypeScript features

### React & Next.js

- Use React Server Components by default (Next.js 15 App Router)
- Use Client Components only when necessary ('use client' directive)
- Implement proper error boundaries
- Follow Next.js best practices for routing and data fetching
- Use proper metadata and SEO optimization

### CSS/Tailwind

- Use Tailwind CSS utility classes
- Follow existing styling patterns
- Ensure responsive design for all screen sizes
- Test on mobile, tablet, and desktop
- Use consistent spacing and design system

### Code Style

- Use 2 spaces for indentation
- Use semicolons
- Use single quotes for strings
- Add meaningful comments for complex logic
- Remove console.logs before committing
- Keep functions small and focused
- Follow DRY (Don't Repeat Yourself) principles
- Use meaningful component and file names

### File Naming

- Use PascalCase for component files: `HeroSection.tsx`
- Use camelCase for utility files: `formatDate.ts`
- Use kebab-case for CSS modules: `hero-section.module.css`
- Follow Next.js App Router conventions for pages and layouts

### Performance

- Optimize images using next/image
- Implement lazy loading where appropriate
- Minimize client-side JavaScript
- Use static generation when possible
- Monitor Core Web Vitals

### SEO

- Add proper metadata to all pages
- Use semantic HTML
- Implement structured data when appropriate
- Optimize for accessibility
- Test with Lighthouse

## Testing

- Test all changes in development mode (`npm run dev`)
- Build and test production build (`npm run build && npm start`)
- Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- Test responsive design on various screen sizes
- Check for console errors and warnings

## Questions or Issues?

If you have questions or run into issues:

- **Discord Community**: Join our [Discord server](https://discord.gg/GdhXuEAZ) for real-time discussions and support
- **GitHub Issues**: Check existing issues or create a new one with detailed information
- **Email Support**: Contact us at [support@browseping.com](mailto:support@browseping.com)
- **Follow Us**: Stay updated on [Twitter/X](https://x.com/browseping) and [LinkedIn](https://www.linkedin.com/company/browseping)

---

**Remember**: Quality over quantity. A well-tested, properly documented small PR is more valuable than a large, rushed contribution.

Thank you for contributing to BrowsePing! 🎉
