const { commandBuilder } = require("discordjsh");
const Discord = require("discord.js");
const { Color, Website: Docs, Logo, Examples } = require("../Config/config");
const DocJ = require("discordjsh").DocsJSON;

const Config = module.exports = {
    name: "examples",
    description: "Gets a link to the examples page.",
    async execute(interaction, client){
        await interaction.reply({
            embeds: [
                new Discord.MessageEmbed()
                .setColor(Color)
                .setAuthor({ name: "Discord.jsh", iconURL: Logo.png })
                .setTitle("<:search:887514201021620334> Discord.jsh Examples")
                .setURL(Examples)
            ],
            components: [{
                type: 1,
                components: [
                    new Discord.MessageButton()
                    .setURL(Examples)
                    .setStyle("LINK")
                    .setLabel("Examples")
                    .setEmoji("<:search:887514201021620334>"),
                ]
            }]
        })
    }
}

module.exports.data = new commandBuilder()
.setName(Config.name)
.setDescription(Config.description)