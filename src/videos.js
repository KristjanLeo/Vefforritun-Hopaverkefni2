import { element, videoLength, videoAge } from './lib/utils';
import fetchVideos from './lib/fetchvideos';


async function displayvideo(videodata){
  try {
    const url_string = (window.location.href).toLowerCase();
    const url = new URL(url_string);
    const videoId = url.searchParams.get('id');
    console.log(videoId);
  } catch (err) {
    console.log('Error' + err);
  }
}


document.addEventListener('DOMContentLoaded', async () => {

  await fetchVideos().then((data) => {
    displayvideo(data);
  });
});
