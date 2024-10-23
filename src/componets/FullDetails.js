import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation, json } from 'react-router-dom';
import './FullDetails.css'
import UserNav from './UserNav';
import Slider from 'react-slick/lib/slider';
 

export default function FullDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  // Retrieve token and customer data from localStorage
  const data = JSON.parse(localStorage.getItem("customerdata"));
  const [productdata, setProductData] = useState([]);
  const [show,setshow]=useState('')

  useEffect(() => {
    // Redirect to login if token is not available
    if (!data || !data.token) {
      navigate('/login');
    }
  }, [navigate, data]);

  const getdata = async () => {
    try {
      const response = await axios.get('http://localhost:5000/products/sdata', {
        headers: { 'Authorization': `Bearer ${data.token}` }
      });      
      if (response.status === 200) {
        const { id } = location.state || {};
        if (id && response.data[id]) {
          setProductData(response.data[id-1]);
        } else {
          console.error('Invalid ID or data not found');
        }
      }
    } catch (e) {
      console.error('Error fetching product data:', e);
    }
  };

  useEffect(() => {
    getdata();
  }, []);


  const calculateDiscount = (marketPrice, salesPrice) => {
    const discount = ((marketPrice - salesPrice) / marketPrice) * 100;
    return discount.toFixed(1);
  }
  const finaldiscount = calculateDiscount(productdata.market_price, productdata.sale_price);

  const addtocart = (id) => {
    // Retrieve the current cart from localStorage or initialize an empty array
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product is already in the cart
    const productExists = cart.some(product => product.P_id === id);

    // if (productExists) {
    //   alert('This product is already in your cart!');
    // } else {
      // If the product does not exist, create a product object with necessary details
      const productToAdd = {
            ...productdata,
        quantity: 1,
        subtotal: productdata.sale_price 
      };
      cart.push(productToAdd);
      localStorage.setItem('cart', JSON.stringify(cart));
      navigate('/cart')}
    // }

let productid = productdata.P_id

useEffect(()=>{
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const isadded = cart.some(product => product.P_id === productid);
  setshow(isadded)  
},[productid])

  var firstsettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        }
      }
    ]
  };
 
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: 'absolute',
        right: '0px',
        top: '50%',
        transform: 'translateY(-50%)',
        background: "black",
        width: '30px',
        height: '80px',
        zIndex: 1, // Ensure the arrows are above other elements
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      onClick={onClick}
    >
      <span>Next</span>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: 'absolute',
        left: '0px',
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'black',
        width: '30px',
        height: '80px',
        zIndex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      onClick={onClick}
    >
      <span>Prev</span>
    </div>
  );
}


  return (
    <>
    <UserNav/>
      <div className="fulldetials-main">
        <div className="fulldetails-inner container">
          <div className="row">
            <div className="col-sm-12 col-md-4 left-side-fulldetails">
              <div className='images-in-fulldetails-main'>
              <div className='images-in-fulldetails'>
              <Slider {...firstsettings}>
          <div>
            <img src={productdata.image_url} className='carousel-img-in-fulldetails' alt="" />
          </div>
          <div>
            <img src={productdata.image_url} className='carousel-img-in-fulldetails' alt="" />
          </div>
          <div>
            <img src={productdata.image_url} className='carousel-img-in-fulldetails' alt="" />
          </div>
        </Slider>
              </div>
              <div className='add-to-cart-main'> 
             {show?(<button className="add-to-cart border-1 ms-2 " onClick={()=>{navigate('/cart',{state:{id:productdata.P_id}})}}><span>GO Cart</span></button>):
              (<button className="add-to-cart border-1 ms-2 " onClick={()=>{addtocart(productdata.P_id)}}><span>Add To Cart</span></button>)}
               <button className="add-to-cart border-1 ms-2"> <span>Buy Now</span></button>
              </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-8 right-side-fulldetails">
              <h4 className='mt-4'>{productdata.product}</h4>
              <div className='bg-success d-inline-block pe-1 pb-1 ps-1 rounded text-light'>special Prize</div>
              <div> <span className='text-success'>{finaldiscount} off</span> <span className='market-price'>{productdata.market_price}</span> <span className='fs-3'>{productdata.sale_price}</span></div>
              <div className='text-primary pt-2 pb-2'><i className="fa-solid fa-truck-fast"></i> <span>Free Delivery</span></div>
                <div className='fs-5 pb-2'>{productdata.rating} ratings ⭐ </div>
              <p>{productdata.description}</p>
              {/* Render other product details here */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
