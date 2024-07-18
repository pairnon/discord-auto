import * as prices from "./commands/prices.js";
import * as ping from "./commands/ping.js";

require("dotenv").config();

const token = process.env.token;
const userID = process.env.user_id;

const { Client } = require("discord.js-selfbot-v13");
const client = new Client();

client.on("ready", async () => {
  console.log(`${client.user.username} is ready!`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return false;
  let content = message.content;
  if (!content.includes(userID)) return false;
  if (content.includes("prices")) {
    prices.go(message);
    return;
  }
  if (content.includes("ping")) {
    ping.go(message);
    return;
  }
});

client.login(token);
