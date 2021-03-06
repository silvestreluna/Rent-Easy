import axios from 'axios';

// const baseUrl = 'http://production.shippingapis.com/ShippingAPI.dll?API=CityStateLookup&XML=';
const baseUrl = 'http://production.shippingapis.com/ShippingAPI.dll?API=Verify&XML=';

const getCityAndStateByZip = (reqBody) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}${reqBody}`)
    .then((resp) => {
      resolve(resp.data);
    })
    .catch((error) => reject(error));
});


const addressChecker = (reqBody) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}${reqBody}`)
    .then((resp) => {
      resolve(resp.data);
    })
    .catch((error) => reject(error));
});

export default { getCityAndStateByZip, addressChecker };
