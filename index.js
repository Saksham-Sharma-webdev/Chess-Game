import { initGameRender } from "./render/main.js";
import { initGame } from "./data/data.js";
import { globalEvent } from "./events/globalEvent.js";

const globalState = initGame()

initGameRender(globalState)
globalEvent()