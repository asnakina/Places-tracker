import axios from 'axios';

const BASE_URL = 'http://localhost:7778'

async function getVisitedPlaces() {
  const response = await axios.get(`${BASE_URL}/placesvisited`);
  return response.data;
}

async function getNotVisitedPlaces() {
  const response = await axios.get(`${BASE_URL}/placesnotvisited`);
  return response.data;
}

// async function getVisitedPlace(id) {
//   const response = await axios.get(`${BASE_URL}/places/${id}`);
//   return response.data;
// }

export {
  getVisitedPlaces,
  getNotVisitedPlaces
}
