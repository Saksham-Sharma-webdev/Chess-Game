import { board } from "../helper/constants.js";

import {
  renderHighlight,
  clearAllHighlights,
  selfHighlight,
  clearPreviousSelfHighlight,
  movePiece,
} from "../render/main.js";
import globalState from "../state.js";

// highlight state or not
let highlight_state = false;

// current selected or self highlighted yellow square on board
let curr_self_highlight_square = null;

let moveState = null // currently selected or clicked piece

function whitePawn(square) {
  const { piece } = square;
  const current_pos = piece.current_position;
  const flatArray = globalState.flat();

  // on intial position
  if (current_pos[1] === "2") {
    const highlightSquareId = [
      `${current_pos[0]}${Number(current_pos[1]) + 1}`,
      `${current_pos[0]}${Number(current_pos[1]) + 2}`,
    ];

    highlightSquareId.forEach((highlight) => {
      globalState.forEach((row) => {
        row.forEach((element) => {
          if (element.id === highlight) {
            element.highlightSquare(true);
          }
        });
      });
    });
  }
}

function globalEvent() {
  // if there is a click
  board.addEventListener("click", function (event) {
    // if any piece clicked
    if (event.target.classList.contains("piece")) {
      console.log("piece clicked")
      // clear previous highlights
      clearAllHighlights();

      // clear the already selected if any self highlighted
      clearPreviousSelfHighlight(curr_self_highlight_square);

      const clickedId = event.target.parentNode.id;
      const flatArray = globalState.flat();
      const square = flatArray.find((elem) => elem.id === clickedId);

      // add piece as move state
      moveState = square.piece

      // if the piece clicked is white pawn
      if (square.piece.name === "WHITE_PAWN") {
        if (curr_self_highlight_square !== square.piece) {
          whitePawn(square);

          // highlight clicked element
          selfHighlight(square.piece);
          curr_self_highlight_square = square.piece;
        } else if (curr_self_highlight_square === square.piece) {
          clearPreviousSelfHighlight(curr_self_highlight_square);
          clearAllHighlights();
          curr_self_highlight_square = null;
        }
      }
    }
    // if somewhere other than the white pawn piece is clicked
    else {
      if (
        event.target.childNodes.length === 1 ||
        event.target.localName == "span"
      ) {
        if(event.target.localName === "span"){
          const id = event.target.parentNode.id
          movePiece(moveState, id)
          moveState = null 
        }
        else{ 
          const id = event.target.id
          movePiece(moveState, id)
          moveState = null
        }
      } else {
        clearPreviousSelfHighlight(curr_self_highlight_square);
        clearAllHighlights();
        curr_self_highlight_square = null;
        moveState = null
      }
    }
  });
}

export { globalEvent };


// flat() creates a new array but not create new objects
// the objects in new array is same as the objects as those in original nested array so array shallowly copied meaning the reference is copied