import React from 'react'
import './UserNav.css'
import { useNavigate } from 'react-router-dom'

export default function UserNav() {
 const navigate =useNavigate()

 const logout=()=>{
    localStorage.removeItem('customerdata')
    navigate('/')
 }
  return (
    <>
 <nav className="navbar navbar-expand-lg bg-primary  sticky-top">
  <div className="container-fluid">
    <img src={require('../assets/images/logo.jpg')} alt="" className='logo-in-user-home' />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav m-auto">
        <a className="nav-link me-4 active" aria-current="page" href="#">Home</a>
        <a className="nav-link me-4" href="#">Features</a>
        <a className="nav-link me-4" href="#">Pricing</a>
        <a className="nav-link" href='#'>Disabled</a>
      </div>
    </div>
    <div className='d-flex'>
      <div>
        <button className='btn text-light' onClick={()=>{navigate('/cart')}}> 🛒</button>
      </div>
      <div>
      <button className='btn text-light' onClick={()=>{navigate('/userhome/myaccount')}}> My Account</button>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}
