import state from "./state.js";
import * as el from "./elements.js"
import { countDown } from "./timer.js"

// EVENTS

export function startRunning () {
    const playBtn = document.getElementById('play')

    playBtn.addEventListener('click', (event) => {
        state.isRunning = !state.isRunning
       // if(!startRunning) return
       // setInterval(() =>  countDown(), 1000)

        toggleRunning()    
        hidePlayBtn()
       return
    })
}

export function pause() {
    const pauseBtn = document.getElementById('pause')

    pauseBtn.addEventListener('click', (event) => {
        state.isRunning = document.documentElement.classList.toggle('running')

        hidePlayBtn()
        countDown()
        clearInterval(state.countdownId)

    })
}

export function hidePlayBtn() {
    let restartBtn =  document.getElementById('play')
    restartBtn.style.display = (restartBtn.style.display === "none" ? "block" : "none")
}


export function addTime() {
    const plusBtn = document.getElementById('plus')

    plusBtn.addEventListener('click', (event) => {
        if (state.minutes >= 60) return;
       
        state.minutes += 5
        toggleRunning(state.seconds)

        timeDisplay(state.minutes, state.seconds)
    })
}

export function subtractTime() {
    const minusBtn = document.getElementById('minus')

    minusBtn.addEventListener('click', (event) => {
        if (state.minutes <= 0) return;

        state.minutes = state.minutes - 5;
    
        timeDisplay(state.minutes, state.seconds)
    })
}


// ACTIONS

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running', state.isRunning) 
    countDown()
}


export function timeDisplay(minutes, seconds) {
    el.minutes.innerText = String(minutes).padStart(2, '0');
    el.seconds.innerText = String(seconds).padStart(2, '0');
}

