import { element, videoAge, videoLength } from './lib/utils';
import fetchVideos from './lib/fetchvideos';
import {
  back, playpause, muteunmute, fullscreen, next,
} from './videolib/videocontrols';

async function displayControlBar(thevideo) {
  const main = document.querySelector('main');

  // Grid fyrir control-bar :
  const controlbar = element('div', { class: 'grid' }, {}, '');
  main.appendChild(controlbar);

  // Row fyrir takkana :
  const controlrow = element('div', { class: 'row controlrow' }, {}, '');
  controlbar.appendChild(controlrow);

  // Back takki :
  const backimg = element('img', {
    class: 'button-img', src: 'img/back.svg', width: '75', height: '75',
  }, {}, '');
  const btnback = element('button', { class: 'button' }, { click: () => { back(thevideo); } }, backimg);
  controlrow.appendChild(btnback);

  // Play takki :
  const playimg = element('img', {
    class: 'button-img', src: 'img/play.svg', width: '75', height: '75', id: 'playpause',
  }, {}, '');
  const btnplay = element('button', { class: 'button' }, { click: () => { playpause(thevideo); } }, playimg);
  controlrow.appendChild(btnplay);

  // Mute takki :
  const muteimg = element('img', {
    class: 'button-img', src: 'img/mute.svg', width: '75', height: '75', id: 'muteunmute',
  }, {}, '');
  const btnmute = element('button', { class: 'button' }, { click: () => { muteunmute(thevideo); } }, muteimg);
  controlrow.appendChild(btnmute);

  // Full screen takki :
  const fullscreenimg = element('img', {
    class: 'button-img', src: 'img/fullscreen.svg', width: '75', height: '75',
  }, {}, '');
  const btnfullscreen = element('button', { class: 'button' }, { click: () => { fullscreen(thevideo); } }, fullscreenimg);
  controlrow.appendChild(btnfullscreen);

  // Next takki :
  const nextimg = element('img', {
    class: 'button-img', src: 'img/next.svg', width: '75', height: '75',
  }, {}, '');
  const btnnext = element('button', { class: 'button' }, { click: () => { next(thevideo); } }, nextimg);
  controlrow.appendChild(btnnext);
}

async function displayRecommandations(videos, video) {
  const BODY = document.querySelector('body');
  const themain = document.querySelector('main');

  // Búum til Grid :
  const tengt = element('div', { class: 'grid' }, {}, '');
  themain.appendChild(tengt);

  // Header rowið :
  const tengtHeaderRow = element('div', { class: 'row' }, {}, '');
  tengt.appendChild(tengtHeaderRow);

  // Header colið :
  const tengtHeaderCol = element('h2', { class: 'col col-12' }, {}, 'Tengd myndbönd');
  tengtHeaderRow.appendChild(tengtHeaderCol);

  // Röð fyrir videoin :
  const relatedVideosRow = element('div', { class: 'row' }, {}, '');
  tengt.appendChild(relatedVideosRow);

  // Col fyrir hvert video :
  const relatedVideosCol = new Array(video.related.length);
  for (let i = 0; i < video.related.length; i += 1) {
    const vidId = video.related[i];
    relatedVideosCol[i] = element('div', { class: 'col col-4 col-sm-12' }, {}, '');
    relatedVideosCol[i].onclick = () => {
      document.location.href = `video.html?id=${vidId}`;
    };
    relatedVideosRow.appendChild(relatedVideosCol[i]);
  }

  // Thumbnail fyrir hvert video :
  const Thumbnails = new Array(video.related.length);
  const Length = new Array(video.related.length);
  const Div = new Array(video.related.length);
  for (let i = 0; i < video.related.length; i += 1) {
    const vidId = video.related[i];
    Thumbnails[i] = element('img', { src: videos.videos[vidId - 1].poster, class: 'thumbnails' }, {}, '');
    Length[i] = element('span', { class: 'display-time' }, {}, videoLength(videos.videos[vidId - 1].duration));
    Div[i] = element('div', { class: 'thumbnail-container videocontainer' }, {}, Thumbnails[i], Length[i]);
    relatedVideosCol[i].appendChild(Div[i]);
  }

  // Info fyrir hvert video :
  const Time = new Array(video.related.length);
  const Title = new Array(video.related.length);
  for (let i = 0; i < video.related.length; i += 1) {
    const vidId = video.related[i];
    Time[i] = element('h5', {}, {}, videoAge(videos.videos[vidId - 1].created));
    Title[i] = element('h4', {}, {}, videos.videos[vidId - 1].title);
    relatedVideosCol[i].appendChild(Title[i]);
    relatedVideosCol[i].appendChild(Time[i]);
  }

  // Split horizontal row :
  const hr = element('hr', { class: 'split' }, {}, '');
  BODY.appendChild(hr);

  // Til baka linkurinn :
  const Tilbaka = element('a', { href: 'index.html' }, {}, 'Til baka');
  BODY.appendChild(Tilbaka);
}

async function displayvideo(videos, theid) {
  const video = videos.videos[theid - 1];
  const BODY = document.querySelector('body');

  // Bætum við titli :
  const Header = element('h1', {}, {}, video.title);
  BODY.appendChild(Header);

  // main fyrir contentið :
  const main = element('main', {}, {}, '');
  BODY.appendChild(main);

  // Grid fyrir videoið :
  const videocontainer = element('div', { class: 'grid' }, {}, '');

  // Röð fyrir videoið :
  const videorow = element('div', { class: 'row' }, {}, '');
  videocontainer.appendChild(videorow);

  // Dálkur fyrir videoið :
  const videocol = element('div', { class: 'col col-12 videocol' }, {}, '');
  videorow.appendChild(videocol);

  // Videoið sjálft :
  const thevideo = element('video', { src: video.video }, {}, '');
  videocol.appendChild(thevideo);

  main.appendChild(videocontainer);

  displayControlBar(thevideo);

  displayRecommandations(videos, video);
}

async function readVideoID(videodata) {
  try {
    const urlString = (window.location.href).toLowerCase();
    const url = new URL(urlString);
    const videoId = url.searchParams.get('id');
    let found = false;
    for (let i = 0; i < videodata.videos.length; i += 1) {
      if (videodata.videos[i].id == videoId) {
        found = true;
      }
    }
    if (found) {
      displayvideo(videodata, videoId);
    } else {
      const errorMessage = element('div', { class: 'errormessage' }, {}, `Villa við að sækja vídeo, ekkert vídeo fannst með id: ${videoId}`);
      document.querySelector('body').appendChild(errorMessage);
    }
  } catch (err) {
    const errorMessage = element('div', { class: 'errormessage' }, {}, 'Villa við að sækja vídeo');
    document.querySelector('body').appendChild(errorMessage);
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  const Loading = element('div', { class: 'loading' }, {}, 'Hleð gögnum...');
  document.querySelector('body').appendChild(Loading);
  await fetchVideos().then((data) => {
    readVideoID(data);
  });
  document.querySelector('body').removeChild(Loading);
});
