const { Activity } = require("discord.js-selfbot-v13");

export const command_name = "showonline";

export function go(message, client) {
  client.user.setPresence({
    status: "online",
  });
  message.reply("ok online");
  return;
}
