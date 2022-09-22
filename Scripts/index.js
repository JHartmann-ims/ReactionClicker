var countDownTimer = 0;

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

  setTimeout(turnGreen, 4500);
}

function turnGreen() {
  $(".game-container").empty();
  $(".game-container").css("background-color", "#78F59A");
  $(".game-container").append(
    "<div id='turnGreen'><h1 class='gameText'>CLICK</h1></div>"
  );

  countDownTimer = new Date();


  $("#turnGreen").mousedown(function () {
    onGreenClick();
  });
}

function onGreenClick() {
  $(".game-container").empty();
  $(".game-container").css("background-color", "#8093E8");
  $(".game-container").append(
    "<div id='onGreenClick'><h1 class='gameText'>" +
    (new Date() - countDownTimer) +
      " ms</h1></div>"
  );
}
