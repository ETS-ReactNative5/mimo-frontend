import React, { Component, useEffect, useState } from 'react';
import {  Redirect } from "react-router-dom";
import { details } from '../../util/APIUtils';
import Alert from 'react-s-alert';
import ProductList from './ProductList';

import './product.css'
function Product(props) {
  if(props.authenticated) {
    return <Redirect
        to={{
        pathname: "/main",
        state: { from: this.props.location }
    }}/>;            
  }

  const [products, setProducts] = useState([]);

  useEffect(()=> {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  
    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
    .then(response => response.json())
    .then(result => setProducts(result))
    .catch(error => console.log('error'. error))  
  }, [])
 

  return (
    <div className="product">
     <ProductList products={products} />
      <div className='productNav'> 
      <div className='producthead'>
        <img className="product_prod" src={process.env.PUBLIC_URL+`assets/image/bestitem2.png`  }/>
      </div>
        <div className='prod_title'>
          <p>롬앤</p>  
          <p>밀크티 벨벳 틴트</p>
          <p>판매가 </p>
          <p>7,900원</p>
        </div>
        <div className='payimg'>
          <img className="basket" src={process.env.PUBLIC_URL+`assets/image/basket.png` }/>
        < img classNameid="pay" src={process.env.PUBLIC_URL+`assets/image/pay.png` }/>
        </div>
   
    </div>
    <p className="productintroduce">상품소개</p>
    <div className='productbody'>
    <img className='productbodyimg' src={process.env.PUBLIC_URL+`assets/image/밀크티 벨벳틴트1.jpeg` }/>
    <img className='productbodyimg' src={process.env.PUBLIC_URL+`assets/image/밀크티 벨벳틴트2.jpeg` }/>
    <img className='productbodyimg' src={process.env.PUBLIC_URL+`assets/image/밀크티 벨벳틴트3.jpeg` }/>


    </div> 

   



    </div> 
  );
}


export default Product;