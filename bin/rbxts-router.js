#!/usr/bin/env node
const { Command } = require("commander");

const fs   = require("node:fs");
const path = require("node:path");

/* -------------------------------- helpers -------------------------------- */

function walkDir(dir, indent = "") {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const isDir = fs.statSync(full).isDirectory();
    console.log(indent + (isDir ? "📁 " : "📄 ") + name);
    if (isDir) walkDir(full, `${indent}  `);
  }
}

if (process.argv.includes("--tree")) {
  console.log("🔍 Tree of ../ from", __dirname);
  walkDir(path.join(__dirname, ".."));
  process.exit(0);
}

/* ---------------------------- normal requires ---------------------------- */
/*  <<--- literal paths so pkg can statically analyse them --->>             */
const createApp           = require("../lib/create-app.js");
const generateClient      = require("../lib/generate-client.js");
const watchGenerateClient = require("../lib/generate-client-watch.js");


/* ---------------------------------- CLI ---------------------------------- */

const program = new Command();

program
  .name("rbxts-router")
  .version("1.0.0")
  .description("CLI tools for @rbxts/router");

program
  .command("create-app <name>")
  .description("Scaffold a new router app under src/server/apps")
  .action(createApp);

program
  .command("generate-client")
  .description("Generate typed router client from route declarations")
  .option("-w, --watch", "watch for changes")
  .action((opts) => (opts.watch ? watchGenerateClient() : generateClient()));

program.parse();
