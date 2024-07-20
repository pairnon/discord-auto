import * as prices from "./commands/prices.js";
import * as ping from "./commands/ping.js";
import * as showonline from "./commands/showonline.js";

require("dotenv").config();

const token = process.env.token;
const userID = process.env.user_id;

const { Client } = require("discord.js-selfbot-v13");
const client = new Client();

client.on("ready", async () => {
  console.log(`${client.user.username} is ready!`);
  client.user.setStatus("invisible");
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return false;
  let content = message.content;
  if (!content.includes(userID)) return false;
  let executorUserID = message.author.id;
  let executorUsername = message.author.username;
  if (content.includes(prices.command_name)) {
    console.log(`${executorUserID} (@${executorUsername}) executed a command.`);
    prices.go(message);
    return;
  }
  if (content.includes(ping.command_name)) {
    console.log(`${executorUserID} (@${executorUsername}) executed a command.`);
    ping.go(message);
    return;
  }
  if (content.includes(showonline.command_name)) {
    console.log(`${executorUserID} (@${executorUsername}) executed a command.`);
    showonline.go(message, client);
    return;
  }
});

client.login(token);
