/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';
import Button from '../../components/button';

function NewCategory() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  };
  const [categories, setCategory] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(e) {
    setValue(e.target.getAttribute('name'), e.target.value);
  }
  useEffect(() => {
    const URL = 'https://bakausflix.herokuapp.com/categorias';
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

          setValues(initialValues);
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

        <Button>Cadastrar</Button>
      </form>
      <ul>
        {categories.map((category) => (
          <li key={`${category.id}`}>
            {category.titulo}
          </li>
        ))}
      </ul>
      <Link to="/">Home</Link>
    </PageDefault>
  );
}
export default NewCategory;
