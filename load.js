// Attempt to auto-detect the environment
var ENVIRONMENT_IS_WEB = typeof window === "object";
var ENVIRONMENT_IS_WORKER = typeof importScripts === "function";
// N.b. Electron.js environment is simultaneously a NODE-environment, but
// also a web environment.
var ENVIRONMENT_IS_NODE =
  typeof process === "object" &&
  typeof process.versions === "object" &&
  typeof process.versions.node === "string";
var ENVIRONMENT_IS_SHELL =
  !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

if (ENVIRONMENT_IS_NODE) {
  const fs = require("fs");
  const wasmBuffer = fs.readFileSync("./index.wasm");
  WebAssembly.instantiate(wasmBuffer).then(wasmModule => {
    // Exported function live under instance.exports
    const golden = wasmModule.instance.exports.golden;
    console.log({ golden: golden(23) });
  });
} else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  fetch("./index.wasm")
    .then(response => response.arrayBuffer())
    .then(bytes =>
      WebAssembly.instantiate(bytes).then(wasmModule => {
        // Exported function live under instance.exports
        const golden = wasmModule.instance.exports.golden;
        console.log({ golden: golden(21), arr: [] });
      })
    );
} else if (
  ENVIRONMENT_IS_SHELL ||
  (!ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER)
) {
  throw new Error("Environment not supported, Try node | browser");
}
