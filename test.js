import * as prices from "./commands/prices.js";
import * as ping from "./commands/ping.js";
import * as showonline from "./commands/showonline.js";

require("dotenv").config();

const clientToken = process.env.token;
const clientUserID = process.env.user_id;

const prefix = `<@${clientUserID}>`;

const { Client } = require("discord.js-selfbot-v13");
const client = new Client();

client.on("ready", async () => {
  console.log(`${client.user.username} is ready!`);
  client.user.setStatus("invisible");
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let executorUserID = message.author.id;
  let executorUsername = message.author.username;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command == prices.command_name) {
    console.log(`${executorUserID} (@${executorUsername}) executed a command.`);
    prices.go(message);
    return;
  }
  if (command == ping.command_name) {
    console.log(`${executorUserID} (@${executorUsername}) executed a command.`);
    ping.go(message);
    return;
  }
  if (command == showonline.command_name) {
    console.log(`${executorUserID} (@${executorUsername}) executed a command.`);
    showonline.go(message, client);
    return;
  }
});

client.login(clientToken);
