import { element } from './lib/utils';
import fetchVideos from './lib/fetchvideos';

async function displayVideos(videos){
  const BODY = document.querySelector('body');
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

  for(let i = 0; i < Categories.length; i++){
    Header[i] = element('h2', {'class' : 'col col-12'}, {}, Categories[i].title);
    Headers[i] = element('div', {'class' : 'row'}, {}, Header[i]);
    VideoRows[i] = element('div', {'class' : 'row'}, {}, '');
    Videos[i] = new Array(Categories[i].videos.length);
    Thumbnails[i] = new Array(Categories[i].videos.length);
    for(let j = 0; j < Videos[i].length; j++){
      const videoId = Categories[i].videos[j];
      Thumbnails[i][j] = element('img', {'src' : videos.videos[videoId - 1].poster, 'class' : 'thumbnails'}, {}, '');
      Videos[i][j] = element('div', {'class' : 'col col-4 col-sm-10 offset-col-sm-1'}, {}, Thumbnails[i][j]);
      VideoRows[i].appendChild(Videos[i][j]);
    }
    Flokkur[i] = element('div', {'class' : 'grid'}, {}, Headers[i], VideoRows[i]);
    main.appendChild(Flokkur[i]);
  }

}

document.addEventListener('DOMContentLoaded', async () => {
  await fetchVideos().then((data) => {
    displayVideos(data);
  });
});
