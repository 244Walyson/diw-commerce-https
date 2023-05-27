import React from 'react'
import "./Home.css"
import MostView from '../components/MostView';
import SlideA from '../imagens/SlideA.jpg';
import SlideB from '../imagens/slideb.jpg';
import SlideC from '../imagens/slideC.jpg';
import { Carousel } from 'react-responsive-carousel';


const Home = () => {
  return (
    <div>
        
        <div className="slides">
        <div className="headName">WALYSON</div>
        <div className="corousel">
        
        </div>
       
        <h1 className="mostviewq"> 
        Mais Vistos
        </h1>
          <MostView></MostView>
        </div>
      </div>
       
  )
}

export default Home
 {/* </div>

        <div className="imagensprincipais">
          
          <div className="lateralesquerda">
          <div className="aoespojado">
            <h3>Ao Espojado!</h3>
          </div>
          <div className="imagenrigth">
            <img src={SlideB} alt="" className="rigth" />

            <div className="textimgbyrigth">
            <p>by</p>
            <h4>Walyson</h4>
            </div>

          </div>
          </div>

          <div className="lateraldireita">
          <div className="docasual">
            <h3>Do Casual...</h3>
          </div>
          
          <div className="imagenleft">
            <img src={SlideC} alt="" className="left" />

            <div className="textimgbyleft">
            <p>by</p>
            <h4>Walyson</h4>
            </div>

          </div>
          </div>

        </div>
        <div className="mostview">
        */}