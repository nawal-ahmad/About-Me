'use strict';

let userName= prompt('What is your name?');

let userAge= prompt('Are you over 18 years old?', 'yes, no');
if (userAge>18){
  'Welcome to the Caffeine House '+ userName
}

let mature= prompt('Are you responsible for yourself?','yes , no');
if(mature==='yes'){
  alert ('Wow impressive!');
}


let english= prompt ('Do you speak English well?','yes, no')
if (english==='yes'){
  alert ('Good for you!')
}
else{
  alert('It\'s the first world language How about trying to learn it?')
}

let travel= prompt ('Have you ever traveled?', 'yes, no')
if (travel ==='yes'){
  alert ('Nice!')
}
else{
  alert ('Wish you do soon!')
}

let visit= prompt ('Would you visit the website again?', 'yes, no')

alert('Thanks for your time ' +userName)

userAge = userAge.toLowerCase();
mature = mature.toLowerCase();
english = english.toLowerCase();
travel = travel.toLowerCase();
visit = visit.toLowerCase();

console.log(userAge, "Correct")
console.log(mature, 'Correct')
console.log(english, 'Correct')
console.log(travel, 'Correct')
console.log(visit, 'Correct')

