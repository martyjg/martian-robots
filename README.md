# martian-robots
### Developer Programming Problem

An app that runs in the browser and outputs to the browser's console.

A sequence of commands are entered which relate to the position and movements of mars' robots. The first two digits from the inputted commands represent the size of the grid over which the robots can move. If a robot moves off the grid it is lost but leaves behind a scent which prevents the following robots from also being lost at that point. After the co ordinates, each line represents the initial position and sequence movement of a robot. 

Running Martian Robots
Open the index.html in the browser then access the browser's console ('cmd` + `alt` + `j`)  to view output.

### Sample input:
```
5 3 
1 1 E RFRFRFRF 
3 2 N FRRFLLFFRRFLL 
0 3 W LLFFFLFLFL
```

### Inputting commands
Currently the Sample Input is hardcoded in commandinput.js but this can be changed to allow for user input via a prompt window.

