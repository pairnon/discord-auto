
const { Activity } = require("discord.js-selfbot-v13");

export const command_name = "togglestatus";

export function go(message, client) {
  if (client.user.presence.status == "offline") {
    client.user.setPresence({
      status: "online",
    });
    message.reply("ok online");
    return;
  }
  client.user.setPresence({
    status: "offline",
  });
  message.reply("ok offline");
  return;
}
