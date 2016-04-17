
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

  robot.moveSequenceIndex++;

  if (robot.x > grid.length - 1 || robot.y > grid[0].length - 1) {
    lostRobot(robot); 
  } else if (robot.moveSequenceIndex < robot.moveSequence.length - 1) {
    console.log("ROBOT " + robot.number + " is at position " + robot.x + ", " + robot.y + " and is facing towards " + robot.direction);
    computeNextMove(robot);
  } else {
    return;
  }
}

function computeNextMove(robot) {

  if (robot.moveSequence[robot.moveSequenceIndex] === "F") {

    switch(robot.direction) {
      case "N":
      robot.y++;
      checkForScent(robot);
      break;
      case "S":
      robot.y--;
      checkForScent(robot);
      break;
      case "E":
      robot.x++;
      checkForScent(robot);
      break;
      case "W":
      robot.x--;
      checkForScent(robot);
      break;
    }

    nextMove(robot);

  } else if (robot.moveSequence[robot.moveSequenceIndex] === "R") {
    nextMoveRight(robot);
  } else {
    nextMoveLeft(robot);
  }

}



// function computeNextMove(xPos, yPos, serialNumber, direction, moveSequence, moveSequenceIndex) {

//   console.log("ROBOT " + serialNumber + " is at position " + xPos + yPos + " and is facing towards " + direction);

// }

function nextMoveRight(robot) {
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

function nextMoveLeft(robot) {
  switch(robot.direction) {
    case "N":
    robot.direction = "W";
    break;
    case "S":
    robot.direction = "E";
    break;
    case "E":
    robot.direction = "N";
    break;
    case "W":
    robot.direction = "S";
    break;
  }

  nextMove(robot);

}

function lostRobot(robot) {
  console.log("LOST")
  return grid[robot.x][robot.y] = "LOST";
}

function checkForScent(robot) {
  if (grid[robot.x][robot.y] === "LOST") {


    switch(robot.direction) {
      case "N":
      robot.y--;
      break;
      case "S":
      robot.y++;
      break;
      case "E":
      robot.x--;
      break;
      case "W":
      robot.x++;
      break;
    }
    console.log("SCENT DETECTED!!");
    nextMove(robot);
  }
}


console.log(initialInput);

getGridSize(initialInput);

