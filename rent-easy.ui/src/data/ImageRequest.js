import axios from 'axios';

const baseUrl = 'http://localhost:50899/api/image';

const postImgToDb = (img) => axios.post(`${baseUrl}`, img);

export default { postImgToDb };
