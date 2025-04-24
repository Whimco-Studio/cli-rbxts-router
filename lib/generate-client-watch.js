// lib/generate-client-watch.js
const fs = require("node:fs");
const path = require("node:path");
const fg = require("fast-glob");
const generateClient = require("./generate-client.js");

function watchGenerateClient() {
  console.log("🚀 Initial generate…");
  generateClient();

  // map of filepath → last mtime
  const mtimes = new Map();

  // scan + generate if changed
  function scanOnce() {
    const files = fg.sync("src/server/apps/**/{urls,models}.ts", { cwd: process.cwd() });
    for (const rel of files) {
      const full = path.join(process.cwd(), rel);
      let stat;
      try {
        stat = fs.statSync(full);
      } catch {
        continue;
      }
      const prev = mtimes.get(full);
      if (!prev || stat.mtimeMs > prev) {
        mtimes.set(full, stat.mtimeMs);
        console.log(`🔁 [poll] change detected: ${rel}`);
        try {
          generateClient();
        } catch (err) {
          console.error("❌ generateClient() error:", err);
        }
      }
    }
  }

  // Every half‐second
  setInterval(scanOnce, 500);
}


module.exports = watchGenerateClient;