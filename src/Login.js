 import React from 'react'
 import { useState } from 'react';
 import axios from 'axios';
 import {  useNavigate } from 'react-router-dom';
import HomeNavbar from './HomeNavbar';
import  './Login.css'
import google from './assets/images/googleicon.png'

 
 export default function Login() {
  const [backederror,setbackenderror]=useState('')
    const [formData, setFormData] = useState({
        phone: '',
        password: ''
      });
      const [local,setlocal]=useState(null)
    
      const [errors, setErrors] = useState({  phone:'', password:''});
      const navigate =useNavigate()
    
      // Handle input change
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

      const handleSubmit=async(e)=>{
        e.preventDefault();  

        let isvalid =true;

        if(formData.phone===''){
          setErrors((error)=>({...error,phone:'Please Enter Your Phone Number'}))
          isvalid =false;
        }else{
          setErrors((error)=>({...error,phone:''}))
        }


        if(formData.password===''){
          setErrors((error)=>({...error,password:'Please Enter Your Password'}))
          isvalid =false;
        }else{
          setErrors((error)=>({...error,password:''}))
        }
        if(isvalid){
        try{
          const response = await axios.post('http://localhost:5000/user/login',{formData},{headers:{'Content-Type':'application/json'}})
        
          if(response.status===200){
           setlocal( localStorage.setItem("customerdata", JSON.stringify(response.data)));
              navigate('/userhome',{replace:true})
              console.log(response.data)
          }
        }catch(e){
            console.log(e)
            setbackenderror(e.response.data)
            setTimeout(() => {
              setbackenderror('')
            },3000);
          
        }
      }
    }


   return (
    <>
    <HomeNavbar/>
    <div className="login-main">
      <div className="login-form shadow rounded">
          <div className='login-head'>LOGIN</div>
          <div className='border mt-2 text-center p-1 m-2' style={{cursor:'pointer'}}> <span className='me-2'><img src={google} alt="" className='google-img' /></span> Login with Google</div>
          <div className="divider"><span>or</span></div>

      <div className='login-content'>
         {backederror && <p className='text-danger text-center'>{backederror}</p>}
        <div>
          <label>PHONE NUMBER  OR EMAIL</label>
          <br />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            placeholder='Enter Registered Phone Number or email'
            className='w-100 p-1 login-input rounded mt-1'
            onChange={handleInputChange}
            required
          />
          {errors.phone && <span className="error-text">{errors.phone}</span>}
        </div>
        
        <div className='pt-2'>
          <label>PASSWORD</label>
          <input
            type="password"
            placeholder='**********'
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className='w-100 p-1 login-input rounded mt-1'
            required
          />
          {errors.password && <span className="error-text">{errors.password}</span>}
        </div>
        <div className='forgetpassword' onClick={()=>{navigate('/forgetpassword')}}>forget password ?</div>
        
        <button onClick={handleSubmit} className='w-100 mt-2 login-btn'>Login</button>
        <div className="small-text pt-1">
          Don't have an account? <span className='text-primary' style={{cursor:'pointer'}} onClick={()=>{navigate('/signup')}}>Signup</span>
        </div>
        <div className='small-text pt-1'>This site is protected by reCAPTCHA  and Google <a href="">Privacy policy</a> and <span> <a href="">Terms of Service</a></span> apply.</div>
        </div>
    </div>
    </div>
    </>
   )
 }
 