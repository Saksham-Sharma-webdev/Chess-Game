import * as piece from "../data/pieces.js";
import { board } from "../helper/constants.js";
import globalState from "../state.js";


const flatData = globalState.flat()

function pieceRender(data) {
  data.forEach(function (row) {
    row.forEach(function (square) {
      if (square.piece) {
        const squareDiv = document.getElementById(square.id);
        const piece = document.createElement("img");
        piece.src = square.piece.img;
        piece.classList.add("piece");
        squareDiv.appendChild(piece);
      }
    });
  });
}

function selfHighlight(piece){
  document.getElementById(piece.current_position).classList.add("highlightSquare")
}

function clearPreviousSelfHighlight(piece){
  if(piece){
    document.getElementById(piece.current_position).classList.remove("highlightSquare")
  }
}

function renderHighlight(squareId){
  const highlightSpan = document.createElement("span")
  highlightSpan.classList.add("highlight")
  document.getElementById(squareId).appendChild(highlightSpan)
}

function clearAllHighlights(){
  flatData.forEach((elem)=>{
    // if any square already highlighted then remove that highlight
    if(elem.highlighted){ 
      document.getElementById(elem.id).innerHTML = ""
      elem.highlighted = false 
    }
  })
}

// move element to passed squareId
function movePiece(piece, squareId) {
  flatData.forEach(element => {
    // to find currently taken square element
    if(element.id === piece.current_position){
      element.piece = null
    }

    // to add the piece object to the new square element where to place
    if(element.id === squareId){
      element.piece = piece
    }
  });
  clearAllHighlights()
  const prevPiece = document.getElementById(piece.current_position) 

  const currPiece = document.getElementById(squareId) 

  currPiece.innerHTML = prevPiece.innerHTML
  prevPiece.classList.remove("highlightSquare")
  prevPiece.innerHTML = ""

  piece.current_position = squareId

}

// render board only when game starts (one time, first time only)
function initGameRender(data) {
  data.forEach((row) => {
    const boardRow = document.createElement("div");
    row.forEach((square) => {
      const squareDiv = document.createElement("div");
      squareDiv.classList.add(square.color, "boardSquare");
      squareDiv.id = square.id;

      // render black

      // render black pawn initially at 7
      if (square.id[1] == 7) {
        square.piece = piece.blackPawn(square.id);
      }

      // render black rook at a8 and h8
      if (square.id == "a8" || square.id == "h8") {
        square.piece = piece.blackRook(square.id);
      }

      // render black knight at b8 and g8
      if (square.id == "b8" || square.id == "g8") {
        square.piece = piece.blackKnight(square.id);
      }

      // render black bishop at c8 and f8
      if (square.id == "c8" || square.id == "f8") {
        square.piece = piece.blackBishop(square.id);
      }

      // render black queen at d8
      if (square.id == "d8") {
        square.piece = piece.blackQueen(square.id);
      }

      // render black king at e8
      if (square.id == "e8") {
        square.piece = piece.blackKing(square.id);
      }

      // render white

      // render white pawn initially at 2
      if (square.id[1] == 2) {
        square.piece = piece.whitePawn(square.id);
      }

      // render white rook at a1 and h1
      if (square.id == "a1" || square.id == "h1") {
        square.piece = piece.whiteRook(square.id);
      }

      // render white knight at b1 and g1
      if (square.id == "b1" || square.id == "g1") {
        square.piece = piece.whiteKnight(square.id);
      }

      // render white bishop at c1 and f1
      if (square.id == "c1" || square.id == "f1") {
        square.piece = piece.whiteBishop(square.id);
      }

      // render white queen at d1
      if (square.id == "d1") {
        square.piece = piece.whiteQueen(square.id);
      }

      // render white king at e1
      if (square.id == "e1") {
        square.piece = piece.whiteKing(square.id);
      }

      boardRow.appendChild(squareDiv);
    });
    boardRow.classList.add("boardRow");
    board.appendChild(boardRow);
  });
  pieceRender(data);
}

export { initGameRender, renderHighlight,clearAllHighlights, selfHighlight, clearPreviousSelfHighlight,
  movePiece
};
