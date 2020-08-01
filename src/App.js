/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import './App.css';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import PageDefault from './components/PageDefault';
// import dadosIniciais from './data/dados_iniciais.json';
import categoriasRepository from './repositories/categorias';

function App() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriesWithVideos) => {
        console.log(categoriesWithVideos);
        setDadosIniciais(categoriesWithVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    // http://localhost:8080/categorias?_embed=videos
    <div>

      <PageDefault paddingAll={0}>
        {dadosIniciais.length === 0 && (<div>Loading...</div>)}
        {dadosIniciais.map((category, index) => {
          if (index === 0) {
            return (
              <div key={category.id}>
                <BannerMain
                  videoTitle={dadosIniciais[0].videos[0].titulo}
                  url={dadosIniciais[0].videos[0].url}
                  videoDescription={dadosIniciais[0].videos[0].description}
                />

                <Carousel ignoreFirstVideo category={dadosIniciais[0]} />
              </div>
            );
          }
          return (<Carousel category={category} key={category.id} />);
        })}
      </PageDefault>
    </div>
  );
}

export default App;
