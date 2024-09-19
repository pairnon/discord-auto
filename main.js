import * as logger from "./logger.js";

import * as bulkdelete from "./commands/bulkdelete.js";
import * as dm from "./commands/dm.js";
import * as help from "./commands/help.js";
import * as ip from "./commands/ip.js";
import * as nodelookup from "./commands/nodelookup.js";
import * as ping from "./commands/ping.js";
import * as prices from "./commands/prices.js";
import * as setstatus from "./commands/setstatus.js";
import * as timer from "./commands/timer.js";

export const commands = [
  bulkdelete.command_name,
  dm.command_name,
  help.command_name,
  ip.command_name,
  nodelookup.command_name,
  ping.command_name,
  prices.command_name,
  setstatus.command_name,
  timer.command_name,
];

require("dotenv").config();

const clientToken = process.env.token;
const adminID = process.env.admin_id;

let clientUserID = 0;
let prefix = "";

const { Client } = require("discord.js-selfbot-v13");
const client = new Client();

client.on("ready", async () => {
  clientUserID = client.user.id;
  prefix = `<@${clientUserID}>`;
  logger.success(`@${client.user.username} (${clientUserID}) is ready!`);
  client.user.setStatus("invisible");
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let executorUserID = message.author.id;
  let executorUsername = message.author.username;

  if (executorUserID != adminID) {
    logger.warn(
      `${executorUserID} (@${executorUsername}) mentioned the client but is not an administrator.`,
    );
    return;
  }

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  switch (command) {
    case prices.command_name:
      logger.log(
        `${executorUserID} (@${executorUsername}) executed command ${prices.command_name}.`,
      );
      prices.go(message, args);
      return;
    case ping.command_name:
      logger.log(
        `${executorUserID} (@${executorUsername}) executed command ${ping.command_name}.`,
      );
      ping.go(message, args);
      return;
    case setstatus.command_name:
      logger.log(
        `${executorUserID} (@${executorUsername}) executed command ${setstatus.command_name}.`,
      );
      setstatus.go(message, args, client);
      return;
    case dm.command_name:
      logger.log(
        `${executorUserID} (@${executorUsername}) executed command ${dm.command_name}.`,
      );
      dm.go(message, args, client);
      return;
    case timer.command_name:
      logger.log(
        `${executorUserID} (@${executorUsername}) executed command ${timer.command_name}.`,
      );
      timer.go(message, args, client);
      return;
    case ip.command_name:
      logger.log(
        `${executorUserID} (@${executorUsername}) executed command ${ip.command_name}.`,
      );
      ip.go(message, args);
      return;
    case bulkdelete.command_name:
      logger.log(
        `${executorUserID} (@${executorUsername}) executed command ${bulkdelete.command_name}.`,
      );
      bulkdelete.go(message, args, client);
      return;
    case help.command_name:
      logger.log(
        `${executorUserID} (@${executorUsername}) executed command ${help.command_name}.`,
      );
      help.go(message, args);
      return;
    case nodelookup.command_name:
      logger.log(
        `${executorUserID} (@${executorUsername}) executed command ${nodelookup.command_name}.`,
      );
      nodelookup.go(message, args);
      return;
    default:
      logger.warn(
        `${executorUserID} (@${executorUsername}) mentioned the client without a specified command.`,
      );
  }
});

client.login(clientToken);
