#!/usr/bin/env node;
let startNumber = Math.floor(Math.random() * 10) + 1;
let progressionNumber = Math.floor(Math.random() * 10) + 1;
let stringOfNumbers = [];

for (let i = 0; stringOfNumbers.length  < 24; i ++) {
   startNumber += progressionNumber;
   stringOfNumbers +=   startNumber + ' ';
};

let arrayOfNumbers = stringOfNumbers.split(' ');
arrayOfNumbers.pop();


const getRndInteger = (min, max) =>  Math.floor(Math.random() * (max - min) ) + min;
let mysteryDots = '..';
let correctIndexAnswer = getRndInteger(0, arrayOfNumbers.length);
let correctNumber = arrayOfNumbers[correctIndexAnswer];
console.log(correctNumber);
delete arrayOfNumbers[correctIndexAnswer]; 
arrayOfNumbers.splice(correctIndexAnswer, 1, mysteryDots);
console.log(arrayOfNumbers);
let stringOfNumbersWithoutAnswer = arrayOfNumbers.join(' ');


const userName = prompt('Welcome to the Brain Games! May I have your name?');
alert('Hello, ' + userName + '!');
let counterQuestions = 0;

let question =   prompt('What number is missing in the progression? \n Question: ' + stringOfNumbersWithoutAnswer, '');
if (question === correctNumber) {
  alert('Your answer: ' + question + ' Correct!');
} else {
   alert('Your answer: ' + "'" + question  + "' " + '\n' + "'" + question + "'" + ' is wrong answer ;(. Correct answer was ' + "'" + correctNumber + "'" + '\n' + " Let's try again, " + userName + '!');
}