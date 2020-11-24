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
      console.error('Villa við að sækja gögn');
    });
  console.log(TheData);
  return TheData;
}

export default fetchVideos;
