const { commandBuilder } = require("discordjsh");
const Discord = require("discord.js");
const { Color, Website: Docs, Logo, Examples, Website, Support } = require("../Config/config");
const DocJ = require("discordjsh").DocsJSON;

const Config = module.exports = {
    name: "support",
    description: "Gets a link to the support server.",
    async execute(interaction, client){
        await interaction.reply({
            embeds: [
                new Discord.MessageEmbed()
                .setColor(Color)
                .setAuthor({ name: "Discord.jsh", iconURL: Logo.png })
                .setTitle("<:staff:911666514132881498> Discord.jsh Support Server")
                .setURL(Support)
            ],
            components: [{
                type: 1,
                components: [
                    new Discord.MessageButton()
                    .setURL(Support)
                    .setStyle("LINK")
                    .setLabel("Support")
                    .setEmoji("<:staff:911666514132881498>"),
                ]
            }]
        })
    }
}

module.exports.data = new commandBuilder()
.setName(Config.name)
.setDescription(Config.description)