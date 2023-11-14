import * as multimedia from "./FocusTimer/media.js"

let defaultMode = true
let natureMode = false
let rainMode = false
let coffeeMode = false
let fireMode = false

const natureToggle = document.getElementById('nature')
const rainToggle = document.getElementById('rain')
const coffeeToggle = document.getElementById('coffee')
const fireToggle = document.getElementById('fire')

export const resetModes = () => {
    document.documentElement.classList.remove('nature', 'rain', 'coffee', 'fire')
     natureMode = false
     rainMode = false
     coffeeMode = false
     fireMode = false
}

export const resetModeActive = (mode) => {
    if(mode){
        resetModes()
    }else {
        document.documentElement.classList.toggle('mode')   
    }
} 


natureToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('nature')
    document.documentElement.classList.remove('rain', 'coffee', 'fire')
   
    resetModeActive()
    const mode = defaultMode ? 'nature' : 'dark'
    
})



rainToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('rain')
    document.documentElement.classList.remove('nature', 'coffee', 'fire')
    
    resetModeActive()
    //rainMode = !rainMode
    const mode = defaultMode ? 'rain' : 'dark'
})

coffeeToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('coffee')
    document.documentElement.classList.remove('nature', 'rain', 'fire')
    resetModeActive()

    //coffeeMode = !coffeeMode
    const mode = defaultMode ? 'coffee' : 'dark'
})

fireToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('fire')
    document.documentElement.classList.remove('nature', 'rain', 'coffee')
    resetModeActive()
    //fireMode = !fireMode   
    const mode = defaultMode ? 'fire' : 'dark'
})

