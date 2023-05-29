import React, { useState } from 'react'
import styles from "./EspecificacaoProduto.module.css"
import { useFetch } from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';


const EspecificacaoProduto = () => {
    const {id} = useParams()
    const url = "https://fakestoreapi.com/products/"+ id;
    const {data: items, loading} = useFetch(url)

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
        return <div>{stars}</div>;
      };
      

  return (
    <div className={styles.especificacao}>
        {items && 

        <div className={styles.produtoespicificacao}>
            <div className={styles.produtodetails}>
                <div className={styles.imgprodutoespec}>
                <img src={items.image} alt="" />
                </div>
                <div className={styles.textrigth}>
                    <h3>{items.title}</h3>
                    <h4>R${items.price}</h4>
                    <p>{Rating(items.rating.rate)}</p>
                    <button>
                    Adicionar Ao carrinho
                </button>
                </div>
                
            </div>
           <div className={styles.description}> <p>Descrição:</p>{items.description}</div>

            </div>
        }
    </div>
  )
}

export default EspecificacaoProduto