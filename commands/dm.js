export const command_name = "dm";
const usage = "dm <user id> <message>"

export function go(message, args, client) {
  try {
    const messageToSend = args[1];
    if (messageToSend == null) {
      message.reply("### :no_entry_sign: Error: cannot send empty message");
      return;
    }
    const targetID = args[0];
    const targetUser = client.users.cache.get(targetID);
    targetUser.send(messageToSend);
    message.reply(`### :white_check_mark: Sent \`${messageToSend}\` to <@${targetID}>`);
  } catch (error) {
    console.error(`Error: ${error}`);
    message.reply(`### :bulb: Usage: ${usage}`);
  }
}
