var countDownTimer = 0;
var cancelTurnGreen; //cancelling the timeout for function 'turnGreen'
var result;
var results = [];
var amountOfTries = 0;
var total = 0;
var count = 0;

startScreen();

function startScreen() {
  $(".game-container").empty();
  $(".game-container").css("background-color", "#8093E8");
  $(".game-container").append(
    "<div id='startScreen'><div><img src='../Images/thunder.png' alt='' class='images'><h1 class='gameText'>reaction time test</h1><h1 class='gameUnderText h5'>When it turns red, click as quickly as you can.</h1><h1 class='gameUnderText h5'>click anywhere to begin</h1></div></div>"
  );

  $("#startScreen").mousedown(function () {
    waitForGreen();
  });
}

function waitForGreen() {
  var rndTime = Math.floor((Math.random() * 5000) + 1500);
  //console.log(rndTime)

  $(".game-container").empty();
  $(".game-container").css("background-color", "#F44B49");
  $(".game-container").append(
    "<div id='waitForGreen'><div><h1 class='gameText'>wait for green...</h1></div></div>"
  );

  cancelTurnGreen = setTimeout(turnGreen, rndTime);

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
    "<div id='turnGreen'><div><h1 class='gameText'>click !</h1></div></div>"
  );

  countDownTimer = new Date();

  $("#turnGreen").mousedown(function () {
    if (amountOfTries < 5) {
      onGreenClick();
    } else {
      resultScreen();
    }
  });
}

function getResults() {
  result = new Date() - countDownTimer;
  results.push(result);
  console.log(results);
}


function onGreenClick() {
  getResults()

  $(".game-container").empty();
  $(".game-container").css("background-color", "#8093E8");
  $(".game-container").append(
    "<div id='onGreenClick'><div><h1 class='gameText'>" + result + " ms</h1><h1 class='gameUnderText h5'>click to keep going.</h1></div></div>"
  );

  $("#onGreenClick").mousedown(function () {
    waitForGreen();
  });
}

function resultScreen() {
  getResults()

  jQuery.each(results, function (index, value) {
    total += value;
    count++;
  });

  $(".game-container").empty();
  $(".game-container").css("background-color", "#8093E8");
  $(".game-container").append(
    "<div id='resultScreen'><div><h1 class='gameUnderText h5'>your average was</h1><h1 class='gameText'>" +
      total / count +
      " ms</h1><div class='line'></div><h1 class='gameUnderText h5'>click to try again.</h1></div></div>"
  );

  $("#resultScreen").mousedown(function () {
    amountOfTries = 0;
    results = [];
    total = 0;
    count = 0;

    startScreen();
  });
}
