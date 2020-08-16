import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import useForm from '../../hooks/useForm/useFrom';
import FormField from '../../components/FormField';
import Button from '../../components/button';
import VideosRepository from '../../repositories/videos';
import CategoriesRepository from '../../repositories/categorias';

function NewVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    CategoriesRepository
      .getAll()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      });
  }, []);
  // eslint-disable-next-line spaced-comment
  //=============================================================

  // eslint-disable-next-line spaced-comment
  //============================================================
  return (

    <PageDefault>
      <h1>Cadastro de Video</h1>

      <Link to="/new/category">Cadastrar Categoria</Link>

      <form onSubmit={(e) => {
        e.preventDefault();
        console.log(e.values);
        // eslint-disable-next-line max-len
        const categoryChoosed = categories.find((categoria) => categoria.titulo === values.categoria);
        VideosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoryChoosed.id,
        })
          .then(() => {
            history.push('/');
          });
      }}
      >
        <FormField
          label="Titulo do Video"
          value={values.titulo}
          onChange={handleChange}
          name="titulo"
          type="text"
        />
        <FormField
          label="URL do video"
          value={values.url}
          onChange={handleChange}
          name="url"
          type="text"
        />
        <FormField
          label="Categoria do Video"
          value={values.categoria}
          onChange={handleChange}
          name="categoria"
          type="text"
          suggestions={categoryTitles}
        />

        <Button type="submit">Cadastrar</Button>
      </form>
    </PageDefault>
  );
}
export default NewVideo;
