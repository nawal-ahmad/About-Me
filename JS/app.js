'use strict';

let userName= prompt('What is your name?');

let userAge= prompt('Are you over 18 years old?', 'yes,y,no,n');
userAge = userAge.toLowerCase();
if (userAge ==='yes'||userAge==='y'){ 
  'Welcome '+ userName
}
else {
  alert ('Sorry but you shoud be over than 18!')
}

let mature= prompt('Are you responsible for yourself?','yes,y,no,n');
mature = mature.toLowerCase();
if(mature==='yes'||mature==='y'){
  alert ('Wow impressive!');
}


let english= prompt ('Do you speak English well?','yes,y,no,n')
english = english.toLowerCase();
if (english ==='yes'|| english ==='y'){
  alert ('Good for you!')
}
else{
  alert('It\'s the first world language How about trying to learn it?')
}

let travel= prompt ('Have you ever traveled?', 'yes,y,no,n')
travel = travel.toLowerCase();
if (travel ==='yes'||travel==='y'){
  alert ('Nice!')
}
else{
  alert ('Wish you do soon!')
}

let visit= prompt ('Would you visit the website again?', 'yes,y,no,n');
visit = visit.toLowerCase();
alert('Thanks for your time ' +userName);

console.log(userAge, "Correct");
console.log(mature, 'Correct');
console.log(english, 'Correct');
console.log(travel, 'Correct');
console.log(visit, 'Correct');
