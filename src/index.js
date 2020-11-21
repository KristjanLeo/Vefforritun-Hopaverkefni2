import { element, videoLength, videoAge } from './lib/utils';
import fetchVideos from './lib/fetchvideos';
async function displayVideos(videos){
  const BODY = document.querySelector('body');

  // Bætum við title :
  const MainElement = element('h1', {'class' : 'title'}, {}, 'Fræðslumyndbandaleigan');
  BODY.appendChild(MainElement);

  // Búum til main el :
  const main = element('main', {}, {}, '');
  BODY.appendChild(main);

  // Sækjum alla flokkana :
  const Categories = new Array(videos.categories.length);
  for(let i = 0; i < videos.categories.length; i++){  
    	Categories[i] = videos.categories[i];
  }

// Búum núna til grid (div) fyrirsérhvern flokk, header row og 1 eða 2 aukalega til þess að halda utan um videoin
const Flokkur = new Array(Categories.length);
const Headers = new Array(Categories.length);
const Header = new Array(Categories.length);
const VideoRows = new Array(Categories.length);
const Videos = new Array(Categories.length);
const Thumbnails = new Array(Categories.length);
const Info = new Array(Categories.length);
const Title = new Array(Categories.length);
const Time = new Array(Categories.length);
const Length = new Array(Categories.length);
const Div = new Array(Categories.length);
const HorizontalRow = new Array(Categories.length);
for(let i = 0; i < Categories.length; i++){
  Header[i] = element('h2', {'class' : 'col col-12'}, {}, Categories[i].title);
  Headers[i] = element('div', {'class' : 'row'}, {}, Header[i]);
  VideoRows[i] = element('div', {'class' : 'row'}, {}, '');
  Videos[i] = new Array(Categories[i].videos.length);
  Div[i] = new Array(Categories[i].videos.length);
  Thumbnails[i] = new Array(Categories[i].videos.length);
  Info[i] = new Array(Categories[i].videos.length);
  Title[i] = new Array(Categories[i].videos.length);
  Time[i] = new Array(Categories[i].videos.length);
  Length[i] = new Array(Categories[i].videos.length);
  for(let j = 0; j < Videos[i].length; j++){
    const videoId = Categories[i].videos[j];
    Thumbnails[i][j] = element('img', {'src' : videos.videos[videoId - 1].poster, 'class' : 'thumbnails'}, {}, '');
    Title[i][j] = element('h4', {}, {}, videos.videos[videoId - 1].title);
    Time[i][j] = element('h5', {}, {}, videoAge(videos.videos[videoId - 1].created));
    Length[i][j] = element('span', {'class': 'display-time'}, {}, videoLength(videos.videos[videoId - 1].duration));
    Div[i][j] =  element('div', {'class': 'thumbnail-container'}, {}, Thumbnails[i][j],Length[i][j]);
    Info[i][j] = element('div', {'class' : 'info'}, {}, Title[i][j], Time[i][j]);
    Videos[i][j] = element('div', {'class' : 'col col-4 col-sm-10 offset-col-sm-1 videocontainer'}, {},Div[i][j], Info[i][j]);
    Videos[i][j].onclick = function() {
      document.location.href = `video.html?id=${videoId}`;
    };
    VideoRows[i].appendChild(Videos[i][j]);
  }
  Flokkur[i] = element('div', {'class' : 'grid'}, {}, Headers[i], VideoRows[i]);
  main.appendChild(Flokkur[i]);
  HorizontalRow[i] = element('hr', {'class' : 'split'}, {}, '');
  main.appendChild(HorizontalRow[i]);
}

  const C = element('p', {}, {}, '© Fræðslumyndbandaleigan');
  BODY.appendChild(C);

}

document.addEventListener('DOMContentLoaded', async () => {
await fetchVideos().then((data) => {
  displayVideos(data);
  });
});