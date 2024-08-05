import * as logger from "../logger.js";

export const command_name = "del";

export async function go(message, args, client) {
  const channelID = args[0];
  const channel = client.channels.cache.get(channelID);

  const messages = await fetchAllMessages(channel);

  message.reply(`Fetched ${messages.length} messages`);
  logger.success(`Fetched ${messages.length} messages`);

  for (const message of messages) {
    if (message.author.id == client.user.id) {
      if (!message.system) {
        await message.delete().then(
          (msg) =>
            logger.warn(
              `Deleted message ${msg.id} from ${msg.author.username}`,
            ),
          (error) => logger.warn(error),
        );
      }
    }
  }
  message.reply(`Finished bulk delete of channel ${channel.id}`);
  logger.success(`Finished bulk delete of channel ${channel.id}`);
}

// https://stackoverflow.com/a/71620968
async function fetchAllMessages(channel) {
  let messages = [];

  // Create message pointer
  let message = await channel.messages
    .fetch({ limit: 1 })
    .then((messagePage) => (messagePage.size === 1 ? messagePage.at(0) : null));

  while (message) {
    await channel.messages
      .fetch({ limit: 100, before: message.id })
      .then((messagePage) => {
        messagePage.forEach((msg) => messages.push(msg));

        // Update our message pointer to be the last message on the page of messages
        message =
          0 < messagePage.size ? messagePage.at(messagePage.size - 1) : null;
      });
  }
  return messages;
}
