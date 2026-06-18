import { board } from "../helper/constants.js";

function globalEvent(){
  board.addEventListener("click",function(event){
    console.log(event)
  })
}

export {globalEvent}