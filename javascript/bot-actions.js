const buttonBack = document.querySelector('.button-back');

function showsTheRoom() {
  const stageBackground = document.querySelector('.stage-background');
  const character = document.querySelector('.character');
  const messageWindowBlock = document.querySelector('.message-window-block');

  stageBackground.style.backgroundImage = 'url(./img/backgrounds/background-side-plan.jpeg)';
  character.style.display = 'none';
  messageWindowBlock.style.display = 'none';

  buttonBack.style.display = 'block';

  buttonBack.addEventListener('click', () => {
    stageBackground.style.backgroundImage = 'url(./img/backgrounds/background-foreground.jpg)';
    character.style.display = 'block';
    messageWindowBlock.style.display = 'flex';
    buttonBack.style.display = 'none';
  })
}

function botSong() {
  audio.play();
  console.log(defoultMessage);

  const stopTheSongBlock = document.createElement('p');
  stopTheSongBlock.classList.add('text-default-messages');
  stopTheSongBlock.appendChild(document.createTextNode('stop'));


  blockDefaultMessages.prepend(stopTheSongBlock);

  stopTheSongBlock.addEventListener('click', () => {
    const userReplica = chatBlock.appendChild(document.createElement('div'));
    userReplica.classList.add('message-user');

    userReplica.textContent = 'stop';
    audio.pause();
    stopTheSongBlock.remove();
  })

  console.log(textDefaultMessage);
}