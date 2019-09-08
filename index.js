const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
    console.log(`(SYSTEM) Rihno Jest gotowy do pracy`);
    client.user.setActivity('| Już aktywny 24/7 |')

    let statuses = [
        "| Wkrótce nowe Aktulizacje! |"
    ]

    setInterval(function() { 
        let status = statuses[Math.floor(Math.random() = statuses.length)];
        bot.user.setActivity("| Stabilny Hosting |", {type: "WATCHING"});

    }, 5000)

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
        message.channel.send ("Wysłano!")
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
    member.guild.channels.find("name", "🌠┃powitalnia").send("(**SYSTEM**) Powitajmy użytkownika o nazwie @"  +  member.user.username )

});

// Join channel

client.login(process.env.token);
