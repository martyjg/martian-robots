
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

  grid[initialRobotX][initialRobotY] = "ROBOT " + serialNumber;

  console.log(grid);
}




getGridSize(initialInput);

console.log(initialInput);