const Discord = require('discord.js');
const client = new Discord.Client();

var god;
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  
});


client.on('message', msg => {
    //node let VC = msg.member.voice.channel.members.each(user => console.log(user.id));
    //console.log(VC);
  if (msg.content.startsWith("#")) {
    
  msg.guild.roles.fetch("763466233374048296")
  .then(role =>{ god = role.members.array()
    //console.log(god[6].user.id)
    
   for(i= 0; i < god.length; i++){
console.log(god[i].user )
let dude = god[i];
if(dude.voice.channel){
    dude.voice.setChannel("445070783258165292")
}
//dude.voice.setChannel("740721179249082539")
   }

   msg.reply("The scripters have been moved. ")




  })
  .catch(console.error);  
  
  
    }
  


});

client.login(process.env.TOKEN);