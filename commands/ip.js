import * as time from "../time.js";

const fetch = require("node-fetch");

const ipURL = "http://ip-api.com/json/";

export const command_name = "ip";

export async function go(message, args) {
  let responseMessage = ``;
  const response = await fetch(ipURL + args[0]);
  let data = await response.json();
  // message.reply(responseMessage);
  console.log(data);
  const keysArray = Object.keys(data);
  const valuesArray = Object.values(data);
  responseMessage += `## IP lookup for ${args[0]}\n`;
  for (let i = 0; i < keysArray.length; i++) {
    responseMessage += `- ${keysArray[i]}: ${valuesArray[i]}\n`;
  }
  responseMessage += `\`Data fetched ${time.getFormattedDateTime()} UTC\``;
  message.reply(responseMessage);
}
