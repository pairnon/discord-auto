export function getFormattedDateTime() {
  let date = new Date();
  let utcYear = date.getUTCFullYear();
  let utcMonth = date.getUTCMonth();
  let utcDay = date.getUTCDate();
  let utcHours = date.getUTCHours();
  let utcMinutes = date.getUTCMinutes();
  let utcSeconds = date.getSeconds();
  return `${utcYear}-${utcMonth}-${utcDay} ${utcHours}:${utcMinutes}:${utcSeconds}`;
}
