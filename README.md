# hAI.etoroMCP Server

[![Docker Build](https://github.com/jbkunama1/hAI.etoroMCP/actions/workflows/docker-image.yml/badge.svg)](https://github.com/jbkunama1/hAI.etoroMCP/actions/workflows/docker-image.yml)  
[![TruffleHog Scan](https://github.com/jbkunama1/hAI.etoroMCP/actions/workflows/trufflehog.yml/badge.svg)](https://github.com/jbkunama1/hAI.etoroMCP/actions/workflows/trufflehog.yml)  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This repository provides a containerised MCP server for Etoro, incorporating the SSH authentication proxy from `hAI.SSHMCPAuth`.

## Features

- Etoro MCP core functionality
- Integrated SSH authentication proxy
- Dockerised deployment
- GitHub Actions CI/CD for Docker image builds and secret scanning

## Quick Start

```sh
# Build and run the Docker image
docker run -e SSHMCP_API_KEY=your_key \
           -e SSHMCP_TARGET_HOST=your_host \
           -e SSHMCP_TARGET_PORT=22 \
           -e SSHMCP_ADMIN_PASSWORD=admin_pass \
           ghcr.io/jbkunama1/hai.etoromcp:latest
```

See `instructions.md` for full configuration.

## Development

```sh
# Install dependencies
npm install
# Run locally
npm run dev
```

## License

MIT © 2024 jbkunama1