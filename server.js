const Insta = require('@androz2091/insta.js');
const client = new Insta.Client();

client.on('connected', () => {
    console.log(`Logged in as ${client.user.username}`);
});

client.on('messageCreate', async (message) => {
    if (message.author.id === client.user.id) return;

    message.markSeen();

    const content = message.content.toLowerCase();

    // Simple command to reply with '!pong' if the message is '!ping'
    if (content === '!ping') {
        message.reply('!pong');
    }

    // Simple command to greet the user
    if (content.includes('hello') || content.includes('hi')) {
        message.reply(`Hello, ${message.author.username}! How can I assist you today?`);
    }

    // Command to provide information about the bot
    if (content === '!info') {
        message.reply("Welcome to Garuda AI, your friendly Instagram chat bot created by Anirudh Vijay. Garuda AI is here to make your Instagram experience more interactive and enjoyable. You can use various commands to interact with the bot, such as getting a friendly greeting, fetching interesting facts, hearing a good joke, and even receiving the latest date and time. Additionally, you can ask Garuda AI for information about its owner or view a menu of available commands. We're here to assist and entertain you, so feel free to explore the commands and make the most out of your time with Garuda AI! \n Send !menu to view all commands");
    }

    // Command to echo back the user's message
    if (content.startsWith('echo ')) {
        const echoMessage = content.slice(5); // Remove 'echo ' from the message
        message.reply(`You said: "${echoMessage}"`);
    }

    // Command to provide a random fact
    if (content === '!fact') {
        const randomFacts = [
            'Cats sleep for around 70% of their lives.',
            'The Eiffel Tower can be 15 cm taller during the summer due to the expansion of iron in the heat.',
            'Honey never spoils. Archaeologists have even found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.'
        ];
        const randomIndex = Math.floor(Math.random() * randomFacts.length);
        message.reply(`Here's a random fact: ${randomFacts[randomIndex]}`);
    }
    if (content === '!joke') {
      // You can fetch jokes from an API or have a predefined list of jokes
      const jokes = [
          'Why did the scarecrow win an award? Because he was outstanding in his field!',
          'What do you get when you cross a snowman and a vampire? Frostbite!',
          'I told my wife she was drawing her eyebrows too high. She looked surprised!'
      ];
      const randomIndex = Math.floor(Math.random() * jokes.length);
      message.reply(`Here's a joke for you: ${jokes[randomIndex]}`);
  }

  // Command to provide the current date and time
  if (content === '!time') {
      const currentDate = new Date();
      message.reply(`The current date and time is: ${currentDate.toLocaleString()}`);
  }

  if (content === '!owner') {
    const ownerInfo = `
        Owner: Anirudh Vijay
        Instagram: @anirudhvijay_2
        Email: anirudhvijay6900#gmail.com
    `;
    message.reply(ownerInfo);
}

  if (content === '!menu') {
    const commands = [
        '!menu - Display this menu of commands',
        '!ping - Get a pong response',
        '!owner - Owner Related Infos',
        '!info - Learn about the bot',
        '!echo <message> - Echo back your message',
        '!fact - Get a random fact',
        '!joke - Get a random joke',
        '!time - Get the current date and time',
        '!game - Play a game (not implemented yet)',
    ];
    const menuMessage = 'Available commands:\n' + commands.join('\n');
    message.reply(menuMessage);
}

    // Handle other commands or responses here

    // If none of the commands match, you can provide a default response
    // message.reply("I'm not sure how to respond to that. Type '!info' for available commands.");
});

client.login('x.garuda.ai', 'kingOfBotAiWorld');
