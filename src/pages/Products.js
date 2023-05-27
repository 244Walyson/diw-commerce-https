import React from 'react'
import "./Products.css"
import Items from '../components/Items'
import WalyName from '../components/WalyName'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
   
    <div className="products">
      <div className="walynameproducts"><WalyName/></div>
      <div className="itemsproducts"><Items/></div>
    </div>

  )
}

export default Products