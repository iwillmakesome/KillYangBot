const {
  Client,
  GatewayIntentBits,
  SlashCommandBuilder,
} = require("discord.js");
const { Guilds, GuildMessages, MessageContent } = GatewayIntentBits;
const client = new Client({ intents: [Guilds, GuildMessages, MessageContent] });

console.log("######################################");
console.log("######################################");
console.log("######################################");
console.log("######################################");
console.log(process.env.token);
console.log("######################################");
console.log("######################################");
console.log("######################################");
console.log("######################################");

// client.login(process.env.token);
// client.once("ready", () => {
//   console.log(client.user.tag + " ready!");
//   client.application.commands.create(
//     new SlashCommandBuilder().setName("test").setDescription("test")
//   );
// });

// client.on("messageCreate", (msg) => {
//   const content = msg.content;

//   if (content == ":emoji_3:" || content == "<:emoji_3:877020440093163601>") {
//     msg.reply("죽어 양범건ㅋ");
//   }
// });
