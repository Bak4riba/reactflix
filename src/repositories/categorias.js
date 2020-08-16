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

function createCategory(objectCategory) {
  return fetch(`${URL_CATEGORIES}`, {
    // Disso sobre os métodos para deletar e tal que eu tava falando
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objectCategory),
  })
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
  getAll,
  createCategory,
};
