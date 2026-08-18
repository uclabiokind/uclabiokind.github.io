import { access, mkdir, readdir, rename, writeFile } from "node:fs/promises";
import path from "node:path";

const outputDirectory = path.resolve("dist/client");
const entries = await readdir(outputDirectory, { withFileTypes: true });
const protectedHtmlFiles = new Set(["index.html", "404.html", "_not-found.html"]);

for (const entry of entries) {
  if (
    !entry.isFile() ||
    !entry.name.endsWith(".html") ||
    protectedHtmlFiles.has(entry.name)
  ) {
    continue;
  }

  const routeName = entry.name.slice(0, -".html".length);
  const routeDirectory = path.join(outputDirectory, routeName);
  await mkdir(routeDirectory, { recursive: true });
  await rename(
    path.join(outputDirectory, entry.name),
    path.join(routeDirectory, "index.html"),
  );
}

await writeFile(path.join(outputDirectory, ".nojekyll"), "");

const requiredPages = [
  "index.html",
  "about/index.html",
  "members/index.html",
  "showcase/index.html",
  "join/index.html",
  "recruitment/index.html",
];

for (const requiredPage of requiredPages) {
  await access(path.join(outputDirectory, requiredPage));
}

console.log("GitHub Pages artifact prepared with clean route URLs.");
