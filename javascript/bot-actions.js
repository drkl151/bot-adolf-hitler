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
}