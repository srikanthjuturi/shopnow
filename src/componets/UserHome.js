import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect,useState } from 'react';
import axios from 'axios';
import '../Cards.css'
import UserNav from './UserNav';

export default function UserHome() {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("customerdata"));

  useEffect(() => {
    
    // Check if the token is available
    if (!data || !data.token) {
      // If no token, redirect to login
      navigate('/login'); // Change this to your login route
    }
  }, [navigate]);


 

  const [prouctsdata,setdata]=useState([])
  const getdata =async()=>{
      const response = await axios.get('http://localhost:5000/products/sdata',{headers:{'Authorization':`Bearer ${data.token}`}});
      setdata(response.data)
      console.log(response.data)
  }
  useEffect(()=>{
      getdata()
  },[])

  const showfulldetails=(id)=>{
     navigate('/fulldetails',{state:{id:id}})
  }

  return (
<>
<UserNav/>
<div>
        <div className="cards-inner container">
            {prouctsdata.length === 0 ? <div>no Data product is avilable</div> : prouctsdata.slice(0,16).map((data)=>{
                return(
                    <div className="card-items" key={data.P_id} onClick={()=>{showfulldetails(data.P_id)}}>
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
