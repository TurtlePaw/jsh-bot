const Website = module.exports.Website = "https://jsh.trtle.xyz/#/";
const Docs = module.exports.Docs = Website + "docs";
const BotAddURL = module.exports.BotAddURL = Website + "invb";
const Invite = module.exports.Invite = Website + "invb";
const ClientId = module.exports.ClientId = require("./config.json").clientId
const BetaBotId = module.exports.BetaBotId = "924358503940911125";
const Color = module.exports.Color = ClientId == BetaBotId ? "#DC734F" : "#7693AC"; 
const Logo = module.exports.Logo = ClientId == BetaBotId ? { svg: "https://jsh.trtle.xyz/Assets/jsh_stagin.svg", png: "https://jsh.trtle.xyz/Assets/jsh_stagin.png" } : { svg: "https://jsh.trtle.xyz/Assets/jsh_icon.svg", png: "https://jsh.trtle.xyz/Assets/jsh.png" };
const Examples = module.exports.Examples = Website + "Examples/";
const Support = module.exports.Support = Website + "support";
const Github = module.exports.Github = {
    bot: "https://github.com/turtlepaw/jsh-bot/",
    jsh: "https://github.com/turtlepaw/discord.jsh/"
};