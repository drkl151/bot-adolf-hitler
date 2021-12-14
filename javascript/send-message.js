const chatBlock = document.querySelector(".chat-block");
const userMessage = document.querySelector(".input-message");
const buttonSendMessage = document.querySelector(".input-block__send-message");

//sending a message on 'enter' (отправка сообщения на 'enter')
userMessage.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    generateMessage(userMessage.value);
    userMessage.value = "";
  }
});

//sending a message on buttonSendMessage (отправка сообщения на buttonSendMessage)
buttonSendMessage.addEventListener("click", () => {
  generateMessage(userMessage.value);
  userMessage.value = "";
});

// generate message (создание сообщений)
function generateMessage(userMessage) {
  if (userMessage.trim() === "") {
    return;
  }

  const lowerCaseMessage = userMessage.toLowerCase().replace(/ё/g, "е");
  const userReplica = chatBlock.appendChild(document.createElement("div"));
  const botReplica = chatBlock.appendChild(document.createElement("div"));

  userReplica.classList.add("message-user");
  botReplica.classList.add("message-bot");
  userReplica.textContent = userMessage;

  //object array filter (фильтр массива объектов) [bot-commands.js]
  const filterMessage = commands.filter((message) => {
    return typeof message.userMessage === "string"
      ? message.userMessage === lowerCaseMessage
      : message.userMessage.includes(lowerCaseMessage);
  });

  //receiving a random message from an array with bot replicas (получение случайного сообщения из массива с репликами бота)
  if (filterMessage.length) {
    const botMessage = filterMessage[0].botMessage;
    if (typeof botMessage === "string") {
      botReplica.textContent = botMessage;
    } else {
      botReplica.textContent =
        botMessage[Math.floor(Math.random() * botMessage.length)];
    }
  } else {
    botReplica.textContent =
      unknownCommand[Math.floor(Math.random() * unknownCommand.length)];
  }

  //bot actions (действия бота) [bot-action.js]
  //shows the room (показывает комнату)
  if (lowerCaseMessage === "покажи комнату") {
    setTimeout(function () {
      showsTheRoom();
    }, 500);
  }

  //bot song (бот поёт)
  const botSongArray = [
    {
      timeCode: 0,
      message: "пой",
    },
    {
      timeCode: 12.5,
      message: "фотографирую закат",
    },
    {
      timeCode: 36.7,
      message: "в моем сердце",
    },
    {
      timeCode: 42.7,
      message: "все не вечно",
    },
  ];

  botSongArray.forEach((time) => {
    if (lowerCaseMessage.includes(time.message)) {
      botSong(time.timeCode);
    }
  });

  if (lowerCaseMessage === "что такое токийский гуль?") {
    setTimeout(function () {
      botTalkAbout(
        `Гуль это - не Канеки Кен на аве, не zxc каждую катку, не черные
      ногти и белые волосы. <br> Гуль - это идеология,это вера, это культура. <br>
      Ты не в праве называться Гулем, если не знаешь кодекса.`,
        "./img/about/about-ghoul-img.png"
      );
    }, 800);
  }

  scrollToBottom();
}

//scroll position at bottom (сохранять позицию скролла внизу)
const scrollToBottom = () => {
  chatBlock.scrollTop = chatBlock.scrollHeight;
};