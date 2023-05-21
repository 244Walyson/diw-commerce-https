import React from 'react'
import "./MostView.css"

const MostView = () => {
  return (
    <div className="principal">
        <button className="arrow-left">esquerda</button>
            <div className="gallery">
                <div className="card current-card">
                <img src='https://picsum.photos/536/354'/>
                <h6>titles vfdnvuioubd</h6>
                <p>detalhes</p>
                <p>R$45,89</p>
                </div>

                <div className="card current-card">
                <img src='https://picsum.photos/536/354'/>
                <h6>titles vfdnvuioubd</h6>
                <p>detalhes</p>
                <p>R$45,89</p>
                </div>

                <div className="card current-card">
                <img src='https://picsum.photos/536/354'/>
                <h6>titles vfdnvuioubd</h6>
                <p>detalhes</p>
                <p>R$45,89</p>
                </div>

                <div className="card current-card">
                <img src='https://picsum.photos/536/354'/>
                <h6>titles vfdnvuioubd</h6>
                <p>detalhes</p>
                <p>R$45,89</p>
                </div>

                
            </div>
            <button className="arrow-rigth">direita</button>
    </div>
  )
}

export default MostView