import React from 'react'
import Product from './Product'

const Home = () => {
  return (
    <>

<div class="container-fluid mt-2">
        <div class="row row-cols-2 row-cols-sm-6 g-2 g-sm-3">
          <div class="col">
            <div class="p-3 ">
              <div class="card" style={{width: "16rem"}}>
                <img src="./images/laptop.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class=" text-center">
                    <h1>1</h1>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="p-3 ">
              <div class="card" style={{width: "16rem"}}>
                <img src="./images/laptop.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text text-center">
                    <h1>2</h1>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="p-3 ">
              <div class="card" style={{width: "16rem"}}>
                <img src="./images/laptop.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text text-center">
                    <h1>3</h1>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="p-3 ">
              <div class="card" style={{width: "16rem"}}>
                <img src="./images/laptop.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text text-center">
                    <h1>4</h1>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="p-3 ">
              <div class="card" style={{width: "16rem"}}>
                <img src="./images/laptop.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text text-center">
                    <h1>5</h1>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="p-3 ">
              <div class="card" style={{width: "16rem"}}>
                <img src="./images/laptop.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text text-center">
                    <h1>6</h1>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>




    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true" >
  <div class="carousel-indicators">
  {/* <div style={{ marginTop:'200px'}}> */}
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
          
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="images/phone.jpg" class="d-block w-100" alt="phone" height="400px"/>
    </div>
    <div class="carousel-item">
      <img src="images/photo-1.jpg" class="d-block w-100" alt="clothes" height="400px"/>
    </div>
    <div class="carousel-item">
      <img src="images/grocery-2.jpg" class="d-block w-100" alt="grocery" height="400px"/>
    </div>
    <div class="carousel-item">
      <img src="images/laptop.jpg" class="d-block w-100" alt="laptop" height="00px"/>
    </div>
    

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  {/* </div> */}

<Product />
    </div>
    </>
  )
}

export default Home