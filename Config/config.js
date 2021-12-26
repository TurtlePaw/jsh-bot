const Website = module.exports.Website = "https://jsh.trtle.xyz/#/";
const Docs = module.exports.Docs = Website + "docs";
const BotAddURL = module.exports.BotAddURL = Website + "bot.html";
const Invite = module.exports.Invite = Website + "invb";
const ClientId = module.exports.ClientId = require("./config.json").clientId
const BetaBotId = module.exports.BetaBotId = "924358503940911125";
const Color = module.exports.Color = ClientId == BetaBotId ? "#DC734F" : "#7693AC"; 