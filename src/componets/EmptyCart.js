import React from 'react'
import './EmptyCart.css'
import { useNavigate } from 'react-router-dom'

export default function EmptyCart() {
    const navigate =useNavigate()
  return (
  <>
   <div className='empty-cart-main'>
    <div>
    <div>
        <img src={require('../assets/images/empty.png')} alt="no-img" id='image-in-empty-cart' />
    </div>
    <div className='text-center'>
        <h2>Your Cart Is <span className='text-danger'>Empty</span></h2>
        <h4>Uh-oh! Your cart is appers like empty ! </h4>
        <p id='go-back' className='mt-4 mb-5' onClick={()=>navigate('/userhome')}>Go to Shopping</p>
    </div>
    </div>
   </div>
  </>
  )
}
