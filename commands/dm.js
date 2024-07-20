export const command_name = "dm";

export function go(message, args, client) {
  try {
    const targetUser = client.users.cache.get(args[0]);
    targetUser.send(args[1]);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}
