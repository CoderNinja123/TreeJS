const { exec } = require("child_process");

exec("tsc --outFile dist/index.js -d --sourceMap index.ts").addListener(
  "exit",
  (code, signal) => {
    if (code) console.log(code);
    console.log("Compiled...");
    exec("npx minify dist/index.js > dist/index.min.js").addListener(
      "exit",
      (code, signal) => {
        if (code) console.log(code);
        console.log("& Minified!");
      }
    );
  }
);
