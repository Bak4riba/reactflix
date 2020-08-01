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
    titulo: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=jOAU81jdi-c',
    categoria: 'Front End',
  });

  useEffect(() => {
    CategoriesRepository
      .getAll()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      });
  }, []);

  return (

    <PageDefault>
      <h1>Cadastro de Video</h1>

      <Link to="/new/category">Cadastrar Categoria</Link>

      <form onSubmit={(e) => {
        e.preventDefault();
        const categoryChoosed = categories.find((categoria) => categoria.titulo === values.categoria);
        VideosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoryChoosed.id,
        })
          .then(() => {
            console.log('Cadastrado com sucesso');
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
          label="url do Video"
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
