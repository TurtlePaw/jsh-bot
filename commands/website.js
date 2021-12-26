const { commandBuilder } = require("discordjsh");
const Discord = require("discord.js");
const { Color, Website: Docs, Logo, Examples, Website } = require("../Config/config");
const DocJ = require("discordjsh").DocsJSON;

const Config = module.exports = {
    name: "website",
    description: "Gets a link to the jsh website.",
    async execute(interaction, client){
        await interaction.reply({
            embeds: [
                new Discord.MessageEmbed()
                .setColor(Color)
                .setAuthor({ name: "Discord.jsh", iconURL: Logo.png })
                .setTitle("<:pin:887514200082100224> Discord.jsh Website")
                .setURL(Website)
            ],
            components: [{
                type: 1,
                components: [
                    new Discord.MessageButton()
                    .setURL(Website)
                    .setStyle("LINK")
                    .setLabel("Website")
                    .setEmoji("<:pin:887514200082100224>"),
                ]
            }]
        })
    }
}

module.exports.data = new commandBuilder()
.setName(Config.name)
.setDescription(Config.description)