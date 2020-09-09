//UI Variables
let video = document.getElementById('video')
let play = document.getElementById('play')
let stop = document.getElementById('stop')
let progress = document.getElementById('progress')
let timestamp = document.getElementById('timestamp')

//Event Listeners 

video.addEventListener('click', toggleVideoStatus)
video.addEventListener('play', updatePlayIcon)
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('timeupdate', updateProgress)

play.addEventListener('click', toggleVideoStatus)

stop.addEventListener('click', stopVideo)

progress.addEventListener('change', setVideoProgress)

//Toggle video status Function

function toggleVideoStatus() {
    if(video.paused) {
        video.play()
    } else {
        video.pause()
    }
}

//Update Icon 
function updatePlayIcon() {
    if(video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }
}

//Update progress
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100

    //Get Minutes
    let mins = Math.floor(video.currentTime / 60)
    if (mins < 10) {
        mins = '0' + String(mins)
    }
    //Get seconds
    let secs = Math.floor(video.currentTime % 60)
    if (secs < 10) {
        secs = '0' + String(secs)
    }

    timestamp.innerHTML = `${mins}:${secs}`
}

//Stopping video
function stopVideo() {
    video.currentTime = 0
    video.pause()
}

function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100
}