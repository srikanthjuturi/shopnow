import React from 'react'
import './ContactUs.css'

export default function ContactUs() {
  return (
    <>
<h1 className='text-center mt-5 mb-4'>Buyer Testimonial</h1>
     <section>
        <div className="container contact-main-div">
          <div className="contactInfo">
            <div>
              <h2>Contact Info</h2>
              <ul className="info">
                <li>
                  <span><img src="https://i.ibb.co/cbnfrDF/location.png" alt="location" /></span>
                  <span>
                  Madhapur, Hyderabad, Telangana - 500081
                  </span>
                </li>
                <li>
                  <span><img src="https://i.ibb.co/rbbwDkP/mail.png" alt="mail" /></span>
                  <span>dropquick.in@gmail.com</span>
                </li>
                <li>
                  <span><img src="https://i.ibb.co/DGGjsW7/call.png" alt="call" /></span>
                  <span>+91-8686033556</span>
                </li>
              </ul>
            </div>
            <ul className="sci">
              <li><a href=""><img src="https://i.ibb.co/vxjnyw0/1.png" alt="social1"/></a></li>
              <li><a href=""><img src="https://i.ibb.co/xsXK3zW/2.png" alt="social2"/></a></li>
              <li><a href=""><img src="https://i.ibb.co/5jFR49X/3.png" alt="social3"/></a></li>
              <li><a href=""><img src="https://i.ibb.co/1Msgr4S/4.png" alt="social4"/></a></li>
              <li><a href=""><img src="https://i.ibb.co/GtnC2C8/5.png" alt="social5"/></a></li>
            </ul>
          </div>
          <div className="contactForm">
            <h2>Send a Message</h2>
            <div className="formBox">
              <div className="inputBox w50">
                <input type="text" required />
                <span>First Name</span>
              </div>
              <div className="inputBox w50">
                <input type="text" required />
                <span>Last Name</span>
              </div>
              <div className="inputBox w50">
                <input type="email" required />
                <span>Email Address</span>
              </div>
              <div className="inputBox w50">
                <input type="text" required />
                <span>Mobile Number</span>
              </div>
              <div className="inputBox w100">
                <textarea required></textarea>
                <span>Write Your Message Here...</span>
              </div>
              <div className="inputBox w100">
                <input type="submit" value="Send" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
