const slider = document.querySelector('.progress');
const video = document.querySelector('#videoPlayer');
const playBtn = document.querySelector('.play__btn');
const playIcon = document.querySelector('.play__icon')
const videoProgress = document.querySelector('.progress')
const volumeBtn = document.querySelector('.volume__icon')
const volumeRange = document.querySelector('.volume')

const videoPlay = () => {
    if(video.paused){
        video.play();
        playBtn.classList.add('play__btn_inactive');
        playIcon.classList.add('play__icon_pause')
    }else{
       video.pause();
       playBtn.classList.remove('play__btn_inactive')
       playIcon.classList.remove('play__icon_pause')
    }
    
}




volumeRange.addEventListener('change', () => {
    const volumeValue = volumeRange.value;
    colorValue = volumeValue * 100;
    let color = 'linear-gradient(90deg, rgb(189, 174, 130)' + colorValue + '%, rgb(189, 174, 130)' + colorValue + '%, rgb(200, 200, 200)' + colorValue + '%, rgb(200, 200, 200)' + colorValue + '%'
    volumeRange.style.background = color;
    video.volume = volumeValue;
    if(volumeValue == 0) {
        volumeBtn.classList.add('volume__icon_muted')
    }else {
        volumeBtn.classList.remove('volume__icon_muted')
    }
})

volumeBtn.addEventListener('click',() =>{
   if (video.volume > 0) {
    volumeBtn.classList.add('volume__icon_muted')
    video.volume = 0;
   } else {
    volumeBtn.classList.remove('volume__icon_muted')
    video.volume = video.volume + 0.5;
   }
        
 
})





videoProgress.addEventListener('change', () => {
    const value = videoProgress.value
    const duration = video.duration
    let color = 'linear-gradient(90deg, rgb(189, 174, 130)' + value + '%, rgb(189, 174, 130)' + value + '%, rgb(200, 200, 200)' + value + '%, rgb(200, 200, 200)' + value + '%'
    videoProgress.style.background = color
    video.currentTime = (value * duration) / 100;
  

})



video.addEventListener('timeupdate', () => {
    const currentTime = videoPlayer.currentTime;
    const duration = videoPlayer.duration;
    const value = videoProgress.value
    videoProgress.value = (currentTime / duration) * 100;

    let color = 'linear-gradient(90deg, rgb(189, 174, 130)' + value + '%, rgb(189, 174, 130)' + value + '%, rgb(200, 200, 200)' + value + '%, rgb(200, 200, 200)' + value + '%'
    videoProgress.style.background = color

   
  

});




playIcon.addEventListener('click', videoPlay)
playBtn.addEventListener('click', videoPlay)
video.addEventListener('click', videoPlay)
