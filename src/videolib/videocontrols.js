export async function back(thevideo){
  thevideo.currentTime -= 3;
}

export async function playpause(thevideo){
  let playpauseimg = document.getElementById('playpause');
  if(!(thevideo.paused || thevideo.ended) && thevideo.currentTime > 0){
    thevideo.pause();
    playpauseimg.src = 'img/play.svg';
  }else{
    thevideo.play();
    playpauseimg.src = 'img/pause.svg';
  }
}

export async function muteunmute(thevideo){
  let muteunmuteimg = document.getElementById('muteunmute');
  if(thevideo.volume > 0){
    thevideo.volume = 0;
    muteunmuteimg.src = 'img/unmute.svg';
  }else{
    thevideo.volume = 1.0;
    muteunmuteimg.src = 'img/mute.svg';
  }
}

export async function fullscreen(thevideo){
  thevideo.requestFullscreen();
}

export async function next(thevideo){
  thevideo.currentTime += 3;
}
