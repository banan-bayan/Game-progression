#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;
const getAnswerAndQuestion = () => {
  let startNumber = getRandomNumber();
  const progressionNumber = getRandomNumber();
  const minLengthProgression = 5;
  const maxLengthProgression = 10;
  const lengthProgression = getRndInteger(minLengthProgression, maxLengthProgression);

  // let stringOfNumbers = [];
  const arrayOfNumbers = new Array();
  for (let i = 0; i < lengthProgression; i += 1) {
    arrayOfNumbers[i] = startNumber;
    startNumber += progressionNumber;
  }
  // arrayOfNumbers = arrayOfNumbers.split(' ');
  // arrayOfNumbers.pop();
  const mysteryDots = '..';
  const correctIndexAnswer = getRndInteger(0, arrayOfNumbers.length);
  let correctNumber = arrayOfNumbers[correctIndexAnswer];
  correctNumber = String(correctNumber);
  delete arrayOfNumbers[correctIndexAnswer];
  arrayOfNumbers.splice(correctIndexAnswer, 1, mysteryDots);
  // console.log(arrayOfNumbers);
  const stringOfNumbersWithoutAnswer = arrayOfNumbers.join(' ');
  // console.log(stringOfNumbersWithoutAnswer);

  // console.log(correctNumber);
  // console.log(typeof correctNumber);

  return {
    correctNumber,
    questionString: stringOfNumbersWithoutAnswer,
  };
};

const userName = readlineSync.question('Welcome to the Brain Games! May I have your name? ');
console.log(`Hello ${userName}!`);
let counter = 0;
function questionsForUser() {
  const trueAnswerAndQuestion = getAnswerAndQuestion();
  const answerUser = readlineSync.question(`What number is missing in the progression? \nQuestion: ${trueAnswerAndQuestion.questionString} \n`);
  if (answerUser === trueAnswerAndQuestion.correctNumber) {
    console.log(`Your answer: ${answerUser} Correct!`);
    counter += 1;
    if (counter >= 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
    // console.log(answerUser);
    // console.log(typeof answerUser);
    questionsForUser(getAnswerAndQuestion());
  } else {
    return console.log(`Your answer: ${answerUser}\n
    '${answerUser}' is wrong answer ;(. Correct answer was '${trueAnswerAndQuestion.correctNumber}' Lets try again, ${userName}!`);
  }
  return undefined;
}
questionsForUser();
