import axios from 'axios';

const baseUrl = 'http://localhost:50899/api/user';

const addNewUser = (newUser) => axios.post(`${baseUrl}`, newUser);

export default { addNewUser };
