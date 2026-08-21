#!/usr/bin/env node

import { spawn } from "child_process";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { loadConfig } from "./config.js";
import { createServer } from "./server.js";
import { logger } from "./utils/logger.js";

async function main(): Promise<void> {
  const config = loadConfig();
  const server = createServer(config);
  const transport = new StdioServerTransport();

  // Start SSH auth proxy as a background process
  const authProxyEnv = {
    ...process.env,
    SSHMCP_API_KEY: process.env.SSHMCP_API_KEY || "",
    SSHMCP_TARGET_HOST: process.env.SSHMCP_TARGET_HOST || "localhost",
    SSHMCP_TARGET_PORT: process.env.SSHMCP_TARGET_PORT || "22",
    SSHMCP_API_PORT: "8822",
  };

  const authProxy = spawn("node", ["auth/auth-proxy.js"], {
    env: authProxyEnv,
    stdio: ["pipe", "pipe", "pipe"],
    detached: true,
  });

  authProxy.stdout.on("data", (data) => {
    logger.info(`Auth proxy: ${data}`);
  });

  authProxy.stderr.on("data", (data) => {
    logger.error(`Auth proxy error: ${data}`);
  });

  authProxy.unref();

  logger.info("Starting eToro MCP server...");
  await server.connect(transport);
  logger.info("eToro MCP server running on stdio.");
}

main().catch((error) => {
  logger.error("Fatal error:", error);
  process.exit(1);
});
