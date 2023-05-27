import React from 'react'
import styles from "./SearchByCategory.module.css"
import WalyName from '../components/WalyName'
import Items from '../components/Items'
import { useFetch } from '../hooks/useFetch'

const SearchByCategory = () => {

    const url = "http://diwserver.vps.webdock.cloud:8765/products/categories";
    const {data: items, loading} = useFetch(url);

    console.log(items)

  return (
    <div className="products">
    <div className="walynameproducts"><WalyName/></div>
     <div className="itemsproducts">
     <dvi className={styles.cardcategories}>
        <ul>
            {items && items.map((item)=>(
                <li>{item}</li>
            ))}
        </ul>
     </dvi>
     </div>
   </div>
  )
}

export default SearchByCategory