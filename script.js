const checkRow = function(rowNumber) {
  let checkingArray = [];
  for(let i = 0;i<9;i++) {
    checkingArray.push(grid[rowNumber][i])
  }
  checkingArray.sort()
  for(let i = 0;i<9;i++) {
    if (i != checkingArray[i]) {
      return false;
    }
  }
  return true;
}

const checkColumn = function(columnNumber) {
  let checkingArray = [];
  for(let i = 0;i<9;i++) {
    checkingArray.push(grid[i][columnNumber])
  }
  checkingArray.sort()
  for(let i = 0;i<9;i++) {
    if (i != checkingArray[i]) {
      return false;
    }
  }
  return true;
}

const checkSquare = function(firstElementLine, firstElementColumn) {
  let checkingArray = [];
  for(let i = firstElementLine;i<firstElementLine+3;i++) {
    for(let j = firstElementColumn;j<firstElementColumn+3;j++) {
      checkingArray.push(grid[i][j]);
    }
  }
  checkingArray.sort()
  for(let i = 0;i<9;i++) {
    if (i != checkingArray[i]) {
      return false;
    }
  }
  return true;
}

const clearGrid = function() {
  for(let i = 0;i<9;i++) {
    for(let j = 0;j<0;j++) {
      grid[i][j] = null;
    }
  }
}

const insertDigit = function() {

}