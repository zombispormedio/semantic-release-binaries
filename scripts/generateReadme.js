const markdown = require("markdown-builder");
const fs = require("fs");
const path = require("path");

const { name } = require("../package.json");

const dst = path.resolve(process.cwd(), "README.md");
let readme = "";

readme += markdown.headers.hX(1, name);

fs.writeFileSync(dst, readme);
