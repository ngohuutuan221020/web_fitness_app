export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '31476556demsh16ac4199e253db6p1b8605jsn144d8f89bc5b',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '31476556demsh16ac4199e253db6p1b8605jsn144d8f89bc5b',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
