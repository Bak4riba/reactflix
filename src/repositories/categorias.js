import config from '../config/index';

const URL_CATEGORIES = `${config.URLBACKEND}/categorias`;
function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (responseServer) => {
      if (responseServer.ok) {
        const response = await responseServer.json();
        return response;
      }
      throw new Error('Não foi possivel pegar os dados');
    });
}

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (responseServer) => {
      if (responseServer.ok) {
        const response = await responseServer.json();
        return response;
      }
      throw new Error('Não foi possivel pegar os dados');
    });
}

export default {
  getAllWithVideos,
  getAll
};
