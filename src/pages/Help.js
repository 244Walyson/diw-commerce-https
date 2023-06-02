import React from 'react'
import "./Help.css"
import { faGithub, faTwitter, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Help = () => {
  return (
    <div className="help">
        <p className="texthelp">
          Se precisar de ajuda entre em contato comigo
        </p>
        <div className="socialmediashelp">
          <p><FontAwesomeIcon icon={faGithub} className="iconsmedia"/></p>
          <p><FontAwesomeIcon icon={faTwitter} className="iconsmedia"/></p>
          <p><FontAwesomeIcon icon={faInstagram} className="iconsmedia"/></p>
          <p><FontAwesomeIcon icon={faTelegram} className="iconsmedia"/></p>
        </div>
    </div>
  )
}

export default Help