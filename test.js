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
  client.user.setStatus('invisible');
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return false;
  let content = message.content;
  if (!content.includes(userID)) return false;
  if (content.includes(prices.command_name)) {
    prices.go(message);
    return;
  }
  if (content.includes(ping.command_name)) {
    ping.go(message);
    return;
  }
  if (content.includes(showonline.command_name)) {
    showonline.go(message, client);
    return;
  }
});

client.login(token);
