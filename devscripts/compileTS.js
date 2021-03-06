const { exec } = require("child_process");

exec(
  "tsc --outFile dist/index.js -d --sourceMap index.ts && npx minify dist/index.js > dist/index.min.js && exit"
);
console.log("Compiled! & Minified!")