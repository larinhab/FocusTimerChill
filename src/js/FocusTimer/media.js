import * as state from './state.js'

//export const video = document.getElementById('video')
export const audios = document.getElementById('audio')
export const cards = document.getElementsByClassName('card')
export const musicBtn = document.getElementById('music')

//export const natureVideo = new video('./src/video/florest.mp4')
//export const rainVideo = new video('./src/videos/rain.mp4')
//export const coffeeVideo = new video('./src/videos/coffeeshop.mp4')
//export const fireVideo = new video('./src/videos/fireplace.mp4')
//export const defaultvideoVideo = new video('./src/videos/bg-audio.mp4')   


export const natureAudio = new Audio('./src/audio/florest.wav')
export const rainAudio = new Audio('./src/audio/rain.wav')
export const coffeeAudio = new Audio('./src/audio/coffeeshop.wav')
export const fireAudio = new Audio('./src/audio/fireplace.wav')
export const defaultAudio = new Audio('./src/audio/bg-audio.mp3')


//video.setAttribute('src', natureVideo)

// MUSIC -----------------------------------------------

export function toggleMusic() {
    musicBtn.addEventListener('click', (e) => {
        state.isMute = document.documentElement.classList.toggle('music-on')
        if(state.isMute) {
            defaultAudio.play()
            return
        }else{
            defaultAudio.pause()
        }
        console.log('on')
    })
}

toggleMusic()