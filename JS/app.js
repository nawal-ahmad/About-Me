'use strict';

let userName= prompt('What is your name?');

let score=0;

function qusOne(){
let specialty= prompt('Do you know what is my specialty?');
specialty = specialty.toLowerCase();
if((specialty==='yes')||(specialty==='y')){
  alert ('Aha I see!');
  console.log(specialty+' You know what is my specialty');
  score++;
  console.log(' Your score got = ' + score);
}
else {
  alert ('I\'m biomedical engineer!');
  console.log(specialty+' You don\'t know what is my specialty');
  console.log(' Your score still = ' + score);
}
}
 qusOne();

function qusTwo(){
let careerShift= prompt('Do you find the idea of making career shift from engineer to soft developer exciting?');
careerShift = careerShift.toLowerCase();
if((careerShift==='yes')||(careerShift==='y')){
  alert ('I think so too!');
  score++;
  console.log(' Your score got = ' + score);
}
else {
  alert ('Oh, I\'m not sure!');
  console.log(' Your score still = ' + score);
}
}
qusTwo();
/*let ta= prompt ('Is it good to be a TA?')
ta = ta.toLowerCase();
if (ta ==='yes'){
  alert ('Good for you!');
  console.log(ta+ ' You like being TA');
}
else{
  alert('Sorry to know that ')
  console.log(ta+ ' You don\'t like being TA');
}
*/
 function qusThree(){
let github= prompt ('do you know my GitHub account?', 'yes,no')
github = github.toLowerCase();
if ((github ==='no')||(github ==='n')){
  alert ('You can find it shown in the navbar!')
  console.log(' Your score still = ' + score);
}
else {
  alert ('Great!')
  score++;
  console.log(' Your score got = ' + score);
}
}
qusThree();


let car= prompt('Do I have a car?');
car = car.toLowerCase();
if((car==='yes')||(car==='y')){
  alert ('Unfortunately I don\'t have a car!');
  console.log(' Your score still = ' + score);
}
else {
  alert ('Right I don\'t have a car :\(');
  score++;
  console.log(' Your score got = ' + score);
}

let pet= prompt('Do I have a pet?');
pet = pet.toLowerCase();
if((pet==='yes')||(pet==='y')){
  alert ('True, I have a lovely cat!');
  score++
  console.log(' Your score got = ' + score);
}
else {
  alert ('Wrong, I have a lovely cat!');
  console.log(' Your score still = ' + score);
}

var i=0;
let height=null;
for(i=0; i<4; i++){
  let height=prompt('guess what is my height (cm)?','150-180');
  if (parseInt(height)===167) {
    alert('Wow! You guessed it right!')
    score++;
    console.log(' Your score got = ' + score);
    break;
  }
  else if(parseInt(height)>170){
  alert ('too high!');
  console.log(' Your score still = ' + score);
  }
  else if(parseInt(height)<160){
  alert('too low!');
  console.log(' Your score still = ' + score);
  }
  else {
  alert('Your guess is close to the correct hight!')
  console.log(' Your score still = ' + score);
  }
  console.log(parseInt(height)); 
}
alert ('The correct answer is 167 cm!')


let favCity = ['Rome','Paris','Madrid','Oslo'];
let favCityGuess = '';
for (let j=0; j<6; j++) {
  let favCityGuess=prompt('Guess one of the cities I would like to visit in Europe?','first letter should be capital');
  for (let i= 0;i<favCity.length;i++)  {
    if(favCityGuess===favCity[i]){
      alert('That\'s correct!');
      score++;
      console.log(' Your score got = ' + score);
      console.log(favCityGuess);
      j=22; 
      break;
    }
    // else{ 
    //   alert('Try again!');
    //   console.log(favCityGuess);
    //   console.log(' Your score still = ' + score);  
    // }
  }
}
  

alert('The correct answer is one of these cities: ' + favCity[0] + ', ' + favCity[1] + ', ' + favCity[2] + ' and '+ favCity[3]);
alert('Your final score is ' + score +' out of 7');
alert('Thanks for your time ' +userName);

/*let visit= prompt ('Would you visit this website again?');
visit = visit.toLowerCase();*/

