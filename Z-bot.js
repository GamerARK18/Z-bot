// Calling the package
var Discord = require('discord.js');
var bot = new Discord.Client();
var fs = require('fs');

// JSON Files
let userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf8' )); // This calls the JSON file

// Listener Event: Message Recieved (This will run every time a message is recieved)
bot.on('message', message => {

  // Variables
  let sender = message.author; // The person who sent the Message
  let msg = message.content.toUpperCase(); // Takes the message, and makes it all uppercase so nothing is case sensitive
  let prefix = 'Z-'; // The text before commands, you can set this to what ever you want

  // Events
  if (!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {}; // This creates a json file for their user + guild, if one is not made already.
  if (!userData[sender.id + message.guild.id].money) userData[sender.id + message.guild.id].money = 0; // This creates a money object for them if they don't have one already. '0' is the money they start out with.
  if (!userData[sender.id + message.guild.id].resources) userData[sender.id + message.guild.id].resource = 0; // This creates a resource object for them if they don't have one already. '0' is the amount of resources they start out with.

  fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => { // This writes the changes we just made to the JSON file
      if (err) console.error(err);
  });
  // Commands

  // Ping
  if (msg === prefix + 'PING') {
    message.channel.send('Pong!'); // Sends message to the channel, with the contents: Pong!
  }

  // Acaron
  if (msg === prefix + 'ACARON') {
    message.channel.send('Why has thou summoned my father?');
  }

  // Pototo is a bum
  if (msg === prefix + 'POTOTO') {
    message.channel.send('Bum.');
  }

  // The Ultimate android
  if (msg === prefix + 'ANDROID') {
    message.channel.send('... It is Android Z, you incompetent mortal. One should not mock the ultimate creation so openly... for, I AM THE PINACLE OF SCIENCE!')
  }

  // Money and Resource Balance
  if (msg === prefix + 'ZENI' || msg === prefix + 'BALANCE' || msg === prefix + 'RESOURCES') {
    message.channel.send({embed:{
      title: "Balance",
      colour:0xF1C40F,
      fields:[{
        name: "Account Holder",
        value:message.author.username,
        inline:true
      },
      {
      name: "Zeni",
      value:userData[sender.id + message.guild.id].money,
      inline:true
      },
      {
      name:"Resources",
      value:userData[sender.id + message.guild.id].resource,
      inline:true
    }]
  }})
}

});

// This code runs when the bot turns on
bot.on('ready', () => {
  console.log('Economy Launched...');
});

// Login
bot.login('NDgyMTk1MDQyMzAwMDY3ODUx.Dn_vdQ.7p5Mpw5KrqStA3mbofhZrnJ34Xg')
