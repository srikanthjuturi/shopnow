import React from 'react'
import './Reviews.css'

export default function Reviews() {
  return (
    <>
<div className="container relative-div">
  <div className="row flowchart-container ">
    <div className="col-12  col-lg-4 flow-item">
      <img src={require('./assets/images/r1.png')} alt="Sign up" className='r-images'/>
      <h3>Sign Up for free</h3>
      <p>Join today to access exclusive offers and personalized recommendations.</p>
    </div>
    <div className="col-12  col-lg-4 flow-item">
      <img src={require('./assets/images/r2.png')} alt="Explore" className='r-images'/>
      <h3>Explore our Products</h3>
      <p>Discover a wide range of top-quality products curated just for you.</p>
    </div>
    <div className="col-12 col-lg-4  flow-item">
      <img src={require('./assets/images/r3.png')} alt="Purchase" className='r-images'/>
      <h3>Start Purchasing</h3>
      <p>Shop now and enjoy seamless purchasing with fast, secure checkout.</p>
    </div>

<div className='arrow-div-top d-none d-lg-block'>
<img src={require('./assets/images/Arrow.png')} alt="" className='arrow-img-top' />
</div>

<div className='arrow-div-down d-none d-lg-block'>
<img src={require('./assets/images/Arrowdown.png')} alt="" className='arrow-img-down' />
</div>

  </div>
</div>
    </>
  )
}
