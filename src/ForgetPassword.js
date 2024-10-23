import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Forget.css'
import './Login.css'

export default function ForgetPassword() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        phoneoremail: "",
        oldpassword: "",
        newpassword: ""
    })

    const [error, setError] = useState({
        phoneoremail: "",
        oldpassword: '',
        newpassword: ''
    })

    const [backenderror, setbackenderror]=useState('')

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const submitdata=async(e)=>{
        e.preventDefault();  

        let isvalid =true;

        if(data.phoneoremail===''){
          setError((error)=>({...error, phoneoremail:'Please Enter Your Phone Number or email'}))
          isvalid =false;
        }else{
          setError((error)=>({...error,phoneoremail:''}))
        }


        if(data.oldpassword===''){
          setError((error)=>({...error, oldpassword:'Please Enter Your old Password'}))
          isvalid =false;
        }else{
          setError((error)=>({...error,oldpassword:''}))
        }

        if(data.newpassword===''){
            setError((error)=>({...error, newpassword:'Please Enter Your old Password'}))
            isvalid =false;
          }else{
            setError((error)=>({...error,newpassword:''}))
          }
        if(isvalid){
        try{
          const response = await axios.post('http://localhost:5000/user/forgetpassword',{data},{headers:{'Content-Type':'application/json'}})
        
          if(response.status===200){
              navigate('/login',{replace:true})
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
        <div className="login-main">
            <div className="login-form shadow rounded">
                <div className='login-head'>Forget Password</div>

                <div className='login-content'>

                    <div>
                        <label>PHONE NUMBER OR EMAIL</label>
                        <br />
                        <input
                            type="text"
                            name="phoneoremail"
                            value={data.phoneoremail}
                            placeholder='Enter Phone Number or email'
                            className='w-100 p-1 login-input rounded mt-1'
                            onChange={handleInputChange}
                            required
                        />
                        {error.phoneoremail && <span className="error-text">{error.phoneoremail}</span>}
                    </div>

                    <div className='pt-2'>
                        <label> CURRENT PASSWORD</label>
                        <input
                            type="password"
                            placeholder='**********'
                            name="oldpassword"
                            value={data.oldpassword}
                            onChange={handleInputChange}
                            className='w-100 p-1 login-input rounded mt-1'
                            required
                        />
                        {error.oldpassword && <span className="error-text">{error.oldpassword}</span>}
                    </div>

                    <div className='pt-2'>
                        <label> NEW PASSWORD</label>
                        <input
                            type="password"
                            placeholder='**********'
                            name="newpassword"
                            value={data.newpassword}
                            onChange={handleInputChange}
                            className='w-100 p-1 login-input rounded mt-1'
                            required
                        />
                        {error.newpassword && <span className="error-text">{error.newpassword}</span>}
                    </div>

                    <button className='w-100 mt-2 login-btn' onClick={submitdata}>Change</button>

                    <div className="small-text pt-1">
                        I remember the password go back? <span className='text-primary' style={{ cursor: 'pointer' }} onClick={() => { navigate('/login') }}>Login</span>
                    </div>

                </div>
            </div>
        </div>
    )
}
