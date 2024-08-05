import * as main from "../main.js";

export const command_name = "help";

export function go(message, args) {
  let reply = `## :computer: List of commands\n`;
  let commandsArray = main.commands;
  for (let i = 0; i < commandsArray.length; i++) {
    reply += `### :black_small_square: \`${commandsArray[i]}\`\n`;
  }
  message.reply(reply);
}
