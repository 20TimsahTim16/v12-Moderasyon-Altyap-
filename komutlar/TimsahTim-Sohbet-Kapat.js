const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let every = message.guild.roles.cache.find(r => r.name === "@everyone");
 message.channel.createOverwrite(every, {
    SEND_MESSAGES: false
  });
//  Create By TimsahTim
  message.channel.send("Sohbet Kanalı ``Yazılamaz`` Durumuna Getirildi.");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sohbetkapat"],
  kategori: "sohbet",
  permLevel: 3
};

exports.help = {
  name: "sohbet-kapat",
  description: "Sohbetinizi kapatmaya yarar.",
  usage: "kapat"
};