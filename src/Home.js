import React from 'react'
import HomeNavbar from './HomeNavbar'
import s1 from './assets/images/cell.png';
import s2 from './assets/images/headset.png';
import s3 from './assets/images/laptob.png';
import s4 from './assets/images/most-1.png';
import s5 from './assets/images/mouse.png';
import s6 from './assets/images/watch.png';
import s7 from './assets/images/vediogame.png';
import order from './assets/images/order.png';
import payment from './assets/images/payment.png';
import satisfaction from './assets/images/satisfaction.png';
import shiping from './assets/images/shiping.png';
import delivery from './assets/images/delivery.png';
import inventery from './assets/images/inventery.png';


import './Home.css'
import Slider from "react-slick";
import c1 from './assets/images/c1.webp'
import c2 from './assets/images/c2.webp'
import c3 from './assets/images/c3.webp'
import ContactUs from './ContactUs';
import Cards from './Cards';
import  { useEffect, useState } from 'react'
import axios from 'axios'
import Reviews from './Reviews';

export default function Home() {
 

    const [data,setdata]=useState([])
    const getdata =async()=>{
        const response = await axios.get('http://localhost:5000/products/data');
        setdata(response.data)
        console.log(response.data)
    }
    useEffect(()=>{
        getdata()
    },[])

    var settings = {
        dots: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
              nextArrow: <SampleNextArrow />,
              prevArrow: <SamplePrevArrow />,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              nextArrow: <SampleNextArrow />,
              prevArrow: <SamplePrevArrow />
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              nextArrow: <SampleNextArrow />,
              prevArrow: <SamplePrevArrow />,
              dots:false
            }
          }
        ]
      };

      var firstsettings = {
        // dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 5000,
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
      
      
      function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{
              ...style,
              position: 'absolute',
              right: '50px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: "rgb(255,94,20,0.8)",
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              zIndex: 1, // Ensure the arrows are above other elements
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              
            }}
            onClick={onClick}
          >
            <span>Next</span>
          </div>
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{
              ...style,
              position: 'absolute',
              left: '50px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: "rgb(255,94,20,0.8)",
              borderRadius: '50%',
              width: '50px',
              height: '50px',
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


      

      function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{
              ...style,
              position: 'absolute',
              right: '50px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: "#fff4",
              borderRadius: '50%',
              width: '50px',
              height: '50px',
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
              left: '50px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: '#fff4',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
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
   <HomeNavbar/>
   
   <div className="slider-container home-sliders">
        <Slider {...firstsettings}>
          <div>
            <img src={c1} className='carousel-img' alt="no-image" />
          </div>
          <div>
            <img src={c2} className='carousel-img' alt="no-image" />
          </div>
          <div>
            <img src={c3} className='carousel-img' alt="no-image" />
          </div>
        </Slider>
      </div>
    <div className="container pt-4">
        <h3>Most popular categories  </h3>
        <div className="move-slider">
            <div className="track-slider">
                <div className="move-slide">
                    <img src={s1} alt="no-image" className="image-in-move-silde" />
                    <p className='text-center'>Mobile</p>
                </div>
                <div className="move-slide">
                    <img src={s2} alt="no-image" className="image-in-move-silde" />
                    <p className='text-center'>Head Set</p>
                </div>
                <div className="move-slide">
                    <img src={s3} alt="no-image" className="image-in-move-silde" />
                    <p className='text-center'>Laptobs</p>
                </div>
                <div className="move-slide">
                    <img src={s4} alt="no-image" className="image-in-move-silde" />
                    <p className='text-center'>Desktop</p>
                </div>
                <div className="move-slide">
                    <img src={s5} alt="no-image" className="image-in-move-silde" />
                    <p className='text-center'>Computer Accories</p>
                </div> <div className="move-slide">
                    <img src={s6} alt="no-image" className="image-in-move-silde" />
                    <p className='text-center'>Watch</p>
                </div>
                <div className="move-slide">
                    <img src={s7} alt="no-image" className="image-in-move-silde" />
                    <p className='text-center'>Gaming</p>
                </div>
                <div className="move-slide">
                    <img src={s1} alt="no-image" className="image-in-move-silde" />
                    <p className='text-center'>Mobile</p>
                </div>
                <div className="move-slide">
                    <img src={s2} alt="no-image" className="image-in-move-silde" />
                    <p className='text-center'>Head Set</p>
                </div>
                <div className="move-slide">
                    <img src={s3} alt="no-image" className="image-in-move-silde" />
                    <p className='text-center'>Laptobs</p>
                </div>
                <div className="move-slide">
                    <img src={s4} alt="no-image" className="image-in-move-silde" />
                    <p className='text-center'>Desktop</p>
                </div>
                <div className="move-slide">
                    <img src={s5} alt="no-image" className="image-in-move-silde" />
                    <p className='text-center'>Computer Accories</p>
                </div> <div className="move-slide">
                    <img src={s6} alt="no-image" className="image-in-move-silde" />
                    <p className='text-center'>Watch</p>
                </div>
                <div className="move-slide">
                    <img src={s7} alt="no-image" className="image-in-move-silde" />
                    <p className='text-center'>Gaming</p>
                </div>
            </div>
        </div>
    </div>

    <div>
        <div className='container pt-4 pb-3'><h3>Trending products</h3></div>
      <Slider {...settings} className='cards-main container'>
            {data.length === 0 ? <div>no Data product is avilable</div> : data.slice(0,16).map((data)=>{
                return(
                  <div   key={data.P_id}>
        <div className="container">
                    <div className="card-items" >
                    <div>
                       <img src={data.image_url} alt="no-image" className='image-in-home-card' />
                    </div>
                    <p className='text-in-home-card'>{data.product} </p>
                    <div className='rating-div'>
                       <div>{data.rating} ⭐</div>
                       <div><i className="fa-solid fa-cart-shopping"></i></div>
                    </div>
               </div>
               </div>
               </div>
                )
            })}
     
      </Slider>
      </div>

<Cards/>
<Reviews/>
<ContactUs/>
  <h1 className='text-center mt-5'>What We Do Exactly ?</h1>
    <div className="container circle-main-div">
      <div className="circle-container ">
    <div className="circle-item">
      <div className='head-circle-item'>Payment</div>
      <img src={payment} alt="no-image"  className='image-in-scrolling'/>
    </div>
    <div className="circle-item">
      <div className='head-circle-item'>Order</div>
      <img src={order} alt="no-image" className='image-in-scrolling' />
    </div>
    <div className="circle-item">
      <div className='head-circle-item'>Inventery</div>
      <img src={inventery} alt="no-image" className='image-in-scrolling' />
    </div>
    <div className="circle-item">
    <div className='head-circle-item'>Shiping</div>
    <img src={shiping} alt="no-image"  className='image-in-scrolling'/>
    </div>
    <div className="circle-item">
    <div className='head-circle-item'>Delivery</div>
    <img src={delivery} alt="no-image"  className='image-in-scrolling'/>
    </div>
    <div className="circle-item">
    <div className='head-circle-item'>Satisfaction</div>
    <img src={satisfaction} alt="no-image"  className='image-in-scrolling'/>
    </div>
    <div className="circle-item bg-light ">
    {/* <div className='head-circle-item'>Satisfaction</div> */}
    {/* <img src={satisfaction} alt="no-image"  className='image-in-scrolling'/> */}
    <p className='fs-6 text-center text-secondary'>Connecting  you with the best couriers to get your packages delivered in no time.</p>
    </div>
</div>
</div>
<h1 className='text-center mt-3 mb-5'>Buyer Testimonial</h1>




   </>
  )
}
