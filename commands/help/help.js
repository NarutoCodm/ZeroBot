const Discord = require('discord.js');
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");

module.exports = {
  name: "help",
   aliases: ["hlp"],
  run: async (client, message, args ) => {
      //--------------------------------------S T A R T---------------------------------------

    //--------------------EMBEDS------------------------

    const embed = new Discord.MessageEmbed()
    .setDescription(`<a:arrow:904908180901994556> Click the buttons below to click the help menu!`);

    const embed1 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle('<:8684_greentick:901827160799576145> Admin, Moderation/automod & Economy <:8684_greentick:901827160799576145>')
        .addField("ㅤ⠀⠀⠀ \n <:8684_greentick:901827160799576145> **Admin** | <:8684_greentick:901827160799576145> **ENABLED**",
          "`nuke` `react` `snipe` \n\n<:8684_greentick:901827160799576145> **Moderation** | <a:yes:865963544380964864> **ENABLED** \n `addrole` `ban` `purge` `hackban` `kick` `lock` `mute` `removerole` `slowmode` `timedlockdown` `unlock` `unmute`\n\n<:8684_greentick:901827160799576145>**AutoModeration** | <:8684_greentick:901827160799576145> **ENABLED** \n `anti-alt` `autorole` `role-all`"
        )

    const embed2 = new Discord.MessageEmbed()
    .setColor("RANDOM")
     .setTitle('<a:moderation7:905383548398211075> Info & help <a:moderation7:905383548398211075>')
      .addField("⠀⠀⠀ \n <:8684_greentick:901827160799576145> **Info** | <:8684_greentick:901827160799576145> **ENABLED**",
        "`badges` `botinfo` `roleinfo` `servericon` `serverinfo` `userinfo` `invite` `uptime` `avatar` \n\n<:8684_greentick:901827160799576145>> **Help** | <:8684_greentick:901827160799576145> **ENABLED**\n `bug` `help` `invite`\n\n<:8684_greentick:901827160799576145>**ECONOMY** | <:8684_greentick:901827160799576145> **ENABLED** \n  `balance` `buy` `daily` `deposit` `give` `inventory` `leaderboard` `rob` `shop` `use` `weekly` `withdraw` `work`"
        )

    const embed3 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle('<:8684_greentick:901827160799576145> Fun & Images <:8684_greentick:901827160799576145>')
      .addField("ㅤ⠀⠀⠀ \n <:fun:866155255321853982> **Fun** | <:8684_greentick:901827160799576145> **ENABLED**","`ascii` `coinflip` `drake` `emojify` `joke` `meme` `rps` `slap` `trumptweet` `idp`\n\n <:8684_greentick:901827160799576145> **Image** | <:8684_greentick:901827160799576145> **ENABLED** \n`achievement` `captcha` `hug` `gay` `meeting` `rip` `tweet` `300yr`",)

    const embed4 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`<:8684_greentick:901827160799576145> Ticket &Owner <:8684_greentick:901827160799576145>`)
      .addField("ㅤ⠀⠀⠀ \n <:8684_greentick:901827160799576145> **Ticket** | <:8684_greentick:901827160799576145> **ENABLED**",
        "`add` `close` `delete` `remove` `open` `rename` `setup`\n\n<:8684_greentick:901827160799576145> **Owner** | <:8684_greentick:901827160799576145> **ENABLED** \n`eval` `leaveserver` `serverlist` `status`\n\n<:8684_greentick:901827160799576145>**MUSIC** | <:8684_greentick:901827160799576145> **ENABLED** \n `play` `stop` `skip` `skipto` `pause` `shuffle` `prunning` `loop` `uptime` `ping` `playlist` `move` `queue` `remove` `volume <1-100>`\n\n<:8684_greentick:901827160799576145>**UTILITY** | <:8684_greentick:901827160799576145> **ENABLED** \n`vote` `advice` `findemoji` `members or membercount` `announce`\n\n<:8684_greentick:901827160799576145>**GAMES** | <:8684_greentick:901827160799576145> **ENABLED** \n`8ball`" //bro here 
        )
      .setThumbnail(client.user.displayAvatarURL())

    //--------------------EMBEDS------------------------

    //--------------------Buttons------------------------

    let button1 = new MessageButton()
    .setLabel(`Admin , Auto/Moderation`)
    .setID(`help1`)
    .setEmoji(`903263781969346562`)
    .setStyle("green");

    let button2 = new MessageButton()
    .setLabel(`Info, Help & Economy`)
    .setID(`help2`)
    .setEmoji(`903263781969346562`)
    .setStyle("green");

    let button3 = new MessageButton()
    .setLabel(`Fun & Images`)
    .setID(`help3`)
    .setEmoji(`903263781969346562`)
    .setStyle("green");

    let button4 = new MessageButton()
    .setLabel(`Ticket , Owner, UTILITY, Games & Music`)
    .setID(`help4`)
    .setEmoji(`903263781969346562`)
    .setStyle("green");

    let row = new MessageActionRow()
    .addComponents(button1, button2, button3, button4);

    //--------------------Buttons------------------------

    const MESSAGE = await message.channel.send(embed, row);

    const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter, { time : 120000 });

    collector.on('collect', async (b) => {

        if(b.id == "help1") {

            MESSAGE.edit(embed1, row);
            await b.reply.defer()

        }

        if(b.id == "help2") {
            
            MESSAGE.edit(embed2, row);
            await b.reply.defer()

        }

        if(b.id == "help3") {
            
            MESSAGE.edit(embed3, row);
            await b.reply.defer()

        }

        if(b.id == "help4") {
            
            MESSAGE.edit(embed4, row);
            await b.reply.defer()

        }


    })

    collector.on('end', (b) => {
        MESSAGE.edit(`This help menu is expired! Type the command again to view.`)
    })

    }
  };