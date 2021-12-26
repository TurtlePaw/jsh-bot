const { commandBuilder } = require("discordjsh");
const Discord = require("discord.js");
const { Color, Website: Docs, Logo, Invite } = require("../Config/config");

const Config = module.exports = {
    name: "invite",
    description: "Gets a link to invite this bot.",
    async execute(interaction, client){
        await interaction.reply({
            embeds: [
                new Discord.MessageEmbed()
                .setColor(Color)
                .setAuthor({ name: "Discord.jsh", iconURL: Logo.png })
                .setTitle("<:member_invited_purple:887514615943155812> Discord.jsh Bot Invite")
                .setURL(Invite)
            ],
            components: [{
                type: 1,
                components: [
                    new Discord.MessageButton()
                    .setURL(Invite)
                    .setStyle("LINK")
                    .setLabel("Invite")
                    .setEmoji("<:member_invited_purple:887514615943155812>"),
                ]
            }]
        });
    }
}

module.exports.data = new commandBuilder()
.setName(Config.name)
.setDescription(Config.description)