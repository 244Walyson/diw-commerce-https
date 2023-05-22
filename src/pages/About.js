import React from 'react'
import "./About.css"
import WalyName from '../components/WalyName'

const About = () => {
  return (
    <>
    <div className="logoname"><WalyName/></div>
    <div className="about">
      <div className="imgabout">
        <img src="https://picsum.photos/536/354" alt="" />
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
        <p className='socialmediaabout'> w i f g </p>
        </div>
    </div>
    </>
  )
}

export default About