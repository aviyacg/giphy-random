const API_KEY = 'BSf710HTai7To4NGjwDIX5roTAOSvLNG';

async function fetchGifUrl(searchWord){
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${searchWord}`, {mode: 'cors'});
    const json = await response.json();
    const url = json.data.images.original.url;
    return url;
  } catch(error) {
    console.log(error);
  }
}

async function searchGif(){
  const input = document.querySelector('input');
  if (input.value !== '') {
    const url = await fetchGifUrl(input.value);
    document.querySelector('img').src = url;
  }
}

const searchButton = document.querySelector('#search');
searchButton.addEventListener('click', searchGif);