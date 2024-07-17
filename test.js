require("dotenv").config();

const token = process.env.token;
const userID = process.env.user_id;

const { Client } = require("discord.js-selfbot-v13");
const client = new Client();

client.on("ready", async () => {
  console.log(`${client.user.username} is ready!`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return false;
  if (!message.content.includes(userID)) return false;
  message.channel.send("ok");
  console.log(message.content);
});

client.login(token);
