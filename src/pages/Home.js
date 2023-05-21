import React from 'react'
import SlideA from "../imagens/SlideA.jpg";
import "./Home.css"
import MostView from '../components/MostView';

const Home = () => {
  return (
    <div>
        
        <div className="slides">
        <div className="headName">WALYSON</div>
            <img src={SlideA} alt="imagem roupa e tenis" />
            <h2>Mais Vistos</h2>
            <MostView/>
        </div>
    </div>
  )
}

export default Home