const buttonBack = document.querySelector(".button-back");
const modalWindow = document.querySelector(".modal-window");
const informationAbout = document.querySelector(".information-about");
const informationAboutContent = document.querySelector(
  ".information-about__content"
);
const informationAboutCloseButton = document.querySelector(
  ".information-about__close-button"
);

// create new default message (создать новое сообщение по умолчанию)
function createNewDefaultMessage(element, textContent) {
  // element name, its value (text)
  element.classList.add("text-default-messages");
  element.appendChild(document.createTextNode(textContent));
  blockDefaultMessages.prepend(element);
}

//create new user replica (создать новую реплику пользователя)
function createNewUserReplica(messageText) {
  const userReplica = chatBlock.appendChild(document.createElement("div"));
  userReplica.classList.add("message-user");
  userReplica.textContent = messageText;
}

//create new bot replica (создать новую реплику бота)
function createNewBotReplica(botMessageText) {
  const chatBlock = document.querySelector(".chat-block");
  const botReplica = chatBlock.appendChild(document.createElement("div"));
  botReplica.classList.add("message-bot");
  botReplica.textContent = botMessageText;
}

//shows the room (показать комнату)
function showsTheRoom() {
  const stageBackground = document.querySelector(".stage-background");
  const character = document.querySelector(".character");
  const messageWindowBlock = document.querySelector(".message-window-block");

  stageBackground.style.backgroundImage =
    "url(./img/backgrounds/background-side-plan.jpeg)";
  character.style.display = "none";
  messageWindowBlock.style.display = "none";

  buttonBack.style.display = "block";

  buttonBack.addEventListener("click", () => {
    stageBackground.style.backgroundImage =
      "url(./img/backgrounds/background-foreground.jpg)";
    character.style.display = "block";
    messageWindowBlock.style.display = "flex";
    buttonBack.style.display = "none";
  });
}

//bot song (бот поет песню)
function botSong(time) {
  audio.currentTime = time;
  audio.play();
  const stopTheSongBlock = document.createElement("p");
  createNewDefaultMessage(stopTheSongBlock, "Всё хватит");
  blockDefaultMessages.scrollTo(0, 0);

  stopTheSongBlock.addEventListener("click", () => {
    createNewUserReplica("Всё хватит");
    audio.pause();
    audio.currentTime = 0;
    stopTheSongBlock.remove();
    createNewBotReplica(")");
    scrollToBottom();
  });
}

//bot talk about (бот рассказывает о)
function botTalkAbout(informationText, informationImg) {
  modalWindow.style.display = "flex";
  informationAbout.style.display = "flex";

  let textInformationAbout = null;
  let imgInformationAbout = null;

  if (informationImg) {
    imgInformationAbout = informationAboutContent.appendChild(
      document.createElement("img")
    );
    imgInformationAbout.src = informationImg;
    imgInformationAbout.alt = informationImg;
    imgInformationAbout.classList.add("content__img");
  }

  textInformationAbout = informationAboutContent.appendChild(
    document.createElement("p")
  );
  textInformationAbout.innerHTML = informationText;
  textInformationAbout.classList.add("content__text");

  informationAboutCloseButton.addEventListener("click", () => {
    modalWindow.style.display = "none";
    informationAbout.style.display = "none";

    textInformationAbout.remove();
    imgInformationAbout.remove();
  });
}
