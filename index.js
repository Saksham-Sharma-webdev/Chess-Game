import { initGameRender } from "./render/main.js";
import { initGame } from "./data/data.js";
import { globalEvent } from "./events/globalEvent.js";
import globalState from "./state.js";


initGameRender(globalState)
globalEvent()
