const { Client, Attachment } = require('discord.js');

const token = (process.env.SECRET_MESSAGE);

const fs = require('fs');

const client = new Client();



client.on('message', (msg) => {

  if (msg.content === '!giveMeEgg') {
    const eggArray = ['./assets/imgs/egg.png', './assets/imgs/eggFace.png', './assets/imgs/eggDwayne.png'];
    let img = eggArray[Math.floor(Math.random()*eggArray.length)];
    const buffer = fs.readFileSync(img);
    const attachment = new Attachment(buffer, img);
    msg.channel.send(attachment);
  }

});

client.on('ready', () => {
  console.log('Bot is now connected');
});

client.login(token);
