function setRobot(command, serialNumber) {
  var initialRobotX = parseInt(command.split(" ", 1)[0]);
  var initialRobotY = parseInt(command.split(" ", 2)[1]);
  var initialDirection = command.split(" ", 3)[2];
  var moveSequence = command.split(" ", 4)[3];

  var robot = {
    number :            serialNumber,
    x :                 initialRobotX,
    y :                 initialRobotY,
    direction :         initialDirection,
    moveSequence :      moveSequence,
    moveSequenceIndex : -1
  };

  nextMove(robot);

};


function nextMove(robot) {
  robot.moveSequenceIndex++;

  if (robot.x > grid.length - 1 || robot.y > grid[0].length - 1) {
    lostRobot(robot); 

  } else if (robot.moveSequenceIndex < robot.moveSequence.length - 1) {
    console.log("ROBOT-" + robot.number + " is at position [" + robot.x + ", " + robot.y + "] and is facing towards " + robot.direction);
    computeNextMove(robot);

  } else {
    return;
  }

};


function computeNextMove(robot) {

  if (robot.moveSequence[robot.moveSequenceIndex] === "F") {

    switch(robot.direction) {
      case "N":
        robot.y++;
        break;
      case "S":
        robot.y--;
        break;
      case "E":
        robot.x++;
        break;
      case "W":
        robot.x--;
        break;
    }

    checkForScent(robot);
    nextMove(robot);

  } else if (robot.moveSequence[robot.moveSequenceIndex] === "R") {
    rotate(robot, "R");

  } else {
    rotate(robot, "L");
  }

};


function rotate(robot, direction) {

  if (direction === "R") {
    robot.direction = rotationMoves.right[robot.direction];

  } else {
    robot.direction = rotationMoves.left[robot.direction];
  }

  nextMove(robot);

};


function lostRobot(robot) {
  console.log("LOST")
  return grid[robot.x][robot.y] = "LOST";
};


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
};


console.log("COMMAND INPUTS:\n", initialInput);

//run Martian Robots
getGridSize(initialInput);

