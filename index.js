const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
    console.log(`(SYSTEM) Rihno Jest gotowy do pracy`);

})

// Komenda r!ping

client.on("message", async msg => {

    if (msg.author.bot) return;
    if (msg.channel.type !== "text") return;
    if (msg.content.startsWith(config.prefix + "ping")){
        var pv = new Discord.RichEmbed()
            .setTitle(`@${msg.author.tag} Pong!`)
            .setDescription(`:ping_pong: **Twój ping to ${Math.round(client.ping)}ms**`)
            .setColor("RANDOM")
            .setFooter(`@${msg.author.tag} Sprawdził swój ping!`)
            msg.channel.send(pv);
    }
})

// Komenda r!dm

const prefix = "r!";
client.on ("message", (message) => {


    msg = message.content.toLowerCase();

    if (message.author.bot) return;
    
    mention = message.mentions.users.first();

    if (msg.startsWith (prefix + "dm")) {
        if (mention == null) { return; }
        message.delete();
        mentionMessage = message.content.slice (4);
        mention.sendMessage (mentionMessage);
        message.channel.send ("(**SYSTEM**) Wysłano!")
    }
})

// Nadawanie rangi po wejściu użytkownika na serwer.

client.on ("guildMemberAdd", member => {  

    var role = member.guild.roles.find ("name", "[RHINO] MEMBER");
    member.addRole (role);
    var role = member.guild.roles.find ("name", "╠-● POWIADOMIENIA");
    member.addRole (role);
    var role = member.guild.roles.find ("name", "╠-● UŻYTKOWNIK");
    member.addRole (role);
})

client.on ("guildMemberRemove", member => {

})  

// Wiadomość powitalna.

client.on("guildMemberAdd", function(member){
    member.guild.channels.find("name", "🌠┃powitalnia").send(`(**SYSTEM**) Przywitajmy użytkownika o nazwie **${member}**, zapoznaj się z regulaminem!`)

});

// Status

let statuses = ['| Stabilny Hosting |','| Aktulizacja za 2 dni! |','| Aktywny już 24/7 |',| 'Rhino BOT - v1.1 |'];

client.on('ready', () => {

    setInterval(function() {

        let status = statuses[Math.floor(Math.random()* statuses.length)];

        client.user.setPresence({ game: { name: status }, status: 'online' });
        client.user.setPresence({ activity: { name: status }, status: 'online' });


    }, 5000)

})

client.login(process.env.token);
