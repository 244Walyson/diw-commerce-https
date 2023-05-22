import React from 'react'
import SlideA from "../imagens/SlideA.jpg";
import SlideB from "../imagens/slideb.jpg";
import SlideC from "../imagens/slideC.jpg";
import SlideD from "../imagens/SlideD.jpg"
import "./Home.css"

const Home = () => {
  return (
    <div>
        
        <div className="slides">
        <div className="headName">WALYSON</div>
            <div className="imagemprincipal">
            <img src={SlideB} alt="imagem roupa e tenis"  className="slideb"/>
            </div>
            <div className="bywaly">
              <p>by</p>
              <h4>Walyson</h4>
            </div>
            <div className="imagesHomepage">
            <img src={SlideA} alt=""  className='SlideA' />
            <div className="slidesrigth">
            <img src={SlideC} alt="" className="SlideC" />
            <img src={SlideD} alt="" className="slideD" />
            </div>
            </div>

        </div>
    </div>
  )
}

export default Home