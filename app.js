'use strict';

var confirmQuiz = confirm('Hello, would you like to play a game?');

if(confirmQuiz){
  console.log('Awesome! Let\'s get started!');
}else{
  console.log('Too Bad, starting anyway.');
}

var quizResponse = prompt('Please Answer with Y or N. Does Adam have a dog?');

if(quizResponse.toUpperCase() === 'Y'){
  console.log('Awesome! You are correct!');
}else{
  console.log('Too Bad, you were wrong. Adam has a dog.');
}
