const { commandBuilder } = require("discordjsh");
const Discord = require("discord.js");
const { Color, Website: Docs, Logo, Invite, Github } = require("../Config/config");

const Config = module.exports = {
    name: "github",
    description: "Gets a link to the jsh github.",
    async execute(interaction, client){
        await interaction.reply({
            embeds: [
                new Discord.MessageEmbed()
                .setColor(Color)
                .setAuthor({ name: "Discord.jsh", iconURL: Logo.png })
                .setTitle("<:BotDeveloper:911666363817414706> Discord.jsh Github")
                .setURL(Github.jsh)
            ],
            components: [{
                type: 1,
                components: [
                    new Discord.MessageButton()
                    .setURL(Github.jsh)
                    .setStyle("LINK")
                    .setLabel("Github")
                    .setEmoji("<:BotDeveloper:911666363817414706>"),
                    new Discord.MessageButton()
                    .setURL(Github.bot)
                    .setStyle("LINK")
                    .setLabel("Bot Github")
                    .setEmoji("<:BotDeveloper:911666363817414706>"),
                ]
            }]
        });
    }
}

module.exports.data = new commandBuilder()
.setName(Config.name)
.setDescription(Config.description)