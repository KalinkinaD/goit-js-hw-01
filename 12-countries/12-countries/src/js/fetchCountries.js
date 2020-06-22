export default function fetchCountries(name) {
  return fetch(`https://restcountries.eu/rest/v2/name/${name}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return false;
      }
    })
    .catch(error => console.log(error));
}
