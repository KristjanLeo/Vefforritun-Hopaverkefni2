import { element, videoLength, videoAge } from './lib/utils';
import fetchVideos from './lib/fetchvideos';


async function readVideoID(videodata){
  try {
    const url_string = (window.location.href).toLowerCase();
    const url = new URL(url_string);
    const videoId = url.searchParams.get('id');
    displayvideo(videodata, videoId);
  } catch (err) {
    console.log('Error' + err);
  }
}

async function displayvideo(videos, theid){

  let video = videos.videos[theid - 1];
  const BODY = document.querySelector('body');

  // Bætum við titli :
  const Header = element('h1', {}, {}, video.title);
  BODY.appendChild(Header);

  // main fyrir contentið :
  const main = element('main', {}, {}, '');
  BODY.appendChild(main);

  // Grid fyrir videoið :
  const videocontainer = element('div', {'class' : 'grid'}, {}, '');

  // Röð fyrir videoið :
  const videorow = element('div', {'class' : 'row'}, {}, '');
  videocontainer.appendChild(videorow);

  // Dálkur fyrir videoið :
  const videocol = element('div', {'class' : 'col col-12'}, {}, '');
  videorow.appendChild(videocol);

  // Videoið sjálft :
  const thevideo = element('video', {'src' : video.video, 'controls' : ''}, {}, '');
  videocol.appendChild(thevideo);

  main.appendChild(videocontainer);

  displayRecommandations(videos, video);
}

async function displayRecommandations(videos, video){

  const themain = document.querySelector('main');
  console.log(video.related);

  // Búum til Grid :
  const tengt = element('div', {'class' : 'grid'}, {}, '');
  themain.appendChild(tengt);

  // Header rowið :
  const tengtHeaderRow = element('div', {'class' : 'row'}, {}, '');
  tengt.appendChild(tengtHeaderRow);

  // Header colið :
  const tengtHeaderCol = element('h2', {'class' : 'col col-12'}, {}, 'Tengd myndbönd');
  tengtHeaderRow.appendChild(tengtHeaderCol);

  // Röð fyrir videoin :
  const relatedVideosRow = element('div', {'class' : 'row'}, {}, '');
  tengt.appendChild(relatedVideosRow);

  // Col fyrir hvert video :
  const relatedVideosCol = new Array(video.related.length);
  for(let i = 0; i < video.related.length; i++){
    let vidId = video.related[i];
    relatedVideosCol[i] = element('div', {'class' : 'col col-4 col-sm-12'}, {}, '');
    relatedVideosCol[i].onclick = function() {
        document.location.href = `video.html?id=${vidId}`;
    };
    relatedVideosRow.appendChild(relatedVideosCol[i]);
  }

  // Thumbnail fyrir hvert video :
  const Thumbnails = new Array(video.related.length);
  for(let i = 0; i < video.related.length; i++){
    let vidId = video.related[i];
    Thumbnails[i] = element('img', {'src' : videos.videos[vidId - 1].poster, 'class' : 'thumbnails'}, {}, '');
    relatedVideosCol[i].appendChild(Thumbnails[i]);
  }

  // Info fyrir hvert video :
  const Time = new Array(video.related.length);
  const Title = new Array(video.related.length);
  for(let i = 0; i < video.related.length; i++){
    let vidId = video.related[i];
    Time[i] = element('h5', {}, {}, videoAge(videos.videos[vidId - 1].created));
    Title[i] = element('h4', {}, {}, videos.videos[vidId - 1].title);
    relatedVideosCol[i].appendChild(Title[i]);
    relatedVideosCol[i].appendChild(Time[i]);
  }

  const BODY = document.querySelector('body');

  // Split horizontal row :
  const hr = element('hr', {'class' : 'split'}, {}, '');
  BODY.appendChild(hr);

  // Til baka linkurinn :
  const Tilbaka = element('a', {'href' : 'index.html'}, {}, 'Til baka');
  BODY.appendChild(Tilbaka);
}

document.addEventListener('DOMContentLoaded', async () => {

  await fetchVideos().then((data) => {
    readVideoID(data);
  });
});
