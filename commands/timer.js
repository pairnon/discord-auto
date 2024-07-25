export const command_name = "timer";

export async function go(message, args, client) {
  const time = args[0];

  message.reply(`# :hourglass_flowing_sand: Timer set for ${time} seconds`);

  await sleep(time * 1000);

  message.reply(`# :hourglass: ${time} seconds is up!`);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
