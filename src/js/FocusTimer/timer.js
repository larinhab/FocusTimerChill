import state from "./state.js"
import * as el from "./elements.js"
import { timeDisplay } from "./events.js"

let minutes = Number(el.minutes.textContent)
let seconds = Number(el.seconds.textContent)

export function countDown(){
    
    if(state.isRunning === false) return

    clearInterval(state.countdownId)

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    if(seconds === 0){    
        seconds = 59
        minutes--
    } else {
        seconds --
    }

    if(minutes <= 0){
       minutes = 0
       seconds++
        return
    }

    timeDisplay(minutes, seconds)
    state.countdownId = setInterval (()=> countDown(), 1000)
}

