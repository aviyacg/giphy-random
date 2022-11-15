const API_KEY = 'BSf710HTai7To4NGjwDIX5roTAOSvLNG';

async function fetchGifUrl(searchWord){
  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${search}`, {mode: 'cors'});
  const json = await response.json();
  const url = json.data.images.original.url;
  return url;
}

function searchGif(){
  const input = document.querySelector('input');
  if (input.value !== '') {
    const url = fetchGifUrl(input.value).catch(err => alert(err));
    const newGif = new Image();
    newGif.src = url;
    document.querySelector('img').replaceWith(newGif);
  }
}

const searchButton = document.querySelector('#search');
searchButton.addEventListener('click', searchGif);