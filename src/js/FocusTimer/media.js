import * as state from './state.js'

export const videos = document.getElementById('video')
export const cards = document.querySelectorAll('.card')
export const musicBtn = document.getElementById('music')
export const stopBtn = document.getElementById('stop')
const html = document.documentElement;

//export const natureVideo = new Video('./src/video/florest.mp4')
//export const rainVideo = new Video('./src/videos/rain.mp4')
//export const coffeeVideo = new Video('./src/videos/coffeeshop.mp4')
//export const fireVideo = new Video('./src/videos/fireplace.mp4')
//export const defaultvideoVideo = new Video('./src/videos/bg-audio.mp4')   

export const audio = {
    nature: new Audio('./src/audio/florest.wav'),
    rain:  new Audio('./src/audio/raint.wav'),
    coffee: new Audio('./src/audio/coffeeshop.wav'),
    fire: new Audio('./src/audio/fireplace.wav'),
    defaultAudio: new Audio('./src/audio/default.wav')
}


// MUSIC -----------------------------------------------

export function toggleMusic() {
    let isPlaying = false
    
    musicBtn.addEventListener('click', (e) => {
        if(isPlaying){
            audio.defaultAudio.pause() 
            musicBtn.style.display = 'none'
            stopBtn.style.display = 'block'
            console.log('parei')
        }else{
            audio.defaultAudio.play()
        }
        isPlaying = !isPlaying
    })
    
     stopBtn.addEventListener('click', (e) => {
        if(isPlaying){
            audio.defaultAudio.pause()
        }else{
            audio.defaultAudio.play()
            console.log("click voltei")
            musicBtn.style.display = 'block'
            stopBtn.style.display = 'none'
        }
        isPlaying = !isPlaying
     })
};

toggleMusic()