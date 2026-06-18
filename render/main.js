const board = document.getElementById("board")

function initGameRender(data){
  data.forEach((row) => {
    const boardRow = document.createElement("div")
    row.forEach((square)=>{
      const squareDiv = document.createElement("div")
      squareDiv.classList.add(square.color,"boardSquare")
      boardRow.appendChild(squareDiv)
    })
    boardRow.classList.add("boardRow")
    board.appendChild(boardRow)
  });
}

export {initGameRender}