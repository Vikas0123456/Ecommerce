import React, { useState } from 'react'
import { useParams } from 'react-router'
// import {useState} from 'react'
import DATA from '../Data';
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../redux/actions/index';

const ProductDetail = () => {
    const [cartBtn, setCartBtn] = useState("Add to cart")
    // {Now we need a product id which is pass drom the product pageXOffset.}
    const proid = useParams();
    const proDetail = DATA.filter(x=>x.productID === proid.productID)
    const product = proDetail[0];
    console.log(product);

    // we need to store useDispatch in a variable
    const dispatch = useDispatch()

    const handleCart = (product) => {
        if (cartBtn === "Add to cart") {
              dispatch(addItem(product))
            setCartBtn("Remove from Cart")
        }
        else{
            dispatch(delItem(product))
            setCartBtn("Add to Cart")
        }
    }  

  return (
    <>
    <div className="container my-5 py-3">
        <div className="row">
            <div className="col-md-6 d-flex justify-content-center mx-auto product">
                <img src={product.photo} alt={product.validUpto} height="400px" />
            </div>
            <div className="col-md-6 d-flex-column justify-content-center">
                <h1 className='display-5 fw-bold'>{product.validUpto}</h1>
                <hr />
                <h2 className='my-4'>₹{product.price}</h2>
                <p className='lead'>{product.dimensions}</p>
                <button onClick={()=> handleCart(product)} className='btn btn-outline-primary my-5'>{cartBtn}</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductDetail