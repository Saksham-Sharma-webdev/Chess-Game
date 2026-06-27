// black pieces
function blackPawn(current_position) {
  return {
    current_position,
    img: "./assets/images/black/pawn.png", // path accoding to index.html as function run there,
    name: "BLACK_PAWN"
  };
}

function blackRook(current_position) {
  return {
    current_position,
    img: "./assets/images/black/rook.png",
    name: "BLACK_ROOK"
  };
}

function blackKnight(current_position) {
  return {
    current_position,
    img: "./assets/images/black/knight.png",
    name: "BLACK_KNIGHT"
  };
}

function blackBishop(current_position) {
  return {
    current_position,
    img: "./assets/images/black/bishop.png",
    name: "BLACK_BISHOP"
  };
}

function blackQueen(current_position) {
  return {
    current_position,
    img: "./assets/images/black/queen.png",
    name: "BLACK_QUEEN"
  };
}

function blackKing(current_position) {
  return {
    current_position,
    img: "./assets/images/black/king.png",
    name: "BLACK_KING"
  };
}

// white pieces
function whitePawn(current_position) {
  return {
    current_position,
    img: "./assets/images/white/pawn.png",
    name: "WHITE_PAWN"
  };
}

function whiteRook(current_position) {
  return {
    current_position,
    img: "./assets/images/white/rook.png",
    name: "WHITE_ROOK"
  };
}

function whiteKnight(current_position) {
  return {
    current_position,
    img: "./assets/images/white/knight.png",
    name: "WHITE_KNIGHT"
  };
}

function whiteBishop(current_position) {
  return {
    current_position,
    img: "./assets/images/white/bishop.png",
    name: "WHITE_BISHOP"
  };
}

function whiteQueen(current_position) {
  return {
    current_position,
    img: "./assets/images/white/queen.png",
    name: "WHITE_QUEEN"
  };
}

function whiteKing(current_position) {
  return {
    current_position,
    img: "./assets/images/white/king.png",
    name: "WHITE_KING"
  };
}

export {
  blackPawn,
  blackBishop,
  blackKing,
  blackKnight,
  blackQueen,
  blackRook,
  whiteRook,
  whiteBishop,
  whiteKing,
  whiteKnight,
  whitePawn,
  whiteQueen,
};
