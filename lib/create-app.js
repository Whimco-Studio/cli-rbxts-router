import fs from "fs-extra";
import path from "node:path";

export function createApp(name) {
	const base = path.join("src/server/apps", name);
	fs.ensureDirSync(base);

	const files = {
		"urls.ts": `// ${name} routes\n\n`,
		"views.ts": `// ${name} views\n\n`,
		"models.ts": `// ${name} models\n\n`,
		"middleware.ts": `// ${name} middleware\n\n`,
		[`${name}.test.ts`]: `// ${name} tests\n\n`,
		"index.ts": `export * from "./urls";\nexport * from "./models";\nexport * from "./middleware";\nexport * from "./views";`,
	};

	let skipped = 0;

	for (const [filename, content] of Object.entries(files)) {
		const fullPath = path.join(base, filename);
		if (fs.existsSync(fullPath)) {
			console.log(`⚠️  Skipped (already exists): ${fullPath}`);
			skipped++;
			continue;
		}
		fs.writeFileSync(fullPath, content);
		console.log(`📄 Created: ${fullPath}`);
	}

	console.log(`\n✅ App scaffolded: ${base}`);
	if (skipped > 0) {
		console.log(`ℹ️  ${skipped} file(s) were skipped to avoid overwriting.`);
	}
}
