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
  const arrayOfNumbers = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    arrayOfNumbers[i] = startNumber;
    startNumber += progressionNumber;
  }
  const mysteryDots = '..';
  const correctIndexAnswer = getRndInteger(0, arrayOfNumbers.length);
  let correctNumber = arrayOfNumbers[correctIndexAnswer];
  correctNumber = String(correctNumber);
  delete arrayOfNumbers[correctIndexAnswer];
  arrayOfNumbers.splice(correctIndexAnswer, 1, mysteryDots);
  const stringOfNumbersWithoutAnswer = arrayOfNumbers.join(' ');
  return {
    correctNumber,
    questionString: stringOfNumbersWithoutAnswer,
  };
};

const userName = readlineSync.question('Welcome to the Brain Games! May I have your name? ');
console.log(`Hello ${userName}!`);
let counterQuestions = 3;
function questionsForUser() {
  const trueAnswerAndQuestion = getAnswerAndQuestion();
  const answerUser = readlineSync.question(`What number is missing in the progression? \nQuestion: ${trueAnswerAndQuestion.questionString} \n`);
  if (answerUser === trueAnswerAndQuestion.correctNumber) {
    console.log(`Your answer: ${answerUser} Correct!`);
    counterQuestions -= 1;
    if (counterQuestions <= 0) {
      return console.log(`Congratulations, ${userName}!`);
    }
    questionsForUser(getAnswerAndQuestion());
  } else {
    return console.log(`Your answer: ${answerUser}\n'${answerUser}' is wrong answer ;(. Correct answer was '${trueAnswerAndQuestion.correctNumber}' Lets try again, ${userName}!`);
  }
  return undefined;
}
questionsForUser();
