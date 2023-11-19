const checkRow = function(rowNumber) {
  let checkingArray = [];
  for(let i = 0;i<9;i++) {
    checkingArray.push(grid[rowNumber][i])
    checkingArray.sort()
  }
  for(let i = 0;i<9;i++) {
    if (i != checkingArray[i]) {
      return false;
    }
  }
  return true;
}

const checkColumn = function() {

}

const checkSquare = function() {

}

const clearGrid = function() {

}

const insertDigit = function() {

}