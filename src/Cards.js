import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Cards.css'

export default function Cards() {
    const [data,setdata]=useState([])
    const getdata =async()=>{
        const response = await axios.get('http://localhost:5000/products/data');
        setdata(response.data)
        console.log(response.data)
    }
    useEffect(()=>{
        getdata()
    },[])
  return (
    <>
     <div className="cards-main-div">
        <div className="cards-inner container">
            {data.length === 0 ? <div>no Data product is avilable</div> : data.slice(0,8).map((data)=>{
                return(
                    <div className="card-items" key={data.P_id}>
                    <div>
                       <img src={data.image_url} alt="no-image" className='image-in-home-card' />
                    </div>
                    <p className='text-in-home-card'>{data.product} </p>
                    <div className='rating-div'>
                       <div>{data.rating} ⭐</div>
                       <div><i className="fa-solid fa-cart-shopping"></i></div>
                    </div>
               </div>
                )
            })}
           
        </div>
     </div>
    </>
  )
}
