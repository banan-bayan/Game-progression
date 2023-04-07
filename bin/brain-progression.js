#!/usr/bin/env node
const readlineSync = require('readline-sync');

const user = readlineSync.question('May I have your name? ');
console.log(`Hi ${user}!`);
const favFood = readlineSync.question('What is your favorite food? ', {
  hideEchoBack: true,
});
console.log(`Oh, ${user} loves ${favFood}!`);
