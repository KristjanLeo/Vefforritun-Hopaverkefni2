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
  const BODY = document.querySelector('body');
  const Header = element('h1', {}, {}, videos.videos[theid-1].title);
  BODY.appendChild(Header);
}

document.addEventListener('DOMContentLoaded', async () => {

  await fetchVideos().then((data) => {
    readVideoID(data);
  });
});
