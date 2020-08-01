import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
function NewVideo() {
  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <Link to="/new/category">Cadastrar Categoria</Link>
    </PageDefault>
  );
}
export default NewVideo;
