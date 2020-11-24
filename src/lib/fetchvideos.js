import { element } from './utils';

const URL = '../videos.json';

/**
 * Sækir upplýsingar um videoin
 * @return {json} Gögnin sem voru sótt
 */
async function fetchVideos() {
  const TheData = await fetch(URL)
    .then((result) => {
      if (!result.ok) {
        throw new Error('non 200 status');
      }
      return result.json();
    })
    .then((data) => (data))
    .catch(() => {
      const errorMessage = element('div', { class: 'errormessage' }, {}, 'Villa við að sækja gögn');
      document.querySelector('body').appendChild(errorMessage);
    });
  return TheData;
}

export default fetchVideos;
