import axios from 'axios';

const baseUrl = 'http://localhost:50899/api/room';

const getAllRooms = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}`)
    .then((resp) => {
      resolve(resp.data);
    })
    .catch((error) => reject(error));
});


export default { getAllRooms };
