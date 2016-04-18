# martian-robots
### Developer Programming Problem

An app build with JavaScript that runs in the browser and outputs to the browser's console.

A sequence of commands are entered which relate to the position and movements of mars' robots. The first two digits from the inputted commands represent the size of the grid over which the robots can move. If a robot moves off the grid it is lost but leaves behind a scent which prevents the following robots from also being lost at that point. After the co ordinates, each line represents the initial position and sequence movement of a robot. N, E, S and W represent the four compass points towards which the robot can initially be facing towards. F represents moving 1 space forward, R and L represent rotating right and left respectively.

The output logs every movement of each robot, if they are lost and if they detect a scent.

The code base is separated into three files. One for parsing the inputted commands, one for generating the grid and one for handling the robot logic. These files are linked to a markup allowing the app to be run in the browser.

### Running Martian Robots
Open the index.html in the browser then access the browser's console (`cmd` + `alt` + `j`)  to view output.

### Sample input:
```
5 3 
1 1 E RFRFRFRF 
3 2 N FRRFLLFFRRFLL 
0 3 W LLFFFLFLFL
```

### Inputting commands
Currently the Sample Input is hardcoded in [commandinput.js](https://github.com/martyjg/martian-robots/blob/master/commandInput.js) but this can be changed to allow for user input via a prompt window.

