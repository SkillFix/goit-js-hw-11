import axios from 'axios';
export { fetchImages };

axios.defaults.baseURL = 'https://pixabay.com/api/';
const AUTH_TOKEN = '26822311-a0e098b2f5216f801fe0726a9';

async function fetchImages(query, page, perPage) {
  const response = await axios.get(
    `?key=${AUTH_TOKEN}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return response;
}
