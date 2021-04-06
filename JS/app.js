'use strict';

let userName= prompt('What is your name?');

let specialty= prompt('Do you know what is my specialty?','yes,no');
specialty = specialty.toLowerCase();
if(specialty==='yes'){
  alert ('Good!');
  console.log(specialty+' You know what is my specialty');

}
else {
  alert ('I\'m biomedical engineer!');
  console.log(specialty+' You don\'t know what is my specialty');
}

let careerShift= prompt('Do you find the idea of making career shift from engineer to soft developer exciting?','yes,no');
careerShift = careerShift.toLowerCase();
if(careerShift==='yes'){
  alert ('I think so!');
}
else {
  alert ('I\'m not sure!');
}

let ta= prompt ('Is it good to be a TA?','yes,no')
ta = ta.toLowerCase();
if (ta ==='yes'){
  alert ('Good for you!');
  console.log(ta+ ' You like being TA');
}
else{
  alert('Sorry to know that ')
  console.log(ta+ ' You don\'t like being TA');
}

let github= prompt ('do you know my GitHub account?', 'yes,no')
github = github.toLowerCase();
if (github ==='no'){
  alert ('My GitHub account shown in the navbar!')
}
else {
  alert ('Great!')
}

let visit= prompt ('Would you visit the website again?', 'yes,no');
visit = visit.toLowerCase();
alert('Thanks for your time ' +userName);

console.log(careerShift);
console.log(github);
console.log(visit);
