import React from 'react';
import './App.css';
import Menu from './components/menu';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import dadosIniciais from './data/dados_iniciais.json';

function App() {
  return (
    <div>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={'O Que é Front-End? Trabalhando na area'}
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

      <BannerMain
        videoTitle={dadosIniciais.categorias[1].videos[1].titulo}
        url={dadosIniciais.categorias[1].videos[1].url}
        videoDescription={'O Que é Front-End? Trabalhando na area'}
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[1]} />
      <Footer />
    </div>
  );
}

export default App;
