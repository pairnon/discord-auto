const fetch = require("node-fetch");

const btc = [
  "BTC",
  ":orange_circle:",
  "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD",
];
const eth = [
  "ETH",
  ":blue_circle:",
  "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD",
];
const bnb = [
  "BNB",
  ":yellow_circle:",
  "https://min-api.cryptocompare.com/data/price?fsym=BNB&tsyms=USD",
];
const sol = [
  "SOL",
  ":purple_circle:",
  "https://min-api.cryptocompare.com/data/price?fsym=SOL&tsyms=USD",
];
const xrp = [
  "XRP",
  ":black_circle:",
  "https://min-api.cryptocompare.com/data/price?fsym=XRP&tsyms=USD",
];
const bch = [
  "BCH",
  ":green_circle:",
  "https://min-api.cryptocompare.com/data/price?fsym=BCH&tsyms=USD",
];
const doge = [
  "DOGE",
  ":dog:",
  "https://min-api.cryptocompare.com/data/price?fsym=DOGE&tsyms=USD",
];
const ltc = [
  "LTC",
  ":regional_indicator_l:",
  "https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD",
];
const urls = [btc, eth, bnb, sol, xrp, bch, doge, ltc];

export const command_name = "prices";

export async function go(message, args) {
  let responseMessage = ``;
  for (let i = 0; i < urls.length; i++) {
    const response = await fetch(urls[i][2]);
    let data = await response.json();
    responseMessage += `## ${urls[i][1]} ${urls[i][0]} Price: \`$${data.USD.toString()}\`\n`;
  }
  responseMessage += `\`Data fetched ${getFormattedDateTime()} UTC\``;
  message.reply(responseMessage);
}

function getFormattedDateTime() {
  let date = new Date();
  let utcYear = date.getUTCFullYear();
  let utcMonth = date.getUTCMonth();
  let utcDay = date.getUTCDate();
  let utcHours = date.getUTCHours();
  let utcMinutes = date.getUTCMinutes();
  let utcSeconds = date.getSeconds();
  return `${utcYear}-${utcMonth}-${utcDay} ${utcHours}:${utcMinutes}:${utcSeconds}`;
}
