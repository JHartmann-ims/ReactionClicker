var countDownTimer = 0;
var cancelTurnGreen; //cancelling the timeout for function 'turnGreen'
var result;
var results = [];
var amountOfTries = 0;
var total = 0;
var count = 0;

startScreen();

function startScreen() {
  $(".game-container").css("background-color", "#8093E8");
  $(".game-container").append(
    "<div id='startScreen'><h1 class='gameText'>click to start</h1></div>"
  );

  $("#startScreen").mousedown(function () {
    waitForGreen();
  });
}

function waitForGreen() {
  $(".game-container").empty();
  $(".game-container").css("background-color", "#F44B49");
  $(".game-container").append(
    "<div id='waitForGreen'><h1 class='gameText'>wait for green...</h1></div>"
  );

  cancelTurnGreen = setTimeout(turnGreen, 4500);

  $("#waitForGreen").mousedown(function () {
    clearTimeout(cancelTurnGreen);
    clickedTooEarly();
  });
}

function clickedTooEarly() {
    $(".game-container").empty();
    $(".game-container").css("background-color", "#8093E8");
    $(".game-container").append(
        "<div id='clickedTooEarly'><div><h1 class='gameText'>too soon !</h1><h1 class='gameUnderText h5'>click to try again.</h1></div></div>"
      );

      $("#clickedTooEarly").mousedown(function () {
        waitForGreen();
      });
}   

function turnGreen() {
  amountOfTries++;

  $(".game-container").empty();
  $(".game-container").css("background-color", "#78F59A");
  $(".game-container").append(
    "<div id='turnGreen'><h1 class='gameText'>CLICK</h1></div>"
  );

  countDownTimer = new Date();


  $("#turnGreen").mousedown(function () {
    if(amountOfTries < 5) {
      onGreenClick();
    }
    else {
      resultScreen();
    }
  });
}

function onGreenClick() {
  result = new Date() - countDownTimer;
  results.push(result);
  console.log(results);

  $(".game-container").empty();
  $(".game-container").css("background-color", "#8093E8");
  $(".game-container").append(
    "<div id='onGreenClick'><h1 class='gameText'>" +
    result +
      " ms</h1></div>"
  );

  $("#onGreenClick").mousedown(function () {
    waitForGreen();
  });
}

function resultScreen() {
  jQuery.each(results, function(index, value) {
    total += value;
    count++;
  });

  $(".game-container").empty();
  $(".game-container").css("background-color", "#8093E8");
  $(".game-container").append(
    "<div id='turnGreen'><h1 class='gameText'>Your average was " + (total / count) + "</h1></div>"
  );
}
