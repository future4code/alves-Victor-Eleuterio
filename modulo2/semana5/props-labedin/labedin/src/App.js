import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import { CardPequeno } from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://avatars.githubusercontent.com/u/104536225?s=400u=3d19eb4a03b03fb96af3688d8b45bbbec89bd02av=4"
          nome="Victor Leandro Eleuterio"
          descricao="Oi, eu sou o Victor. Sou aluno da Labenu. Adoro aprender sobre programação com a Labenu, está sendo uma experiência incrível, por mais que seja difícil é um grande desafio que estou adorando passar."
        />

        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/6819/6819501.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/561/561127.png"
          info="Email:"
          infoUser="victorleandro430@gmail.com"
          
          />
        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/535/535239.png"
          info="Endereço:"
          infoUser="Rua Margot Fonteyn"
          />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://yt3.ggpht.com/ytc/AKedOLSH-PUg_wTvKW7xAKL4PsXFV85N9Ys341g0WSVd=s900-c-k-c0x00ffffff-no-rj"
          nome="Labenu"
          descricao="Aprendendo e desenvolvendo aplicações para web."
        />

        <CardGrande
          imagem="https://i.pinimg.com/280x280_RS/fb/84/bc/fb84bc412c890fdcd6b4ebf04018d954.jpg"
          nome="Adesso"
          descricao="Auxiliando de modo geral em setores de uma fábrica têxtil."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
