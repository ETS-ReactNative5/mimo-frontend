import React, { Component, useEffect, useState } from 'react';
import {  Redirect } from "react-router-dom";
import { details } from '../../util/APIUtils';
import Alert from 'react-s-alert';
import './product.css'
function Product(props) {
  if(props.authenticated) {
    return <Redirect
        to={{
        pathname: "/main",
        state: { from: this.props.location }
    }}/>;            
  }
  return (
    <div className="product">
    
      <div className='productNav'> 
      <div className='producthead'>
        <img className="product_prod" src={process.env.PUBLIC_URL+`assets/image/newitem4.png`  }/>
      </div>
        <div className='prod_title'>
          <p>롬앤</p>  
          <p>롬앤 쥬시 래스팅 틴트 #베어쥬시</p>
          <p>판매가 </p>
          <p>8,900원</p>
        </div>
        <div className='payimg'>
          <img className="basket" src={process.env.PUBLIC_URL+`assets/image/basket.png` }/>
        < img classNameid="pay" src={process.env.PUBLIC_URL+`assets/image/pay.png` }/>
        </div>
   
    </div>
    <p className="productintroduce">상품소개</p>
    <div className='productbody'>
    <img className='productbodyimg' src={process.env.PUBLIC_URL+`assets/image/쥬시 레스팅베어 1.jpeg` }/>
    <img className='productbodyimg' src={process.env.PUBLIC_URL+`assets/image/쥬시 레스팅베어 2.jpeg` }/>
    <img className='productbodyimg' src={process.env.PUBLIC_URL+`assets/image/쥬시 레스팅베어 3.jpeg` }/>
    </div> 

   



    </div> 
  );
}


export default Product;