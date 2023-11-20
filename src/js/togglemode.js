import * as multimedia from "./FocusTimer/media.js"

let defaultMode = true

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

    if(document.documentElement.classList.contains('nature')){
        multimedia.audio.defaultAudio.pause()
        multimedia.audio.nature.play()
        multimedia.audio.rain.pause()
        multimedia.videos.setAttribute('src', `./src/videos/nature.mp4`)
    }else {
        multimedia.audio.nature.pause()
        multimedia.audio.fire.pause()
        multimedia.audio.rain.pause()
        multimedia.audio.coffee.pause()
        multimedia.audio.defaultAudio.play()

        multimedia.videos.setAttribute('src', `./src/videos/default.mp4`)
    }
})  


rainToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('rain')
    document.documentElement.classList.remove('nature', 'coffee', 'fire')
    
    resetModeActive()
    //rainMode = !rainMode
    const mode = defaultMode ? 'rain' : 'dark'
    if(document.documentElement.classList.contains('rain')){
        multimedia.audio.defaultAudio.pause()
        multimedia.audio.rain.play()
        multimedia.audio.nature.pause()
        multimedia.audio.fire.pause()
        multimedia.audio.coffee.pause()
        multimedia.videos.setAttribute('src', `./src/videos/rainn.mp4`)
    }else {
        multimedia.audio.rain.pause()
        multimedia.audio.fire.pause()
        multimedia.audio.nature.pause()
        multimedia.audio.coffee.pause()
        multimedia.audio.defaultAudio.play()

        multimedia.videos.setAttribute('src', `./src/videos/default.mp4`)
    }
})

coffeeToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('coffee')
    document.documentElement.classList.remove('nature', 'rain', 'fire')
    resetModeActive()

    //coffeeMode = !coffeeMode
    const mode = defaultMode ? 'coffee' : 'dark'
    if(document.documentElement.classList.contains('coffee')){
        multimedia.audio.defaultAudio.pause()
        multimedia.audio.nature.pause()
        multimedia.audio.rain.pause()
        multimedia.audio.coffee.play()

        multimedia.videos.setAttribute('src', `./src/videos/coffeee.mp4`)
    }else {
        multimedia.audio.coffee.pause()
        multimedia.audio.fire.pause()
        multimedia.audio.nature.pause()
        multimedia.audio.rain.pause()
        multimedia.audio.defaultAudio.play()

        multimedia.videos.setAttribute('src', `./src/videos/default.mp4`)
    }
})

fireToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('fire')
    document.documentElement.classList.remove('nature', 'rain', 'coffee')
    resetModeActive()
    //fireMode = !fireMode   
    const mode = defaultMode ? 'fire' : 'dark'

    if(document.documentElement.classList.contains('fire')){
        multimedia.audio.defaultAudio.pause()
        multimedia.audio.nature.pause()
        multimedia.audio.rain.pause()
        multimedia.audio.coffee.pause()
        multimedia.audio.fire.play()
        multimedia.videos.setAttribute('src', `./src/videos/fireplace.mp4`)
    }else {
        multimedia.audio.fire.pause()
        multimedia.audio.nature.pause()
        multimedia.audio.rain.pause()
        multimedia.audio.coffee.pause()
        multimedia.audio.defaultAudio.play()

        multimedia.videos.setAttribute('src', `./src/videos/default.mp4`)
    }
})

