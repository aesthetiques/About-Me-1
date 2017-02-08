'use strict';

var confirmQuiz = confirm('Hello, would you like to play a game?');

if(confirmQuiz){
  console.log('Awesome! Let\'s get started!');
}else{
  // The user isn't interested in me or the quiz.
  console.log('Okay...');
  document.write('Okay...');
}

// The user wants to do the quiz.
if(confirmQuiz){
  // Make the quiz a bit more friendly.
  var userName = prompt('First, what is your name?');
  alert('Okay ' + userName + ', answer with either Y or N.');

  var quizResponse = prompt('');

  if(quizResponse.toUpperCase() === 'Y'){
    console.log('Awesome! You are correct!');
  }else{
    console.log('Too Bad, you were wrong. Adam has a dog.');
  }

}
