#!/usr/bin/env node
import readlineSync from 'readline-sync';

let startNumber = Math.floor(Math.random() * 10) + 1;
const progressionNumber = Math.floor(Math.random() * 10) + 1;
let stringOfNumbers = [];

for (let i = 0; stringOfNumbers.length < 24; i += 1) {
  startNumber += progressionNumber;
  stringOfNumbers += `${startNumber} `;
}

const arrayOfNumbers = stringOfNumbers.split(' ');
arrayOfNumbers.pop();

// console.log(arrayOfNumbers);

const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const mysteryDots = '..';
const correctIndexAnswer = getRndInteger(0, arrayOfNumbers.length);
const correctNumber = arrayOfNumbers[correctIndexAnswer];

// console.log(correctNumber);

delete arrayOfNumbers[correctIndexAnswer];
arrayOfNumbers.splice(correctIndexAnswer, 1, mysteryDots);

// console.log(arrayOfNumbers);

const stringOfNumbersWithoutAnswer = arrayOfNumbers.join(' ');

const userName = readlineSync.question('Welcome to the Brain Games! May I have your name? ');
console.log(`Hello ${userName}!`);
const vopros = readlineSync.question(`What number is missing in the progression? \nQuestion: ${stringOfNumbersWithoutAnswer} \n`);
if (vopros === correctNumber) {
  console.log(`Your answer: ${vopros} Correct!`);
} else {
  console.log(`Your answer: ${vopros} \n ${vopros} is wrong answer ;(. Correct answer was ${correctNumber} Lets try again, ${userName}!`);
}
