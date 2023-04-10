#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;
const getAnswerAndQuestion = () => {
  let startNumber = getRandomNumber();
  const progressionNumber = getRandomNumber();
  const minLengthProgression = 15;
  const maxLengthProgression = 29;
  const lengthProgression = getRndInteger(minLengthProgression, maxLengthProgression);
  // console.log(lengthProgression);
  let stringOfNumbers = [];
  for (let i = 0; stringOfNumbers.length < lengthProgression; i += 1) {
    startNumber += progressionNumber;
    stringOfNumbers += `${startNumber} `;
  }
  const arrayOfNumbers = stringOfNumbers.split(' ');
  arrayOfNumbers.pop();
  const mysteryDots = '..';
  const correctIndexAnswer = getRndInteger(0, arrayOfNumbers.length);
  const correctNumber = arrayOfNumbers[correctIndexAnswer];
  delete arrayOfNumbers[correctIndexAnswer];
  arrayOfNumbers.splice(correctIndexAnswer, 1, mysteryDots);
  const stringOfNumbersWithoutAnswer = arrayOfNumbers.join(' ');

  return {
    correctNumber,
    qustionString: stringOfNumbersWithoutAnswer,
  };
};

// const userName = readlineSync.question('Welcome to the Brain Games! May I have your name? ');
// console.log(`Hello ${userName}!`);
const userName = 'dima';
let counter = 0;
function questionsForUser() {
  const trueAnswerAndQuestion = getAnswerAndQuestion();
  const answerUser = readlineSync.question(`What number is missing in the progression? \nQuestion: ${trueAnswerAndQuestion.qustionString} \n`);
  if (answerUser === trueAnswerAndQuestion.correctNumber) {
    console.log(`Your answer: ${answerUser} Correct!`);
    counter += 1;
    if (counter >= 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
    questionsForUser(getAnswerAndQuestion());
  } else {
    return console.log(`Your answer: ${answerUser}\n
    '${answerUser}' is wrong answer ;(. Correct answer was '${trueAnswerAndQuestion.correctNumber}' Lets try again, ${userName}!`);
  }
}
questionsForUser();
