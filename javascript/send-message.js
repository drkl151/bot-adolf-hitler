const userMessage = document.querySelector('#input-message');
const buttonSendMessage = document.querySelector('.send-message');
const chatBlock = document.querySelector('.chat_block');

buttonSendMessage.addEventListener('click', () => {
    sendMessage();
    userMessage.value = '';
}
)

function sendMessage() {
    if (userMessage.value.trim() === '') {
        return
    }

    const userReplica = chatBlock.appendChild(document.createElement('div'));
    userReplica.classList.add('message-user');
    userReplica.innerHTML = userMessage.value;

    botResponse();
}

function botResponse() {
    const botReplica = chatBlock.appendChild(document.createElement('div'));
    botReplica.classList.add('message-bot');

    commands.forEach(element => {
        if (userMessage.value === element.userMessage) {
            botReplica.textContent = element.botMessage;
        } else {
            botReplica.textContent = 'Такой команды нет'
        }
        console.log(element);
        console.log(element.userMessage);
    });
  
}




