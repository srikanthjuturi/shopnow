import React from 'react'
import './Footer.css'
import logo from '../src/assets/images/logo.jpg'

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-cta pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <a href="https://www.google.com/maps/search/?api=1&query=4th+Floor,+And+5,+Plot+No:+4,+Arunodaya+Colony,+Vittal+Rao+Nagar,+Madhapur,+Hyderabad,+Telangana+-+500081" target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-map-marker-alt"></i>
                                </a>
                                <div className="cta-text">
                                    <h4>Find us</h4>
                                    <span>Madhapur,Hyderabad,Telangana-500081</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <a  href="tel:+1234567890">
                                <i className="fas fa-phone"></i>
                                </a>
                                <div className="cta-text">
                                    <h4>Call us</h4>
                                    <span>+91-8686033556</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                            <a  href="mailto:dropquick.in@gmail.com" >
                                <i className="far fa-envelope-open"></i>
                                </a>
                                <div className="cta-text">
                                    <h4>Mail us</h4>
                                    <span>dropquick.in@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-content pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 mb-50">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    <a href="index.html"><img src={logo} className="img-in-footer" alt="logo" /></a>
                                </div>
                                <div className="footer-text">
                                    <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                        Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="footer-social-icon">
                                    <span>Follow us</span>
                                    <a href="https://www.instagram.com/bad__captain___23/"><i className="fab fa-brands fa-instagram insta-bg"></i></a>
                                    <a href="https://www.linkedin.com/in/juturi-srikanth/"><i className="fa-brands fab fa-linkedin linkedin-bg"></i></a>
                                    <a href="https://github.com/srikanthjuturi"><i className="fab fa-brands fa-youtube youtube-bg"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">about</a></li>
                                    <li><a href="#">services</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Our Services</a></li>
                                    <li><a href="#">Contact us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 mb-50">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Subscribe</h3>
                                </div>
                                <div className="footer-text mb-25">
                                    <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                </div>
                                <div className="subscribe-form">
                                    <form action="#">
                                        <input type="text" placeholder="Email Address" />
                                        <button><i className="fab fa-telegram-plane"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                            <div className="copyright-text">
                                <p>Copyright &copy; 2024, All Right Reserved <a href="https://leairaevents.com/"> Le Aira Events</a></p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                            <div className="footer-menu">
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Terms</a></li>
                                    <li><a href="#">Privacy</a></li>
                                    <li><a href="#">Policy</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
