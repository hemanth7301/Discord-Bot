const { Client, GatewayIntentBits, Message } = require("discord.js");

require("dotenv").config();
const TOKEN = process.env.TOKEN;

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  message.reply({
    content: "Hi from Bot",
  });
});

client.on("interactionCreate", (interaction) => {
  interaction.reply("Pong");
});

client.login(TOKEN);
