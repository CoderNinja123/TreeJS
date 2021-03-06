const { exec } = require("child_process");

exec("tsc --outFile dist/index.js index.ts && exit").addListener(
  "exit",
  (code, signal) => {
    console.log("Compiled! & Minified!");
  }
);
