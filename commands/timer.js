export const command_name = "timer";

const usage = "timer <duration> <s / m>"

export async function go(message, args, client) {
  const time = args[0];
  let unit = undefined;

  if (args[1] != undefined) {
    unit = args[1];
  }

  if (unit == undefined) {
    await runSecondsTimer(time, message);
  } else {
    switch (unit) {
      case `s`:
        await runSecondsTimer(time, message);
        return;
      case `m`:
        runMinutesTimer(time, message);
        return;
      default:
        message.reply(`### :no_entry_sign: Usage: ${usage}`);
    }
  }
}

async function runMinutesTimer(time, message) {
  if (time == 1) {
    message.reply(`# :hourglass_flowing_sand: Timer set for ${time} minute`);
    await sleep(time * 1000 * 60);
    message.reply(`# :hourglass: ${time} minute is up!`);
    return;
  } else {
    message.reply(`# :hourglass_flowing_sand: Timer set for ${time} minutes`);
    await sleep(time * 1000 * 60);
    message.reply(`# :hourglass: ${time} minutes is up!`);
    return;
  }
}

async function runSecondsTimer(time, message) {
  if (time == 1) {
    message.reply(`# :hourglass_flowing_sand: Timer set for ${time} second`);
    await sleep(time * 1000);
    message.reply(`# :hourglass: ${time} second is up!`);
    return;
  } else {
    message.reply(`# :hourglass_flowing_sand: Timer set for ${time} seconds`);
    await sleep(time * 1000);
    message.reply(`# :hourglass: ${time} seconds is up!`);
    return;
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
