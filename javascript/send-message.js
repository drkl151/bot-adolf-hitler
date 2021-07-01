const userMessage = document.querySelector('#input-message');
const buttonSendMessage = document.querySelector('.send-message');
const chatBlock = document.querySelector('.chat_block');

userMessage.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        generateMessage(userMessage.value);
        userMessage.value = '';
    }
})

buttonSendMessage.addEventListener('click', () => {
    generateMessage(userMessage.value);
    userMessage.value = '';
}
)


function generateMessage(userMessage) {
    if (userMessage.trim() === '') {
        return
    }

    const lowerCaseMessage = userMessage.toLowerCase();
    const userReplica = chatBlock.appendChild(document.createElement('div'));
    const botReplica = chatBlock.appendChild(document.createElement('div'));

    userReplica.classList.add('message-user');
    botReplica.classList.add('message-bot');
    userReplica.textContent = userMessage;

    //object array filter (bot-commands.js) 
    const filterMessage = commands.filter((message) => {
        return typeof message.userMessage === 'string' ? (
            message.userMessage === lowerCaseMessage
        ) : (
            message.userMessage.includes(lowerCaseMessage)
        )
    });

    if (filterMessage.length) {
        const botMessage = filterMessage[0].botMessage;
        if (typeof botMessage === 'string') {
            botReplica.textContent = botMessage;
        } else {
            botReplica.textContent = botMessage[Math.floor(Math.random() * botMessage.length)];
        }

    } else {
        botReplica.textContent = unknownCommand[Math.floor(Math.random() * unknownCommand.length)];
    }

    chatBlock.scrollTop = chatBlock.scrollHeight;
}




