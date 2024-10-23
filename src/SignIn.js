import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import HomeNavbar from './HomeNavbar';
import './SignIn.css'

export default function SignIn() {

    const [currentStep, setCurrentStep] = useState(0);
    const [backederror,setbackenderror]=useState('')
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        street: '',
        city: '',
        state: '',
        zip: ''
    });


    const [error, seterror] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        street: '',
        city: '',
        state: '',
        zip: ''
    });

    const navigate = useNavigate()

    const validate = () => {
        const nameRegex = /^[A-Za-z]+$/;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const phoneRegex = /^[6-9]\d{9}$/;
        const streetRegex = /^[a-zA-Z0-9\s.,/-]*$/


        let isValid = true;

        if (currentStep === 0) {
            if (formData.firstName === "") {
                seterror((error) => ({ ...error, firstName: 'Please Enter Your First Name' }));
                isValid = false;
            } else if (!nameRegex.test(formData.firstName)) {
                seterror((error) => ({ ...error, firstName: 'Please Enter ONLY Alpabets' }));
                isValid = false;
            }
            else if (formData.firstName < 2 || formData.firstName > 20) {
                seterror((error) => ({ ...error, firstName: 'Please Enter Vaild First Name' }));
                isValid = false;
            } else {
                seterror((error) => ({ ...error, firstName: '' }));
            }

            if (formData.lastName === "") {
                seterror((error) => ({ ...error, lastName: 'Please Enter Your Last Name' }));
                isValid = false;
            } else if (!nameRegex.test(formData.lastName)) {
                seterror((error) => ({ ...error, lastName: 'Please Enter ONLY Alpabets' }));
                isValid = false;
            }
            else if (formData.lastName < 2 || formData.lastName > 20) {
                seterror((error) => ({ ...error, lastName: 'Please Enter Vaild Last Name' }));
                isValid = false;
            }
            else {
                seterror((error) => ({ ...error, lastName: '' }));
            }

            if (formData.email === "") {
                seterror((error) => ({ ...error, email: 'Please Enter Your  Email ID' }));
                isValid = false;
            } else if (!emailRegex.test(formData.email)) {
                seterror((error) => ({ ...error, email: 'Please Enter a Valid  Email ID' }));
                isValid = false;
            } else {
                seterror((error) => ({ ...error, email: '' }));
            }

            if (formData.phone === "") {
                seterror((error) => ({ ...error, phone: 'Please Enter Your Phone Number' }));
                isValid = false;
            } else if (!phoneRegex.test(formData.phone)) {
                seterror((error) => ({ ...error, phone: 'Please Enter INDIAN PHONE Number' }));
                isValid = false;
            }
            else if (!formData.phone.length === 10) {
                seterror((error) => ({ ...error, phone: 'Please Enter Valid Phone Number' }));
                isValid = false;
            } else {
                seterror((error) => ({ ...error, phone: '' }));
            }
        }

        // Step 2 validation
        if (currentStep === 1) {
            if (formData.password === "") {
                seterror((error) => ({ ...error, password: 'Please Enter Your Password' }));
                isValid = false;
            } else if ((formData.password.length < 6)) {
                seterror((error) => ({ ...error, password: 'Please Enter Min 6 Charaters' }));
                isValid = false;
            } else {
                seterror((error) => ({ ...error, password: '' }));
            }

            if (formData.confirmPassword === "") {
                seterror((error) => ({ ...error, confirmPassword: 'Please Enter Your Confirm Password' }));
                isValid = false;
            } else if (formData.password !== formData.confirmPassword) {
                seterror((error) => ({ ...error, confirmPassword: 'Your Password is not matching' }));
                isValid = false;
            } else {
                seterror((error) => ({ ...error, confirmPassword: '' }));
            }
        }

        // Step 3 validation
        if (currentStep === 2) {
            if (formData.street === "") {
                seterror((error) => ({ ...error, street: 'Please Enter Your Street' }));
                isValid = false;
            } else if (!/[a-zA-Z]/.test(formData.street)) { // Check for at least one letter
                seterror((error) => ({ ...error, street: 'Street address must contain at least one letter' }));
                isValid = false;
            }
            else if (!streetRegex.test(formData.street)) {
                seterror((error) => ({ ...error, street: 'Please Enter Correct Street Name' }));
                isValid = false;
            }
            else if (formData.street.length < 5) { // Check for a minimum length
                seterror((error) => ({ ...error, street: 'Street address must be at least 5 characters long' }));
                isValid = false;
            } else {
                seterror((error) => ({ ...error, street: '' }));
            }

            if (formData.city === "") {
                seterror((error) => ({ ...error, city: 'Please Enter Your City' }));
                isValid = false;
            } else if (!/^[a-zA-Z\s]*$/.test(formData.city)) {
                seterror((error) => ({ ...error, city: 'Please Enter Correct City Name' }));
                isValid = false;
            } else if (formData.city.length < 3) {
                seterror((error) => ({ ...error, city: 'Please Enter min 3 Charaters' }));
                isValid = false;
            } else {
                seterror((error) => ({ ...error, city: '' }));
            }

            if (formData.state === "") {
                seterror((error) => ({ ...error, state: 'Please Enter Your State' }));
                isValid = false;
            } else if (!/^[a-zA-Z\s]*$/.test(formData.state)) {
                seterror((error) => ({ ...error, state: 'Please Enter Correct State Name' }));
                isValid = false;
            } else if (formData.state.length < 3) {
                seterror((error) => ({ ...error, state: 'Please Enter min 3 Charaters' }));
                isValid = false;
            } else {
                seterror((error) => ({ ...error, state: '' }));
            }

            if (formData.zip === "") {
                seterror((error) => ({ ...error, zip: 'Please Enter Your Postal Code' }));
                isValid = false;
            } else if (!/^\d{6}$/.test(formData.zip)) {
                seterror((error) => ({ ...error, zip: 'Please Enter Valid Postal Code' }));
                isValid = false;
            } else {
                seterror((error) => ({ ...error, zip: '' }));
            }
        }

        return isValid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const nextStep = () => {
        if (validate()) {
            setCurrentStep((prevStep) => Math.min(prevStep + 1, 2));
        }
    };

    const prevStep = () => {
        setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                const response = await axios.post('http://localhost:5000/user/register', { formData }, { headers: { 'Content-Type': 'application/json' } })
                if (response.status === 200) {
                    setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        password: '',
                        confirmPassword: '',
                        street: '',
                        city: '',
                        state: '',
                        zip: ''
                    })
                    
                    navigate('/login')
                }
            }
            catch (e) {
                console.log(e)
                console.log(e)
                setbackenderror(e.response.data)
                setTimeout(() => {
                  setbackenderror('')
                },3000);
            }
        }
    };


    return (
        <>
            <HomeNavbar />
            <div className="container mt-4 mb-5">
                <h2 className="text-center">Create Your Account</h2>

                <div className='contianer'>
                    <div className="progress-container">
                        <div className={`progress-section ${currentStep >= 0 ? 'filled' : ''}`}></div>
                        <div className={`progress-section ${currentStep >= 1 ? 'filled' : ''}`}></div>
                        <div className={`progress-section ${currentStep >= 2 ? 'filled' : ''}`}></div>
                    </div>
                </div>

                <div className='d-flex justify-content-center'>
                    <div className="card sign-in-main w-75 ">
                        <div className="card-body sign-in-inner">
                            <div>
                                {/* Step 1: Personal Information */}
                                {currentStep === 0 && (
                                    <div className="step">
                                        <h4 className='text-danger mb-3'>Step 1: Personal Information</h4>
                                        <div className="first-name-last-name-div">
                                            <div className="first-name">
                                                <label className="form-label">First Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder='Enter First Name'
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                {error && <p className='text-danger'>{error.firstName}</p>}
                                            </div>
                                            <div className="first-name">
                                                <label className="form-label">Last Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder='Enter Last Name'
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                {error && <p className='text-danger'>{error.lastName}</p>}
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">E-mail Address</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                placeholder='Enter Your Email ID'
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                            {error && <p className='text-danger'>{error.email}</p>}
                                        </div>
                                        <label className="form-label">Phone Number</label>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1">+91</span>
                                            <input
                                                type="text"
                                                className="form-control rounded-end p-1"
                                                name="phone"
                                                placeholder='Enter Your Phone Number'
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                aria-label="Username" aria-describedby="basic-addon1"
                                            />
                                        </div>
                                        {error && <p className='text-danger'>{error.phone}</p>}
                                    </div>
                                )}

                                {/* Step 2: Login Credentials */}
                                {currentStep === 1 && (
                                    <div className="step">
                                        <h4 className='text-danger mb-3'>Step 2: Login Credentials</h4>
                                        <div className="mb-3">
                                            <label className="form-label">Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                required
                                                placeholder='Enter Your Password'
                                            />
                                            {error && <p className='text-danger'>{error.password}</p>}
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Re Enter  Password</label>
                                            <input
                                                type="password"
                                                placeholder='Re Enter Your Password'
                                                className="form-control"
                                                name="confirmPassword"
                                                value={formData.confirmPassword}
                                                onChange={handleChange}
                                                required
                                            />
                                            {error && <p className='text-danger'>{error.confirmPassword}</p>}
                                        </div>
                                    </div>
                                )}

                                {/* Step 3: Address Information */}
                                {currentStep === 2 && (
                                    <div className="step">
                                        <h4 className='text-danger mb-3'>Step 3: Address Information</h4>
                                        {backederror && <p className='text-danger text-center'>{backederror}</p>}
                                        <div className="mb-3">
                                            <label className="form-label">Street Address</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="street"
                                                value={formData.street}
                                                onChange={handleChange}
                                                require
                                                placeholder='eg:- Oxford Lane'
                                            />
                                            {error && <p className='text-danger'>{error.street}</p>}
                                        </div>
                                        <div className='flex-in-address-in-signup'>
                                            <div className="city-in-signin">
                                                <label className="form-label">City</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="city"
                                                    value={formData.city}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder='eg:- Hyderabad'

                                                />
                                                {error && <p className='text-danger'>{error.city}</p>}
                                            </div>
                                            <div className="city-in-signin">
                                                <label className="form-label">State</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder='Enter Your State'
                                                    name="state"
                                                    value={formData.state}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                {error && <p className='text-danger'>{error.state}</p>}
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Postal Code</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="zip"
                                                placeholder='Enter Your Pincode'
                                                value={formData.zip}
                                                onChange={handleChange}
                                                required
                                            />
                                            {error && <p className='text-danger'>{error.zip}</p>}
                                        </div>
                                    </div>
                                )}

                                {/* Navigation Buttons */}
                                <div className="btn-group buttons-main-in-signin">
                                    {currentStep > 0 && (
                                        <div className=''>
                                            <button type="button" className='btn prev-button-in-signin' onClick={prevStep}>Previous</button>
                                        </div>
                                    )}
                                    {currentStep < 2 ? (
                                        <div className=''>
                                            <button type="button" className="btn next-button-in-signin " onClick={nextStep}>Next </button>
                                        </div>
                                    ) : (<div className=''>
                                        <button onClick={handleSubmit} className="btn next-button-in-signin">  Submit </button>
                                    </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
