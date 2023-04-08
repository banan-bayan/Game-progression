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
  console.log(lengthProgression);
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

const firstTrueAnswerAndQuestion = getAnswerAndQuestion();

const userName = readlineSync.question('Welcome to the Brain Games! May I have your name? ');
console.log(`Hello ${userName}!`);
let answerUser = readlineSync.question(`What number is missing in the progression? \nQuestion: ${firstTrueAnswerAndQuestion.qustionString} \n`);
if (answerUser === firstTrueAnswerAndQuestion.correctNumber) {
  console.log(`Your answer: ${answerUser} Correct!`);
  const secondTrueAnswerAndQuestion = getAnswerAndQuestion();
  answerUser = readlineSync.question(`What number is missing in the progression? \nQuestion: ${secondTrueAnswerAndQuestion.qustionString} \n`);
  if (answerUser === secondTrueAnswerAndQuestion.correctNumber) {
    console.log(`Your answer: ${answerUser} Correct!`);
    const thirdTrueAnswerAndQuestion = getAnswerAndQuestion();
    answerUser = readlineSync.question(`What number is missing in the progression? \nQuestion: ${thirdTrueAnswerAndQuestion.qustionString} \n`);
    if (answerUser === thirdTrueAnswerAndQuestion.correctNumber) {
      console.log(`Your answer: ${answerUser} Correct! \nCongratulations, ${userName}!`);
    } else {
      console.log(`Your answer: ${answerUser}\n '${answerUser}' is wrong answer ;(. Correct answer was '${thirdTrueAnswerAndQuestion.correctNumber}' Lets try again, ${userName}!`);
    }
  } else {
    console.log(`Your answer: ${answerUser} \n '${answerUser}' is wrong answer ;(. Correct answer was '${secondTrueAnswerAndQuestion.correctNumber}' Lets try again, ${userName}!`);
  }
} else {
  console.log(`Your answer: ${answerUser} \n '${answerUser}' is wrong answer ;(. Correct answer was '${firstTrueAnswerAndQuestion.correctNumber}' Lets try again, ${userName}!`);
}
