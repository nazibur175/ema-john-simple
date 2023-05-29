// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';


const Shop = () => {
   // eslint-disable-next-line no-unused-vars
   const [products,setProducts] =  useState([]);
   useEffect( ()=>{
    fetch('/public/products.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))
   },[])
  return (
    <div className='mainContainer'>
      <div className='productContainer'>
        {
         // eslint-disable-next-line no-unused-vars, react/jsx-key
         products.map( product => 
         <Product 
         key={product.id}
          product={product} 
          >
          </Product>)
        }
      </div>
      <div className='sideBar'>
          <h3>Order summary</h3>
      </div>
    </div>
  );
};

export default Shop;