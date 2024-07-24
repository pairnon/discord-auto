const fetch = require("node-fetch");

const btc = ["BTC", ":orange_circle:"];
const eth = ["ETH", ":blue_circle:"];
const bnb = ["BNB", ":yellow_circle:"];
const sol = ["SOL", ":purple_circle:"];
const xrp = ["XRP", ":black_circle:"];
const bch = ["BCH", ":green_circle:"];
const doge = ["DOGE", ":dog:"];
const ltc = ["LTC", ":regional_indicator_l:"];
const symbols = [btc, eth, bnb, sol, xrp, bch, doge, ltc];

const pricesURL =
  "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BNB,SOL,XRP,BCH,DOGE,LTC&tsyms=USD";

export const command_name = "prices";

export async function go(message, args) {
  let responseMessage = ``;
  const response = await fetch(pricesURL);
  let data = await response.json();
  const keysArray = Object.keys(data);
  const valuesArray = Object.values(data);
  for (let i = 0; i < keysArray.length; i++) {
    responseMessage += `## ${symbols[i][1]} ${keysArray[i]} Price: \`$${valuesArray[i].USD.toString()}\`\n`;
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
