import React from 'react'
import DATA from '../Data'
import {NavLink} from 'react-router-dom';


const Product = () => {

    const cardItem = (item) => {
        return(
            <div class="card my-5 py-4" key={item.productID} style={{width: "18rem"}}>
  <img src={item.photo} class="card-img-top" height={'150px'} alt={item.productID}/>
  <div class="card-body text-center">
    <h5 class="card-title">{item.validUpto}</h5>
    <p className="lead">₹{item.price}</p>
    <NavLink to= {`/product/${item.productID}`} class="btn btn-outline-primary">Buy Now</NavLink>
  </div>
</div>

        );
    }

  return (
    <div>
        <div className="container py-5">
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Products</h1>
                    <hr/>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row justify-content-around">
                {DATA.map(cardItem)}
            </div>
        </div>
    </div>
  )
}

export default Product