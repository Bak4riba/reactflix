import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
function NotFound() {
  return (
    <PageDefault>
      <h1>Humm...Algo não esta certo...</h1>
      <h3>
        Oque voce procura não pode ser achado, tente algum desses links abaixo
      </h3>

      <Link to="/">Home</Link>
      <Link to="/new/category">Cadastro de Categoria</Link>
      <Link to="/new/video">Cadastro de Video</Link>
    </PageDefault>
  );
}
export default NotFound;
