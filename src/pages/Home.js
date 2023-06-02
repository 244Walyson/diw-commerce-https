import React from 'react'
import "./Home.css"
import MostView from '../components/MostView';
import { useFetch } from '../hooks/useFetch';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [boxVisible, setBoxVisible] = useState(false);
  const url = "https://diwserver.vps.webdock.cloud/products/categories"
  const { data: items, loading } = useFetch(url);

  return (
    <div>
      <div className="slides">
        <div className="headName">
          <h4>WALYSON</h4>
          <p>Desenvolvimento de Interfaces Web - Sistemas de Informação - Campus Betim - PBE - Noite - G1/T2 - 2023/1</p>
          <p>Matricula: 790291</p>
        </div>
        <div className="corousel"></div>
        <div className="searchbycategory" onClick={() => setBoxVisible(!boxVisible)}>
          <p>Buscar Por Categoria</p>
          <ul>
            {boxVisible && items && items.map((item) => (
              <Link to={"/products/category/"+item}><li>{item}</li></Link>
            ))}
          </ul>
        </div>
        <h1 className="mostviewq">Mais Vistos</h1>
        <MostView></MostView>
      </div>
    </div>
  )
}

export default Home
