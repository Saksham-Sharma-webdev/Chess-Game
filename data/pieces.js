// black pieces
function blackPawn(current_position) {
  return {
    current_position,
    img: "./assets/images/black/pawn.png", // path accoding to index.html as function run there,
  };
}

function blackRook(current_position) {
  return {
    current_position,
    img: "./assets/images/black/rook.png",
  };
}

function blackKnight(current_position) {
  return {
    current_position,
    img: "./assets/images/black/knight.png",
  };
}

function blackBishop(current_position) {
  return {
    current_position,
    img: "./assets/images/black/bishop.png",
  };
}

function blackQueen(current_position) {
  return {
    current_position,
    img: "./assets/images/black/queen.png",
  };
}

function blackKing(current_position) {
  return {
    current_position,
    img: "./assets/images/black/king.png",
  };
}

// white pieces
function whitePawn(current_position) {
  return {
    current_position,
    img: "./assets/images/white/pawn.png",
  };
}

function whiteRook(current_position) {
  return {
    current_position,
    img: "./assets/images/white/rook.png",
  };
}

function whiteKnight(current_position) {
  return {
    current_position,
    img: "./assets/images/white/knight.png",
  };
}

function whiteBishop(current_position) {
  return {
    current_position,
    img: "./assets/images/white/bishop.png",
  };
}

function whiteQueen(current_position) {
  return {
    current_position,
    img: "./assets/images/white/queen.png",
  };
}

function whiteKing(current_position) {
  return {
    current_position,
    img: "./assets/images/white/king.png",
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
