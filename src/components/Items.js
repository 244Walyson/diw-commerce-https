import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import styles from "./Items.module.css"
import { Link } from 'react-router-dom';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Items = () => {
  const [page, setPage] = useState(1);
  const url = "https://diwserver.vps.webdock.cloud/products?page="+ page;
  const { data: items, loading } = useFetch(url);

  const Rating = (rate) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if(i<=rate){
      stars.push(
        <FontAwesomeIcon icon={faStar} className={styles.starcheia} />
        );}
      else{
        stars.push(
            <FontAwesomeIcon icon={faStar} className={styles.starvazia}/>
      )}
    }
    return <div className={styles.stars}>{stars}</div>;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  return (
    <div className={styles.listproducts}>
   {loading && <p>Carregando...</p>}
    <ul className={styles.items}>
      {items &&
        items.products.map((item) => (
          
      <Link to={`/products/${item.id}`}>
      <li key={item.id} className={styles.cardprod}> {/* Classe modificada para "card-prod" */}
            <div className={styles.img}>
              <img src={item.image} alt="" />
            </div>
            <h6>{item.title}</h6> {/* Adicionado {} para renderizar o valor da variável */}
            <p>{Rating(item.rating.rate)} - {item.rating.count}</p>
            <p>R${item.price}</p>
          </li>
      </Link>
          ))}
      </ul>
      <div className={styles.buttonspages}>
      <button
          className={styles.previw}
          onClick={() => {
            scrollToTop();
            setPage((prevPage) => Math.max(prevPage - 1, 0));
          }}
        >
          {"<"}
        </button>
        <p>{page}</p>
        <button
          className={styles.next}
          onClick={() => {
            scrollToTop();
            setPage((prevPage) => Math.min(prevPage + 1, 1214));
          }}
        >
          {">"}
        </button>
      </div>
    </div>

  );
};

export default Items;
