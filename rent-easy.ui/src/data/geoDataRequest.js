import axios from 'axios';

const baseUrl = 'https://nominatim.openstreetmap.org/search?format=json&limit=3&q=';

const getGeoLoc = (address) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}${address}`)
    .then((resp) => resolve(resp.data[0]))
    .catch((error) => reject(error));
});


export default { getGeoLoc };
