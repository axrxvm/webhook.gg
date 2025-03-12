const Discord = require(`discord.js`)
const readline = require(`readline`)

// Declare Readline
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
 *
 *  WEBHOOK.GG - Made with ❤ by Aarav Mehta 
 *  Aarav Mehta - https://aaravm.me/
 *
 */


console.log("[NodeJS Runtime Enviroment] Welcome to NodeJS Engine. Starting application.")
rl.question(`[webhook.gg] The Webhook URL you want to send messages to :\n`, url => {
  let urlData = url
  let tokenAndID = urlData.split(`/`)
  rl.question(`[webhook.gg] What should be the name of the webhook user :\n`, username => {
    let usernameData = username
    rl.question(`[webhook.gg] What should be the Avatar of the Webhook user :\n`, avatar => {
      let avatarData = avatar
      rl.question(`[webhook.gg] What is the message to send through the Webhook User :\n`, async message => {
        let messageData = message
        rl.question(`[webhook.gg] How many times the message is to be send :\n`, async times => {
          if (isNaN(times)) {
            console.log(`[webhook.gg] ERROR : That is not a Valid Number. Exiting`);
            console.log('[Node.js Runtime Enviroment] Application Exited! Closing the engine.')
            process.exit();
          }
          let i = 0;
          const webhookClient = new Discord.WebhookClient(tokenAndID[5], tokenAndID[6]);
          do {
            await webhookClient.send(`${messageData}`, {
              username: usernameData,
              avatarURL: avatarData
            })
            rl.close()
            console.log(`[webhook.gg] Sent ${message} to your webhook!`)
            i++
          } while(i != times);
          console.log("[NodeJS Runtime Enviroment] Process Completed! Closing NodeJS Engine Now!")
          process.exit()
        })
      })
    });
  });
});