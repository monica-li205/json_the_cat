const gridInstructions = [
  [null,0,0,1],
  [0,null,null,null],
  [0,null,null,null],
  [1,null,null,null]
];


//takes a nested array and ouputs a readable grid of Xs and Os
const print = function (grid) {
  const finalGrid = "|";
  
  for(let row of grid) {
    for (let column of row) {
      if (column === 0) {
        finalGrid += "O";
      } else if (column === 1) {
        finalGrid += "X";
      } else if (column === null) {
        finalGrid += " ";
        finalGrid += "|";
      }
    }
  }
  return finalGrid;
};

print(gridInstructions);
// example output
| |O|O|X|
|O| | | |
|O| | | |
|X| | | |