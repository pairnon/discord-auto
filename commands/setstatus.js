const { Activity } = require("discord.js-selfbot-v13");

export const command_name = "setstatus";

export function go(message, args, client) {
  switch (args[0]) {
    case "online":
      client.user.setPresence({
        status: "online",
      });
      message.reply("### :white_check_mark: Set client status to online.");
      return;
    case "idle":
      client.user.setPresence({
        status: "idle",
      });
      message.reply("### :white_check_mark: Set client status to idle.");
      return;
    case "dnd":
      client.user.setPresence({
        status: "dnd",
      });
      message.reply("### :white_check_mark: Set client status to dnd.");
      return;
    default:
      message.reply(
        "### :no_entry_sign: Error: please specify `online,` `idle,` or `dnd.`",
      );
  }
  return;
}
