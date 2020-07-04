export default function imgService(text, page = 1) {
  return fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${text}&page=${page}&per_page=12&key=17307433-b3b18b1a01ee5cc066151defb`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    },
  ).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      return false;
    }
  });
}
