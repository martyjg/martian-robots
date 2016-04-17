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