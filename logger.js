export function log(message) {
  // magenta
  let startCode = `\x1b[35m`;
  let endCode = `\x1b[0m`;
  console.log(startCode + message + endCode);
}

export function success(message) {
  // green
  let startCode = `\x1b[32m`;
  let endCode = `\x1b[0m`;
  console.log(startCode + message + endCode);
}

export function warn(message) {
  // yellow
  let startCode = `\x1b[33m`;
  let endCode = `\x1b[0m`;
  console.log(startCode + message + endCode);
}
