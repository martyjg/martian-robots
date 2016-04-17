
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

  var robot = {
    number: serialNumber,
    x: initialRobotX,
    y: initialRobotY,
    direction: initialDirection,
    moveSequence: moveSequence,
    moveSequenceIndex: -1
  };

  nextMove(robot);
}

function nextMove(robot) {

  if (robot.moveSequenceIndex < robot.moveSequence.length) {

    console.log("ROBOT " + robot.number + " is at position " + robot.x + robot.y + " and is facing towards " + robot.direction);
    computeNextMove(robot);

  } else {

    return;
  }

}

function computeNextMove(robot) {

  robot.moveSequenceIndex++;

  if (robot.moveSequence[robot.moveSequenceIndex] === "F") {

    switch(robot.direction) {
      case "N":
      robot.y++;
      // checkForScent(grid[xPos][yPos]);
      break;
      case "S":
      robot.y--;
      // checkForScent(grid[xPos][yPos]);
      break;
      case "E":
      robot.x++;
      // checkForScent(grid[xPos][yPos]);
      break;
      case "W":
      robot.x--;
      // checkForScent(grid[xPos][yPos]);
      break;
    }

  } else if (robot.moveSequence[robot.moveSequenceIndex] === "R") {
    nextMoveRight(robot);
  } else {
    nextMoveLeft();
  }

  nextMove(robot);

}

function checkForScent() {
  console.log()
}

// function computeNextMove(xPos, yPos, serialNumber, direction, moveSequence, moveSequenceIndex) {

//   console.log("ROBOT " + serialNumber + " is at position " + xPos + yPos + " and is facing towards " + direction);

// }

function nextMoveRight(robot) {
  console.log("this happens")
  switch(robot.direction) {
    case "N":
    robot.direction = "E";
    break;
    case "S":
    robot.direction = "W";
    break;
    case "E":
    robot.direction = "S";
    break;
    case "W":
    robot.direction = "N";
    break;
  }

  nextMove(robot);

}

function nextMoveLeft() {

}


getGridSize(initialInput);

console.log(initialInput);