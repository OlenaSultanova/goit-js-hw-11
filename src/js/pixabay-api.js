import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY = '39060252-4018ed750f30cc123247f9a4e';

export async function fetchPhoto(q, page, perPage) {
  const params = {
    key: KEY,
    q: q,
    page: page,
    per_page: perPage,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  const response = await axios.get(URL, {
    params: params,
  });

  return response.data;
}
