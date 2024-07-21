import * as prices from "./commands/prices.js";
import * as ping from "./commands/ping.js";
import * as setstatus from "./commands/setstatus.js";
import * as dm from "./commands/dm.js";
import * as timer from "./commands/timer.js";

require("dotenv").config();

const clientToken = process.env.token;

let clientUserID = 0;
let prefix = "";

const { Client } = require("discord.js-selfbot-v13");
const client = new Client();

client.on("ready", async () => {
  clientUserID = client.user.id;
  prefix = `<@${clientUserID}>`;
  console.log(`@${client.user.username} (${clientUserID}) is ready!`);
  client.user.setStatus("invisible");
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let executorUserID = message.author.id;
  let executorUsername = message.author.username;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  switch (command) {
    case prices.command_name:
      console.log(
        `${executorUserID} (@${executorUsername}) executed command ${prices.command_name}.`,
      );
      prices.go(message, args);
      return;
    case ping.command_name:
      console.log(
        `${executorUserID} (@${executorUsername}) executed command ${ping.command_name}.`,
      );
      ping.go(message, args);
      return;
    case setstatus.command_name:
      console.log(
        `${executorUserID} (@${executorUsername}) executed command ${setstatus.command_name}.`,
      );
      setstatus.go(message, args, client);
      return;
    case dm.command_name:
      console.log(
        `${executorUserID} (@${executorUsername}) executed command ${dm.command_name}.`,
      );
      dm.go(message, args, client);
      return;
    case timer.command_name:
      console.log(
        `${executorUserID} (@${executorUsername}) executed command ${timer.command_name}.`,
      );
      timer.go(message, args, client);
      return;
    default:
      console.log(
        `${executorUserID} (@${executorUsername}) mentioned the client without a specified command.`,
      );
  }
});

client.login(clientToken);
