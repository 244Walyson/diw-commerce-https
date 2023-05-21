import React from 'react'
import "./Rodape.css"
import 'boxicons'
import { Link } from 'react-router-dom'
import 'boxicons'

const Rodape = () => {
  return (
    <div className='rodape'>
        <div className="logo">W</div>
        <div className="faq">
            <p><Link>fale conosco</Link></p>
            <p><Link>ajuda</Link></p>
        </div>
        <div className="about-us">
            <p><Link>Quem Somos</Link></p>
            <p><Link>Politica de Privacidade</Link></p>
        </div>
        <div className="location">
           <p><Link>PUC MINAS BETIM</Link></p>
           <div className='socialmedia'>
            
        </div>
        </div>
        
        
        <div className="allrigth">AllRigths Resrved &copy Walyson Moises</div>

        <div className="detalhes-a"></div>
        <div className="detalhes-b"></div>


    </div>
  )
}

export default Rodape