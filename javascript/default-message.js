const blockDefaultMessages = document.querySelector(".default-messages");
let defaultMessage = [
  "Привет",
  "Как дела?",
  "Кто ты?",
  "Как стать dead inside?",
  "Фотографирую закат",
  "Что такое токийский гуль?",
  "Покажи комнату",
];

//generating default message (генерация сообщений по умолчанию)
defaultMessage.forEach((text, i) => {
  const textBlock = document.createElement("p");
  textBlock.classList.add("text-default-messages");
  textBlock.appendChild(document.createTextNode(text));

  blockDefaultMessages.appendChild(textBlock);
  let textDefaultMessage = [];
  textDefaultMessage.push(textBlock);
  textDefaultMessage.classList = "message" + i;
});

//send default message on click (отправить сообщение по умолчанию при нажатии)
const textDefaultMessage = document.querySelectorAll("p");
textDefaultMessage.forEach((el) => {
  el.addEventListener("click", () => {
    generateMessage(el.textContent);

    const elementWidth = el.offsetWidth;
    if (el.textContent.toLocaleLowerCase() !== "фотографирую закат") {
      blockDefaultMessages.scrollBy(elementWidth + 18, elementWidth);
    }
  });
});