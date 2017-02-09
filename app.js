'use strict';

var confirmQuiz = confirm('Hello, would you like to play a game?');

// The section where the results of the quiz will be displayed.
var quizResultsSection = document.getElementById('Quiz_Results');

if(confirmQuiz){
  console.log('Awesome! Let\'s get started!');
}else{
  // The user isn't interested in me or the quiz.
  console.log('Okay... :()');
  quizResultsSection.innerHTML = 'Okay... :()';
}

// The user wants to do the quiz.
if(confirmQuiz){
  // Make the quiz a bit more friendly.""
  var userName = prompt('First, what is your name?');
  // Easter egg?
  if(userName.toLowerCase() === 'danny'){
    alert('Wow! You have the same name as me?! Nice!');
  }
  alert('Okay ' + userName + ', answer with either Y or N.');

  // All the questions.
  var questionOne = 'Danny\'s first Dungeons and Dragons character was a Halfling Cleric.';
  var questionTwo = 'Danny has gone skydiving multiple times.';
  var questionThree = 'Danny has been a hobbyist game developer for several years.';
  var questionFour = 'Danny named his first dog Ninja.';
  var questionFive = 'Danny once outran a professional runner in a fair race.';

  // All the correct answer responses.
  var questionOneCorrect = 'Correct! That character died due to a greedy teammate though.';
  var questionTwoCorrect = 'Correct! I don\'t think I could ever skydive, much less more than once!';
  var questionThreeCorrect = 'Correct! None of the games I\'ve made are particularly good, but it was fun making them.';
  var questionFourCorrect = 'Correct! She\'s a small black chihuahua.';
  var questionFiveCorrect = 'Correct! I\'m not slow, but I doubt I would beat a runner even during their off-season.';

  // All the incorrect answer responses.
  var questionOneIncorrect = 'Wrong! I did play a Halfling Cleric as my first character.';
  var questionTwoIncorrect = 'Wrong! Thanks for the confidence though!';
  var questionThreeIncorrect = 'Wrong! I\'ve made a dozen or so games of varying polish.';
  var questionFourIncorrect = 'Wrong! She\'s a stealthy chihuahua.';
  var questionFiveIncorrect = 'Wrong! I\'ve never even raced a professional runner. However if zombies attack I just have to outrun you.';

  // All the text for the quiz in a nice format to cycle through.
  // No cheating!
  var quizAnswers = ['Y', 'N', 'Y', 'Y', 'N'];
  var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];
  var correctResponses = [questionOneCorrect, questionTwoCorrect, questionThreeCorrect, questionFourCorrect, questionFiveCorrect];
  var incorrectResponses = [questionOneIncorrect, questionTwoIncorrect, questionThreeIncorrect, questionFourIncorrect, questionFiveIncorrect];

  //var quizResponse = prompt(questionOne);
  var quizResponse;
  // String containing all quiz output before overwritting HTML.
  var quizResultsString = '';

  // Quiz Loop.
  for(var i = 0; i < quizAnswers.length; ++i){
    // Prevent the user from progressing until they respond with a valid answer.
    var validResponse = false;
    do{
      quizResponse = prompt(questions[i]);

      if(quizResponse.toUpperCase() === 'Y' || quizResponse.toUpperCase() === 'N'){
        validResponse = true;
      }
    }while(!validResponse);

    // Responses to the answer the user gave, and output.
    if(quizResponse.toUpperCase() === quizAnswers[i]){
      console.log('Q: ' + questions[i]);
      console.log('A: ' + quizResponse.toUpperCase());
      console.log('R: ' + correctResponses[i]);
      quizResultsString += 'Q: ' + questions[i] + '<br />';
      quizResultsString += 'A: ' + quizResponse.toUpperCase() + '<br />';
      quizResultsString += 'R: ' + correctResponses[i] + '<br /><br />';
    }else{
      console.log('Q: ' + questions[i]);
      console.log('A: ' + quizResponse.toUpperCase());
      console.log('R: ' + incorrectResponses[i]);
      quizResultsString += 'Q: ' + questions[i] + '<br />';
      quizResultsString += 'A: ' + quizResponse.toUpperCase() + '<br />';
      quizResultsString += 'R: ' + incorrectResponses[i] + '<br /><br />';
    }
  }
  // Display all the results of the quiz.
  quizResultsSection.innerHTML = quizResultsString;

  // Send the user off, not forgetting their name.
  var goodbyeMessage = document.getElementById('Thank_You');
  goodbyeMessage.innerHTML = 'Thank you for playing my quiz <b>' + userName + '</b>! Hope you learned something about me.';
}
