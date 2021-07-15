const blockDefaultMessages = document.querySelector('.default-messages');
let defoultMessage = ['Привет', 'Как дела?', 'Кто ты?', 'Как стать dead inside?', 'Где ты живешь?', 'Ты веришь в любовь?', 'Покажи комнату',];


defoultMessage.forEach((text, i) => {
    const textBlock = document.createElement('p');
    textBlock.classList.add('text-default-messages');
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

// console.log(defoultMessage);
console.log(textDefaultMessage);


