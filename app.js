
var initialInput = "5 3 \n1 1 E RFRFRFRF \n3 2 N FRRFLLFFRRFLL \n0 3 W LLFFFLFLFL";

// var initialInput = prompt("Please enter the commands for your Martian Robots");

var grid = [];

function getGridSize(input) {

  var gridWidth = parseInt(input.split(" ", 1)[0]);
  var gridHeight = parseInt(input.split(" ", 2)[1]);

  buildGrid(gridWidth, gridHeight);
}

function buildGrid(width, height) {

  for (var i = 0; i <= width; i++) {
    grid.push(new Array);
    for (var j = 0; j <= height; j++) {
      grid[i].push(" ");
    }
  }

  parseCommands();
}

function parseCommands() {

  commandsListed = initialInput.split("\n");
  for (i = 1; i < commandsListed.length; i++) {
    setRobot(commandsListed[i], i);
  }
}

function setRobot(command, serialNumber) {

  var initialRobotX = parseInt(command.split(" ", 1)[0]);
  var initialRobotY = parseInt(command.split(" ", 2)[1]);
  var initialDirection = command.split(" ", 3)[2];
  var moveSequence = command.split(" ", 4)[3];

  grid[initialRobotX][initialRobotY] = "ROBOT " + serialNumber;

  nextMove(initialRobotX, initialRobotY, serialNumber, initialDirection, moveSequence);

  console.log(grid);
  console.log("initialDirection", initialDirection); 
}

function nextMove(xPos, yPos, serialNumber, direction, moveSequence) {
  console.log("ROBOT " + serialNumber + " is at position " + xPos + yPos + " and is facing towards " + direction);

  for (i = 0; i < moveSequence.length; i++) {
    computeMove(xPos, yPos, serialNumber, direction, moveSequence[i]);
  }

}

function computeMove(xPos, yPos, serialNumber, direction, move) {

  if (move === "F") {

    switch(direction) {
      case "N":
      yPos++;
      checkForScent(grid[xPos][yPos]);
      break;
      case "S":
      yPos--
      checkForScent(grid[xPos][yPos]);
      break;
      case "E":
      xPos++
      checkForScent(grid[xPos][yPos]);
      break;
      case "W":
      xPos--
      checkForScent(grid[xPos][yPos]);
      break;
    }

  } else if (move ==="R") {
    nextMoveRight(direction);
  } else {
    nextMoveLeft();
  }

  return (xPos, yPos, serialNumber, direction);

}

function checkForScent() {
  console.log()
}

function nextMoveForward() {

}

function nextMoveRight(direction) {
  switch(direction) {
    case "N":
    direction = "E";
    break;
    case "S":
    direction = "W";
    break;
    case "E":
    direction = "S";
    break;
    case "W":
    direction = "N";
    break;
  }
  return direction;

}

function nextMoveLeft() {

}


getGridSize(initialInput);

console.log(initialInput);