export const command_name = "timer";

export async function go(message, args, client) {
  const time = args[0];

  message.reply(`set timer for ${time} seconds`);

  await sleep(time * 1000);

  message.reply(`done!`);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
