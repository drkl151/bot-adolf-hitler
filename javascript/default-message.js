const blockDefaultMessages = document.querySelector('.default_messages');

const defoultMessage = ['ііі', 'Привет', 'ййй', 'ууу', 'ккк', 'еее',];


defoultMessage.forEach((text, i) => {
    const textBlock = document.createElement('p');
    textBlock.classList.add('text-default_messages');
    textBlock.appendChild(document.createTextNode(text));

    blockDefaultMessages.appendChild(textBlock);
    let textDefaultMessage = [];
    textDefaultMessage.push(textBlock);
    textDefaultMessage.classList = 'message' + i;
});

const textDefaultMessage = document.querySelectorAll('p');
textDefaultMessage.forEach(el => {

    el.addEventListener('click', () => {
        generateMessage(el.textContent);
    })
});