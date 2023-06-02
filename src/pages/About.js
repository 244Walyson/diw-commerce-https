import React from 'react'
import "./About.css"
import WalyName from '../components/WalyName'
import { faGithub, faTwitter, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const About = () => {
  return (
    <>
    <div className="logoname"><WalyName/></div>
    <div className="about">
      <div className="imgabout">
        <img src="" alt="" />
      </div>
        <div className="textabout">
          <p className="textparagraphyabout">
            Bem-vindo à minha página "Sobre" do projeto de Design de Interface Web!
          Nesta página, gostaria de compartilhar um pouco sobre a criação do meu website 
          desenvolvido para um projeto da faculdade, utilizando a Fake Store API.
          O objetivo principal do meu projeto foi desenvolver uma aplicação web que simula
          a minha própria loja online. Para isso, utilizei a Fake Store API, que me forneceu dados de produtos, como 
          imagens, títulos, preços e avaliações, para criar uma experiência realista.
          Ao criar essa página, concentrei-me em fornecer uma interface intuitiva e
          agradável para os usuários. Utilizei conceitos de design responsivo para 
          garantir que a página se adaptasse a diferentes dispositivos, como desktops, 
          tablets e smartphones.  
        </p>
        <div className='socialmediaabout'>
          <p><FontAwesomeIcon icon={faGithub} className="iconsmedia"/></p>
          <p><FontAwesomeIcon icon={faTwitter} className="iconsmedia"/></p>
          <p><FontAwesomeIcon icon={faInstagram} className="iconsmedia"/></p>
          <p><FontAwesomeIcon icon={faTelegram} className="iconsmedia"/></p>
        </div>
        </div>
    </div>
    </>
  )
}

export default About