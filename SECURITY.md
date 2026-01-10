# Security Policy

## Our Commitment to Security

At BrowsePing, we take the security of our website and our users' data very seriously. As the official website for BrowsePing, we are committed to maintaining the highest security standards to protect our community.

## Supported Versions

We actively maintain and provide security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |
| < 1.0   | :x:                |

We strongly recommend always using the latest deployment of the BrowsePing website.

## Reporting a Vulnerability

We appreciate the security research community's efforts in responsibly disclosing vulnerabilities. If you discover a security vulnerability on the BrowsePing website, please help us protect our users by reporting it responsibly.

### For Critical Security Issues

**⚠️ DO NOT create a public GitHub issue for security vulnerabilities.**

If you've found a critical security vulnerability, please report it privately through one of the following methods:

#### Primary Contact
- **Email**: [support@browseping.com](mailto:support@browseping.com)
- **Subject**: "SECURITY: [Brief Description]"

#### Direct Contact with Maintainer
For critical or urgent security issues, you can contact the lead maintainer directly:
- **Email**: [akashkumar.dev00@gmail.com](mailto:akashkumar.dev00@gmail.com)
- **Subject**: "URGENT SECURITY: [Brief Description]"

### What to Include in Your Report

Please provide as much information as possible to help us understand and resolve the issue quickly:

1. **Description** of the vulnerability
2. **Steps to reproduce** the issue
3. **Potential impact** of the vulnerability
4. **Affected URLs or pages** (if known)
5. **Suggested fix** (if you have one)
6. **Your contact information** for follow-up questions

### Example Security Report

```
Subject: SECURITY: XSS Vulnerability in Contact Form

Description:
A cross-site scripting (XSS) vulnerability exists in the contact form 
that could allow malicious users to execute arbitrary JavaScript.

Steps to Reproduce:
1. Navigate to /contact
2. Submit the form with payload: <script>alert('XSS')</script>
3. The script executes on the thank you page

Impact:
High - Could allow attackers to steal session tokens or perform actions 
on behalf of users.

Affected URLs:
https://browseping.com/contact

Contact:
researcher@example.com
```

## Response Timeline

We are committed to responding promptly to security reports:

- **Initial Response**: Within 24-48 hours of receiving your report
- **Status Update**: Within 5 business days with our assessment and planned action
- **Resolution**: We aim to deploy fixes for critical vulnerabilities within 7-14 days

## Our Security Process

1. **Acknowledgment**: We'll acknowledge receipt of your vulnerability report
2. **Investigation**: Our team will investigate and validate the issue
3. **Mitigation**: We'll develop and test a fix
4. **Deployment**: We'll deploy the security patch to production
5. **Disclosure**: After the patch is deployed, we may publicly disclose the vulnerability (with credit to you, if desired)

## Security Best Practices for Contributors

If you're contributing to the BrowsePing website, please follow these security guidelines:

### Code Security

- **Never commit secrets**: No API keys, passwords, or tokens in the code
- **Validate all inputs**: Sanitize and validate user inputs to prevent injection attacks
- **Use secure dependencies**: Keep dependencies up to date and audit for vulnerabilities
- **Follow secure coding practices**: Sanitize HTML, avoid eval(), use parameterized queries
- **Handle errors gracefully**: Don't expose sensitive information in error messages

### Data Privacy

- **Minimize data collection**: Only collect data that's necessary
- **Encrypt sensitive data**: Use encryption for sensitive information
- **Respect user privacy**: Follow our privacy policy and obtain proper consent
- **Secure storage**: Use secure storage practices

### Next.js Security

- **Environment variables**: Use `.env.local` for sensitive data, never commit to repo
- **API routes**: Implement proper authentication and authorization
- **CSP headers**: Configure Content Security Policy headers
- **HTTPS only**: All production deployments must use HTTPS
- **Rate limiting**: Implement rate limiting on API routes and forms

## Vulnerability Disclosure Policy

We follow responsible disclosure practices:

- We will work with you to understand and address the vulnerability
- We ask that you give us reasonable time to fix the issue before public disclosure
- We will credit you for the discovery (unless you prefer to remain anonymous)
- We will publicly acknowledge your contribution once the fix is deployed

## Security Features

Our website implements several security measures:

- **HTTPS Everywhere**: All traffic is encrypted with TLS
- **Content Security Policy**: Prevents XSS attacks
- **Secure Headers**: Implements security headers (X-Frame-Options, etc.)
- **Regular Security Audits**: We regularly review our codebase for vulnerabilities
- **Dependency Scanning**: Automated scanning for vulnerable dependencies
- **Environment Isolation**: Proper separation of development and production environments

## Known Security Considerations

As a Next.js website:

- **Server-side rendering**: Some content is rendered server-side
- **API routes**: We use Next.js API routes for backend functionality
- **Third-party services**: We integrate with external services (analytics, etc.)
- **Static assets**: Public assets are served from CDN

## Bug Bounty Program

While we don't currently have a formal bug bounty program, we deeply appreciate security researchers' efforts. We recognize contributors who help us improve security:

- Public acknowledgment (if desired)
- Recognition in our security hall of fame
- Potential rewards for critical vulnerability discoveries

## Security Updates

- **Subscribe to updates**: Watch our [GitHub repository](https://github.com/browseping/web) for security advisories
- **Follow us**: Stay informed through our [Discord community](https://discord.gg/GdhXuEAZ)
- **Check regularly**: Monitor our deployment announcements for security patches

## Contact Information

For general security questions or concerns:

- **Email**: [support@browseping.com](mailto:support@browseping.com)
- **Discord**: [Join our community](https://discord.gg/GdhXuEAZ)
- **Website**: [browseping.com](https://browseping.com)
- **Twitter/X**: [@BrowsePing](https://x.com/browseping)

For critical security vulnerabilities, always use email and mark as "SECURITY" in the subject line.

---

## Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security Best Practices](https://nextjs.org/docs/app/building-your-application/deploying#security)
- [React Security Best Practices](https://react.dev/learn/keeping-components-pure#side-effects-unintended-consequences)

---

**Thank you for helping keep BrowsePing and our community safe!**

Last Updated: January 3, 2026
