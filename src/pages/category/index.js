import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';
import Button from '../../components/button';
import useForm from '../../hooks/useForm/useFrom';
import CategoryRepo from '../../repositories/categorias';

function NewCategory() {
  const initialValues = {
    id: '',
    titulo: '',
    description: '',
    color: '#000',
  };
  const { handleChange, values, clearForm } = useForm(initialValues);
  const [categories, setCategory] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const URL = window.location.href.indexOf('localhost') > 0 ? 'https://bakausflix.herokuapp.com/' : ''; // 'https://bakausflix.herokuapp.com/';
    fetch(URL)
      .then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategory([...resposta]);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
  }, []);
  return (
    <PageDefault>
      <h1>
        Cadastro da Categoria:
        {values.name}
      </h1>
      <form
        onSubmit={function handleSubmit(e) {
          e.preventDefault();
          setCategory([...categories, values.name]);
          CategoryRepo.createCategory({
            id: '',
            descricao: values.description,
            titulo: values.name,
            cor: values.color,
          }).then(() => {
            history.push('/');
          });

          clearForm();
        }}
      >
        <FormField
          label="Nome"
          value={values.name}
          onChange={handleChange}
          name="name"
          type="text"

        />

        <FormField
          type="textarea"
          label="Descrição:"
          name="description"
          value={values.description}
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <Button>Salvar</Button>

      </form>
      <table border="1">
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Descrição</th>
            <th>Cor</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={`${category.id}`}>
              <td>{category.titulo}</td>
              <td>{category.descricao}</td>
              <td>{category.cor}</td>
            </tr>

          ))}
        </tbody>
      </table>

      <Link to="/">Home</Link>
    </PageDefault>
  );
}
export default NewCategory;
