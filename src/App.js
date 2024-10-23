import React, { useEffect } from 'react'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import FullDetails from './componets/FullDetails';
import Footer from './Footer';
import ContactUs from './ContactUs';
import Cart from './componets/Cart';
import MyAccount from './componets/MyAccount';
import ForgetPassword from './ForgetPassword';
const Home = lazy(() => import('./Home'));
const Login = lazy(() => import('./Login'))
const SignIn = lazy(() => import('./SignIn'))
const UserHome = lazy(() => import('../src/componets/UserHome'))




export default function App() {

  // const [customerdata, setCustomerdata] = useState(null); // State to hold customer data

  // const fun = () => {
  //   const data = JSON.parse(localStorage.getItem("customerdata"));
  //   setCustomerdata(data); // Update state with customer data
  // };

  // useEffect(() => {
  //   fun(); // Call the function to retrieve customer data on mount
  // }, []);

  
  return (
    <>
      <BrowserRouter>
        <Suspense fallback="loading........">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignIn />} />
            <Route  path='/contactus' element={<ContactUs />} />


            <Route path='/userhome' element={ <UserHome />} />
            <Route  path='fulldetails' element={<FullDetails />} />
            <Route  path='cart' element={<Cart />} />
            <Route  path='/userhome/myaccount' element={<MyAccount />} />
            <Route  path='/forgetpassword' element={<ForgetPassword />} />

          </Routes>
        </Suspense>
      </BrowserRouter>
      <Footer/>
    </>
  )
}
