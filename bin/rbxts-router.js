#!/usr/bin/env node
import { Command } from "commander";
import { createApp } from "../lib/create-app.js";
import { generateClient } from "../lib/generate-client.js";

const program = new Command();

program
  .name("rbxts-router")
  .description("CLI tools for @rbxts/router")
  .version("1.0.0");

program
  .command("create-app")
  .argument("<name>", "app name")
  .description("Scaffold a new router app under src/server/apps")
  .action(createApp);

program
  .command("generate-client")
  .description("Generate typed router client from route declarations")
  .option("-w, --watch", "Watch for changes and regenerate on file save")
  .action(async (opts) => {
    if (opts.watch) {
      (await import("../lib/generate-client-watch.js")).watchGenerateClient();
    } else {
      await (await import("../lib/generate-client.js")).generateClient();
    }
  });

program.parse();
