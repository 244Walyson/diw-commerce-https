import React from 'react';
import "./SearchPage.css";
import { useSearchParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const url = "http://diwserver.vps.webdock.cloud:8765/products" + searchParams;
  const { data: items, loading } = useFetch(url);

  const filteredItems = items && items.filter((item) => {
    if (searchParams.get('query') === "") {
      return item;
    } else if (item.nome.toLowerCase().includes(searchParams.get('query').toLowerCase())) {
      return item;
    }
    return null;
  });

  return (
    <div className="SearchPage">
      {loading && <p>Carregando...</p>}
      <ul className="items">
        {filteredItems &&
          filteredItems.map((item) => (
            <li key={item.id} className="card-prod">
              <div className="img">
                <img src={item.image} alt="" />
              </div>
              <h6>{item.title}</h6>
              <p>{item.rating.rate} - {item.rating.count}</p>
              <p>R${item.price}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchPage;
