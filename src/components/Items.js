import React from 'react';
import { useFetch } from '../hooks/useFetch';
import styles from "./Items.modules.css"

const Items = () => {
  const url = "http://diwserver.vps.webdock.cloud:8765/products";
  const { data: items, loading } = useFetch(url);

  console.log(items);

  return (
    <div className="list-products">
   {loading && <p>Carregando...</p>}
    <ul className="items">
      {items &&
        items.products.map((item) => (
          <li key={item.id} className="card-prod"> {/* Classe modificada para "card-prod" */}
            <div className="img">
              <img src={item.image} alt="" />
            </div>
            <h6>{item.title}</h6> {/* Adicionado {} para renderizar o valor da variável */}
            <p>{item.rating.rate} - {item.rating.count}</p>
            <p>R${item.price}</p>
          </li>
          ))}
      </ul>
    </div>

  );
};

export default Items;
