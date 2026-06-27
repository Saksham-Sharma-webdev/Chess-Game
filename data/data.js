import { renderHighlight } from "../render/main.js"

const chessRows = [1,2,3,4,5,6,7,8]
const chessColumns = ['a','b','c','d','e','f','g','h']

// tell about the square as object
function square(color,id,piece){
  const highlightSquare = function(value){
    renderHighlight(this.id)
    this.highlighted = value
  }

  return {color,id,piece, highlightSquare}
}

// generate the row
function rowGenerator(rowId){
  const squareRow = []
  
  if(rowId%2 == 0){
    chessColumns.forEach((elem,idx)=>{
      if(idx%2 == 0){
        squareRow.push(square("white",elem+rowId,null))
      }
      else{
        squareRow.push(square("black",elem+rowId,null))
      }
    }) 
  }
  else{
    chessColumns.forEach((elem,idx)=>{
      if(idx%2==0){
        squareRow.push(square("black",elem+rowId,null))
      }
      else{
        squareRow.push(square("white",elem+rowId,null))
      }
    })
  }

  return squareRow // an array of squares
}

function initGame(){
  const game = [] // 2D array of board

  for (let i = chessRows.length; i > 0; i--) {
    game.push(rowGenerator(i))
  }

  return game
}

export {initGame}