import config from '../config/index';

const URL_VIDEOS = `${config.URLBACKEND}/videos`;
function create(objectVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    // Disso sobre os métodos para deletar e tal que eu tava falando
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objectVideo),
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
  create,
};
