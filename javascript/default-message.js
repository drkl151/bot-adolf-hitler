const defoultMessage = ['Привет', 'Привет', 'hello', 'faccccc','hello', 'faccccc',];

const blockDefaultMessages = document.querySelector('.default_messages');
const textDefaultMessage = document.querySelectorAll('p');



defoultMessage.forEach(text => {
    const textBlock = document.createElement('p');
    textBlock.classList.add('text-default_messages');
    textBlock.appendChild(document.createTextNode(text));


    blockDefaultMessages.appendChild(textBlock);
    console.log(textDefaultMessage);
});
