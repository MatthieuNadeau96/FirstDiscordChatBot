const { Client, Attachment } = require('discord.js');

const token = (process.env.SECRET_MESSAGE);

const fs = require('fs');

const client = new Client();

client.on('message', (msg) => {

  if (msg.content === '!giveMeEgg') {
    const eggArray = [
      './assets/imgs/egg.png',
      './assets/imgs/eggFace.png',
      './assets/imgs/eggDwayne.png',
      './assets/imgs/eggBruceCrack.jpg',
      './assets/imgs/eggCage.jpg',
      './assets/imgs/eggComic.jpg',
      './assets/imgs/eggDumpty.jpg',
      './assets/imgs/eggFrankVolcano.png',
      './assets/imgs/eggHead.jpg',
      './assets/imgs/eggPinHead.jpg',
      './assets/imgs/eggRock.jpg',
      './assets/imgs/eggRockwithFeet.jpg',
      './assets/imgs/eggSteve.png',
      './assets/imgs/eggSunnySideUp.jpg',
      './assets/imgs/eggWhat.jpg',
      './assets/imgs/eggFacePan.jpg'
    ];
    let img = eggArray[Math.floor(Math.random()*eggArray.length)];
    const buffer = fs.readFileSync(img);
    const attachment = new Attachment(buffer, img);
    msg.channel.send(`Here's your egg ${msg.author} `, attachment);
  }

});

client.on('ready', () => {
  console.log('Bot is now connected');
});

client.login(token);
