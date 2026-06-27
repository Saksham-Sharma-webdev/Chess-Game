import { initGame } from "./data/data.js";

const globalState = initGame() 
// a 2D array representing current state of the board
// an array having an array for each row 
// in that row there is an object for each square

export default globalState