const { Client, Attachment } = require('discord.js');

const token = (process.env.SECRET_MESSAGE);

const fs = require('fs');

const client = new Client();

client.on('message', (msg) => {
  if (msg.content === '!egg') {
    const buffer = fs.readFileSync('./assets/imgs/egg.png');
    const attachment = new Attachment(buffer, './assets/imgs/egg.png')
    msg.channel.send(attachment);
  }

  if (msg.content === '!eggFace') {
    const buffer = fs.readFileSync('./assets/imgs/eggFace.png');
    const attachment = new Attachment(buffer, './assets/imgs/eggFace.png')
    msg.channel.send(attachment);
  }

  if (msg.content === '!dwayne') {
    const buffer = fs.readFileSync('./assets/imgs/dwayne.png');
    const attachment = new Attachment(buffer, './assets/imgs/dwayne.png')
    msg.channel.send(attachment);
  }

});

client.on('ready', () => {
  console.log('Bot is now connected');
});

client.login(token);
