import React from 'react';
import "./SearchPage.css";
import { useSearchParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';

const SearchPage = () => {
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const url = "http://diwserver.vps.webdock.cloud:8765/products/search?" + searchParams + "&page=" + page;
  const { data: items, loading } = useFetch(url);


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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  return (
    <div className="searchpage">
   <div className="ullists">
   {loading && <p>Carregando...</p>}
    <ul className="items">
      {items &&
        items.map((item) => (
          <li key={item.id} className="card-prod">
            <div className="img">
              <img src={item.image} alt="" />
            </div>
            <h6>{item.title}</h6> 
            <p>{Rating(item.rating.rate)} - {item.rating.count}</p>
            <p>R${item.price}</p>
          </li>
          ))}
      </ul> 
   </div>
      <div className="buttonspages">
      <button
          className="previw"
          onClick={() => {
            scrollToTop();
            setPage((prevPage) => Math.max(prevPage - 1, 0));
          }}
        >
          {"<"}
        </button>
        <p>{page}</p>
        <button
          className="next"
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

export default SearchPage;
