'use strict';

const randomNumber = Math.ceil(Math.random() * 100);
const userNumber = prompt('Загадано число от 1 до 100, попробуй отгадать его');

const getUserNumber = userNumber => {
  if (Number.isNaN(+userNumber)) {
    userNumber = prompt('Введи число!');
    return getUserNumber(userNumber);
  } else {
    return +userNumber;
  }
};

const gameGuessNumber = (number, guess) => {
  guess = getUserNumber(guess);

  if (guess === null) {
    console.log('Игра закончена');
    return;
  }

  if (guess === number) {
    alert('Угадал!');
    console.log('number: ', number);
    console.log('guess: ', guess);
    return;
  }

  if (guess > number) {
    alert('Меньше!');
    gameGuessNumber(number, prompt('Введи число!'));
  }

  if (guess < number) {
    alert('Больше!');
    gameGuessNumber(number, prompt('Введи число!'));
  }
};

gameGuessNumber(randomNumber, userNumber);


