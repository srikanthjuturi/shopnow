import React, { useEffect, useState } from 'react';
import './Cart.css';
import UserNav from './UserNav';
import { useNavigate } from 'react-router-dom';
import EmptyCart from './EmptyCart';

export default function Cart() {
    const [cart, setCart] = useState([]);
    const [total, setotal] = useState('');
    const [grandtotal, setgrandtotal] = useState('');

   const navigate =useNavigate()

    const deleteItem = (id) => {
        const cartData = JSON.parse(localStorage.getItem('cart')) || []
        const updatedCart = cartData.filter(item => item.P_id !== id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const updateQuantity = (id, type) => {
        const cartData = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCart = cartData.map(item => {
            if (item.P_id === id) {
                if (type === 'increment') {
                    item.quantity += 1;
                    item.subtotal = item.sale_price * item.quantity;
                } else if (type === 'decrement' && item.quantity > 1) {
                    item.quantity -= 1;
                    item.subtotal -= item.sale_price;
                }
            }
            return item;
        });
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    
    useEffect(() => {
        console.log(cart)
        const total = cart.reduce((acc, data) => acc + (data.subtotal || 0), 0);
        setotal(total);
        console.log(total)
    }, [cart]);


    useEffect(() => {
        const grandtotal = total+100
        setgrandtotal(grandtotal);
    }, [total]);
    

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(cartData);
    }, []);

    return (
        <>
            <UserNav />
            {/* <h1 className='container'>Shopping Cart</h1> */}
          {cart.length ===0 ? <EmptyCart/> :<div className='cart-default-height container'>
                <div className="row">
                    <div className="col-md-8 left-side-part">
                        <hr />
                        {cart.map((data, index) => (
                            <div key={index}>
                                <div className='add-to-cart-main-1 container'>
                                    <div><img src={data.image_url} alt="" className='image-in-cart' /></div>
                                    <div className='add-to-cart-main-2'>
                                        <div>
                                            <button className='btn border border-2 me-1' onClick={() => updateQuantity(data.P_id, 'decrement')}>-</button>
                                            <span>{data.quantity}</span>
                                            <button className='btn border border-2 ms-1' onClick={() => updateQuantity(data.P_id, 'increment')}>+</button>
                                        </div>
                                        <div className='product-name-in-cart'>{data.product}</div>
                                        <div>&#8377; {data.subtotal}</div>
                                    </div>
                                    <div>
                                        <button className='btn btn-danger' data-bs-toggle="modal" data-bs-target={`#removeModal-${data.P_id}`}>
                                            <i className="fa-solid fa-box-archive"></i>
                                        </button>
                                        <div className="modal fade" id={`removeModal-${data.P_id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-4" id="exampleModalLabel">Remove Item</h1>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body fs-5">
                                                        Are you sure you want to remove this item ?
                                                    </div>
                                                    <div className="modal-footer  ">
                                                        <div className='d-flex justify-content-evenly w-50'>
                                                        <button type="button" className="btn btn-danger d-block"   data-bs-dismiss="modal" onClick={() => deleteItem(data.P_id)}>Remove</button>
                                                        <button type="button" className="btn border border-dark d-block"  data-bs-dismiss="modal">Cancel</button>
                                                     </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        ))}
                    </div>
                    <div className="col-md-4 right-side-part">
                        <div className='sticky-right-side'>
                            <h4>Order Summary</h4>
                            <div className='checkout-inner-div-flex'>
                                <div>Subtotal</div>
                                <div>&#8377;  {total}</div>
                            </div>
                            <hr />
                            <div className='checkout-inner-div-flex'>
                                <div>Shipping Fee</div>
                                <div>&#8377; 50</div>
                            </div>
                            <hr />
                            <div className='checkout-inner-div-flex'>
                                <div>Tax Estimate</div>
                                <div>&#8377; 50</div>
                            </div>
                            <hr />
                            <div className='checkout-inner-div-flex'>
                                <div>Order Total</div>
                                <div>&#8377; {grandtotal}</div>
                            </div>
                            <div>
                                <button className='btn w-100 btn-primary mb-5 mt-3'>CheckOut</button>
                            </div>
                        </div>
                    </div>
                </div>

              <p id='go-back' className='mt-4 mb-5' onClick={()=>navigate('/userhome')}>Go to Shopping</p>
            </div>}



        </>
    );
}
