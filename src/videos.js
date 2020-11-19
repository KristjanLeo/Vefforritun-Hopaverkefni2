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

}

document.addEventListener('DOMContentLoaded', async () => {

  await fetchVideos().then((data) => {
    readVideoID(data);
  });
});
