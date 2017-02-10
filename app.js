'use strict';

var confirmQuiz = confirm('Hello, would you like to play a game?');

// The section where the results of the quiz will be displayed.
var quizResultsSection = document.getElementById('Quiz_Results');

if(confirmQuiz){
  console.log('Awesome! Let\'s get started!');
}else{
  // The user isn't interested in me or the quiz.
  console.log('Okay... :(');
  quizResultsSection.innerHTML = 'Okay... :(';
}

// The user wants to do the quiz.
if(confirmQuiz){
  // Make the quiz a bit more friendly.
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
  var questionSix = 'Time for a breather from questions about me! Guess a number between 0 and 10.';
  var questionSeven = 'What is one of the top three foods I like? ( Multiple correct answers )';

  // All the correct answer responses.
  var questionOneCorrect = 'Correct! That character died due to a greedy teammate though.';
  var questionTwoCorrect = 'Correct! I don\'t think I could ever skydive, much less more than once!';
  var questionThreeCorrect = 'Correct! None of the games I\'ve made are particularly good, but it was fun making them.';
  var questionFourCorrect = 'Correct! She\'s a small black chihuahua.';
  var questionFiveCorrect = 'Correct! I\'m not slow, but I doubt I would beat a runner even during their off-season.';
  var questionSixCorrect = 'Correct! That was the right number!';
  var questionSevenCorrect = 'Correct! My favorite foods are cereal, pizza, and spaghetti!';

  // All the incorrect answer responses.
  var questionOneIncorrect = 'Wrong! I did play a Halfling Cleric as my first character.';
  var questionTwoIncorrect = 'Wrong! Thanks for the confidence though!';
  var questionThreeIncorrect = 'Wrong! I\'ve made a dozen or so games of varying polish.';
  var questionFourIncorrect = 'Wrong! She\'s a stealthy chihuahua.';
  var questionFiveIncorrect = 'Wrong! I\'ve never even raced a professional runner. However if zombies attack I just have to outrun you.';
  var questionSixIncorrect = 'Wrong! That was your last attempt. Better luck next time!';
  var questionSevenIncorrect = 'Wrong! That was your last attempt. Better luck next time!';

  // The number guessing game data.
  var randomNumberGameAnswer = Math.floor(Math.random() * 11);
  var randomNumberGameChances = 4;

  // The amount of chances for the multiple choice question.
  var multipleChoiceQuestionChances = 6;

  // All the text for the quiz in a nice format to cycle through.
  // No cheating!
  var quizAnswers = ['Y', 'N', 'Y', 'Y', 'N', randomNumberGameAnswer, 'CEREAL PIZZA SPAGHETTI'];
  var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven];
  var correctResponses = [questionOneCorrect, questionTwoCorrect, questionThreeCorrect, questionFourCorrect, questionFiveCorrect, questionSixCorrect, questionSevenCorrect];
  var incorrectResponses = [questionOneIncorrect, questionTwoIncorrect, questionThreeIncorrect, questionFourIncorrect, questionFiveIncorrect, questionSixIncorrect, questionSevenIncorrect];

  //var quizResponse = prompt(questionOne);
  var quizResponse;
  // String containing all quiz output before overwritting HTML.
  var quizResultsString = '';
  // The score the user got by completing the quiz.
  var quizScore = 0;
  var quizTotalCorrectAnswers = 0;

  // Quiz Loop.
  for(var i = 0; i < quizAnswers.length; ++i){
    // Prevent the user from progressing until they respond with a valid answer.
    var validResponse = false;
    do{
      quizResponse = prompt(questions[i]);

      if(i !== 5 && i !== 6){
        if(quizResponse.toUpperCase() === 'Y' || quizResponse.toUpperCase() === 'N'){
          validResponse = true;
        }
      }else if(i === 5){
        // The random number game has started.
        if(!isNaN(parseInt(quizResponse))){
          // Prevent the number from being a float by truncating the decimal value.
          quizResponse = Math.floor(quizResponse);
          validResponse = true;
        }
      }else if(i === 6){
        validResponse = true;
      }
    }while(!validResponse);

    // Responses to the answer the user gave, and output.
    if(i !== 5 && i !== 6){
      if(quizResponse.toUpperCase() === quizAnswers[i]){
        console.log('Q: ' + questions[i]);
        console.log('A: ' + quizResponse.toUpperCase());
        console.log('R: ' + correctResponses[i]);
        quizResultsString += 'Q: ' + questions[i] + '<br />';
        quizResultsString += 'A: ' + quizResponse.toUpperCase() + '<br />';
        quizResultsString += 'R: ' + correctResponses[i] + '<br /><br />';

        // The user got a correct answer in the quiz!
        quizTotalCorrectAnswers += 1;
      }else{
        console.log('Q: ' + questions[i]);
        console.log('A: ' + quizResponse.toUpperCase());
        console.log('R: ' + incorrectResponses[i]);
        quizResultsString += 'Q: ' + questions[i] + '<br />';
        quizResultsString += 'A: ' + quizResponse.toUpperCase() + '<br />';
        quizResultsString += 'R: ' + incorrectResponses[i] + '<br /><br />';
      }
    }else if(i === 5){
      // The random number game has started.
      var randomNumberGameComplete = false;
      do{
        if(quizResponse === randomNumberGameAnswer){
          // The user got a correct answer in the quiz!
          console.log('Q: ' + questions[i]);
          console.log('A: ' + quizResponse);
          console.log('R: ' + correctResponses[i]);
          quizResultsString += 'Q: ' + questions[i] + '<br />';
          quizResultsString += 'A: ' + quizResponse + '<br />';
          quizResultsString += 'R: ' + correctResponses[i] + '<br /><br />';

          randomNumberGameComplete = true;
          quizTotalCorrectAnswers += 1;
        }else if((randomNumberGameChances - 1) > 0){
          // Incorrect, but still has chances.
          randomNumberGameChances -= 1;

          // Inform the user how close they were to the answer.
          if(quizResponse > randomNumberGameAnswer){
            quizResponse = alert('The number you guessed is TOO HIGH. Chances Remaining: ' + randomNumberGameChances);
          }else{
            quizResponse = alert('The number you guessed is TOO LOW. Chances Remaining: ' + randomNumberGameChances);
          }

          // Prevent the user from progressing until they respond with a valid answer.
          var validNumberResponse = false;
          do{
            quizResponse = prompt(questions[i]);

            if(!isNaN(parseInt(quizResponse))){
              // Prevent the number from being a float by truncating the decimal value.
              quizResponse = Math.floor(quizResponse);
              validNumberResponse = true;
            }
          }while(!validNumberResponse);
        }else{
          // Incorrect and has no tries remaining.
          console.log('Q: ' + questions[i]);
          console.log('A: ' + quizResponse);
          console.log('R: ' + incorrectResponses[i]);
          quizResultsString += 'Q: ' + questions[i] + '<br />';
          quizResultsString += 'A: ' + quizResponse + '<br />';
          quizResultsString += 'R: ' + incorrectResponses[i] + '<br /><br />';

          alert(incorrectResponses[i]);

          randomNumberGameComplete = true;
        }
      }while(!randomNumberGameComplete);
    }else{
      // The multiple choice question has started.
      // Get the favorite foods from the array.
      var spaceOneLocationInString = quizAnswers[i].indexOf(' ');
      var spaceTwoLocationInString = quizAnswers[i].lastIndexOf(' ');
      var favoriteFoodOne = quizAnswers[i].slice(0, spaceOneLocationInString);
      var favoriteFoodTwo = quizAnswers[i].slice(spaceOneLocationInString + 1, spaceTwoLocationInString);
      var favoriteFoodThree = quizAnswers[i].slice(spaceTwoLocationInString + 1, quizAnswers[i].length);

      console.log(favoriteFoodOne);
      console.log(favoriteFoodTwo);
      console.log(favoriteFoodThree);

      var multipleChoiceQuestionComplete = false;
      do{
        if(quizResponse.toUpperCase() === favoriteFoodOne || quizResponse.toUpperCase() === favoriteFoodTwo || quizResponse.toUpperCase() === favoriteFoodThree){
          // The user got a correct answer in the quiz!
          console.log('Q: ' + questions[i]);
          console.log('A: ' + quizResponse.toUpperCase());
          console.log('R: ' + correctResponses[i]);
          quizResultsString += 'Q: ' + questions[i] + '<br />';
          quizResultsString += 'A: ' + quizResponse.toUpperCase() + '<br />';
          quizResultsString += 'R: ' + correctResponses[i] + '<br /><br />';

          multipleChoiceQuestionComplete = true;
          quizTotalCorrectAnswers += 1;
        }else if((multipleChoiceQuestionChances - 1) > 0){
          // Incorrect, but still has chances.
          multipleChoiceQuestionChances -= 1;

          alert('Incorrect! You have ' + multipleChoiceQuestionChances + ' chances left!');

          quizResponse = prompt(questions[i]);
        }else{
          // Incorrect and has no tries remaining.
          console.log('Q: ' + questions[i]);
          console.log('A: ' + quizResponse.toUpperCase());
          console.log('R: ' + incorrectResponses[i]);
          quizResultsString += 'Q: ' + questions[i] + '<br />';
          quizResultsString += 'A: ' + quizResponse.toUpperCase() + '<br />';
          quizResultsString += 'R: ' + incorrectResponses[i] + '<br />';
          quizResultsString += 'The correct answers were: ' + favoriteFoodOne + ', ' + favoriteFoodTwo + ', and ' + favoriteFoodThree + '.<br /><br />';

          alert(incorrectResponses[i]);

          multipleChoiceQuestionComplete = true;
        }
      }while(!multipleChoiceQuestionComplete);
    }
  }
  quizResultsString += '<br /><b>Results: ' + quizTotalCorrectAnswers + '/' + quizAnswers.length + ' questions answered correctly.</b>';
  // Display all the results of the quiz.=
  quizResultsSection.innerHTML = quizResultsString;

  // Send the user off, not forgetting their name.
  var goodbyeMessage = document.getElementById('Thank_You');
  goodbyeMessage.innerHTML = 'Thank you for playing my quiz <b>' + userName + '</b>! Hope you learned something about me.';
}
