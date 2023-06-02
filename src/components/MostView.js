import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./MostView.css"
import { useEffect } from 'react';

const MostView = () => {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const url = () => {
    let url = '';
    if(seconds%5===0)
      url = "https://diwserver.vps.webdock.cloud/products?page="+seconds;
    return url;
  };

  const { data: items, loading } = useFetch(url());
  const Rating = (rate) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if(i<=rate){
      stars.push(
        <FontAwesomeIcon icon={faStar} className="starcheia" />
        );}
      else{
        stars.push(
            <FontAwesomeIcon icon={faStar} className="starvazia"/>
      )}
    }
    return <div className="stars">{stars}</div>;
  };

  return (
    <div className="list-products">
   {loading && <p>Carregando...</p>}
    <ul className="items">
      {items &&
        items.products.slice(0,5).map((item) => (
          
      <Link to={`/products/${item.id}`}>
      <li key={item.id} className="card-prod"> {/* Classe modificada para "card-prod" */}
            <div className="img">
              <img src={item.image} alt="" />
            </div>
            <h6>{item.title}</h6> {/* Adicionado {} para renderizar o valor da variável */}
            <p>{Rating(item.rating.rate)} - {item.rating.count}</p>
            <p>R${item.price}</p>
          </li>
      </Link>
          ))}
      </ul>
    </div>

  );
}

export default MostView