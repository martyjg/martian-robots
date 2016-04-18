var initialInput = "5 3 \n1 1 E RFRFRFRF \n3 2 N FRRFLLFFRRFLL \n0 3 W LLFFFLFLFL";

// var initialInput = prompt("Please enter the commands for your Martian Robots");

var rotationMoves = {
  left  :  {'N':'W', 'W':'S', 'S':'E', 'E':'N'},
  right :  {'N':'E', 'E':'S', 'S':'W', 'W':'N'}
};


function parseCommands() {

  commandsListed = initialInput.split("\n");
  for (i = 1; i < commandsListed.length; i++) {
    setRobot(commandsListed[i], i);
  }
};