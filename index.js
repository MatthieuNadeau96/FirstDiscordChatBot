const Discord = require('discord.js');

const token = (process.env.SECRET_MESSAGE);

const client = new Discord.Client();

client.on('message', (msg) => {
  if (msg.content === '!egg') {
    msg.channel.send();
  }

});

client.on('ready', () => {
  console.log('Bot is now connected');
});

client.login(token);
