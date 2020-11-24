import { element } from '../lib/utils';

export async function back(thevideo) {
  const thevid = thevideo;
  thevid.currentTime -= 3;
}

export async function playpause(thevideo) {
  const playpauseimg = document.getElementById('playpause');
  if (!(thevideo.paused || thevideo.ended) && thevideo.currentTime > 0) {
    thevideo.pause();
    playpauseimg.src = 'img/play.svg';

    // Bætum við overlayinu ...
    const VideoContainer = document.querySelector('.videocol');
    const overlay = element('div', { class: 'overlay' }, {}, '');
    const overlayicon = element('img', { class: 'overlayicon', src: 'img/play.svg' }, { click: () => { playpause(thevideo); } }, '');
    VideoContainer.appendChild(overlay);
    VideoContainer.appendChild(overlayicon);
  } else {
    thevideo.play();
    playpauseimg.src = 'img/pause.svg';

    // Removeum overlayið ...
    const overlay = document.querySelector('.overlay');
    const overlayicon = document.querySelector('.overlayicon');
    if (overlay) {
      const VideoContainer = overlay.parentElement;
      VideoContainer.removeChild(overlay);
    }
    if (overlayicon) {
      const VideoContainer = overlayicon.parentElement;
      VideoContainer.removeChild(overlayicon);
    }
  }
}

export async function muteunmute(thevideo) {
  const thevid = thevideo;
  const muteunmuteimg = document.getElementById('muteunmute');
  if (thevid.volume > 0) {
    thevid.volume = 0;
    muteunmuteimg.src = 'img/unmute.svg';
  } else {
    thevid.volume = 1.0;
    muteunmuteimg.src = 'img/mute.svg';
  }
}

export async function fullscreen(thevideo) {
  thevideo.requestFullscreen();
}

export async function next(thevideo) {
  const thevid = thevideo;
  thevid.currentTime += 3;
}
