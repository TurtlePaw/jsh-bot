const { commandBuilder } = require("../../discord.jsh/src");
const Discord = require("discord.js");
const { Color, Website: Docs } = require("../Config/config");
const DocJ = require("../Config/docs.json");

const Config = module.exports = {
    name: "docs",
    description: "Gets a link to the jsh docs.",
    devOnly: true,
    async execute(interaction, client){
        const q = interaction.options.getString("query");

        if(q == null){
            await interaction.reply({
                embeds: [
                    new Discord.MessageEmbed()
                    .setColor(Color)
                    .setTitle("Discord.jsh Docs")
                    .setURL(Docs)
                    .setDescription(`> Discord.jsh is a package built to make making a bot easier!`)
                ],
                components: [{
                    type: 1,
                    components: [
                        new Discord.MessageButton()
                        .setURL(Docs)
                        .setStyle("LINK")
                        .setLabel("Docs")
                        .setEmoji("<:rules:890070276094713906>")
                    ]
                }]
            })
        } else {
            const finds = [];
            const ClosestFind = DocJ.find(e => e.name.toLowerCase() == q);
            DocJ.forEach(e => {
                if(e.name.toLowerCase().includes(q)) finds.push(e);
            })
            if(ClosestFind){
                await interaction.reply({
                    embeds: [
                        new Discord.MessageEmbed()
                        .setColor(Color)
                        .setTitle(`<:rules:890070276094713906> ${ClosestFind.name}`)
                        .setURL(ClosestFind.url)
                        .setDescription(ClosestFind.description)
                    ],
                    components: [{
                        type: 1,
                        components: [
                            new Discord.MessageButton()
                            .setURL(Docs)
                            .setStyle("LINK")
                            .setLabel("Docs")
                            .setEmoji("<:rules:890070276094713906>"),
                            new Discord.MessageButton()
                            .setURL(ClosestFind.url)
                            .setStyle("LINK")
                            .setLabel(ClosestFind.name)
                            .setEmoji("<:join:863464329613672508>")
                        ]
                    }]
                })
            } else {
                await interaction.reply({
                    embeds: [
                        new Discord.MessageEmbed()
                        .setColor(Color)
                        .setTitle("Discord.jsh Docs")
                        .setURL(Docs)
                        .setDescription(`${finds.map(e => `<:join:863464329613672508> [${e.name}](${e.url})`).join("\n")}`)
                    ],
                    components: [{
                        type: 1,
                        components: [
                            new Discord.MessageButton()
                            .setURL(Docs)
                            .setStyle("LINK")
                            .setLabel("Docs")
                            .setEmoji("<:rules:890070276094713906>"),
                        ]
                    }]
                })
            }
        }
    }
}

module.exports.data = new commandBuilder()
.setName(Config.name)
.setDescription(Config.description)
.addStringOption(e=>e.setName("query").setDescription("The query for the docs."))