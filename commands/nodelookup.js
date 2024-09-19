import * as time from "../time.js";

const fetch = require("node-fetch");

let fetchURL =
  "https://1ml.com/node/";

export const command_name = "nodelookup";

export async function go(message, args) {
  fetchURL += args[0];
  fetchURL += "/json";
  const response = await fetch(fetchURL);
  let data = await response.json();

  let responseMessage = ``;

  responseMessage += data.alias + "\n" + data.last_update + "\n";

  responseMessage += `\`Data fetched ${time.getFormattedDateTime()} UTC\``;
  message.reply(responseMessage);
}
