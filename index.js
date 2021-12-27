const jsh = require("discordjsh");
const { token, wh } = require("./Config/config.json")
const BConfig = require("./Config/config");
const Discord = require("discord.js");
const Turtle = require("turtle-api");
const TurtleClient = new Turtle();
TurtleClient.setWebhook(wh)
.setColor("GREEN")
.init(86400000);

const client = new jsh.Client({
    token,
    clientID: BConfig.ClientId,
    testGuildID: "842575277249921074",
    config: {
        color: BConfig.Color,
        logCategory: "924364669441949777"
    }
})
.setCommandsDir()
.create({ 
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    intents: ["GUILD_MEMBERS"]
}) //TODO: Make emoji manager

module.exports.client = {
    getClient: function(){
        return client;
    }
}