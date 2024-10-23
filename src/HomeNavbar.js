import React from 'react';
import './HomeNavbar.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import logo from './assets/images/logo.jpg'
import { useNavigate } from 'react-router-dom';
 


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
  
export default function HomeNavbar() {
    const [isBlack, setIsBlack] = useState(false);
    const [scroll, setscroll] = useState(false);


    const navigate = useNavigate()
    // Handle scroll event to change nav color
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                setIsBlack(true);
            } else {
                setIsBlack(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  
    useEffect(() => {
        const handleScrolls = () => {
            if (window.scrollY > 100) {
                setscroll(true);
            } else {
                setscroll(false);
            }
        };

        window.addEventListener('scroll', handleScrolls);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScrolls);
        };
    }, []);

     // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


    const [showSearch, setShowSearch] = useState(false);

    const handleSearchClick = () => {
        setShowSearch(!showSearch);
    };

    // ________slider

 


    return (
        <>
            <div className='first-nav'>
                <div className="nav-leftside">
                    <img src={logo} alt="" id='logo-in-nav' onClick={ ()=>{navigate('/')}} />
                </div>
                <div className="nav-rightside">
                <div className={`search-bar-container ${showSearch ? 'show' : ''}`}>
                            <input type="text" placeholder="Search..." />
                        </div>
                    <div className="inner-items-in-nav-rightside" onClick={handleSearchClick}>
                        <i className="fa-brands fa-searchengin f-icon"></i>
                    </div>
                    {/* <div className="inner-items-in-nav-rightside">
                        <i className="fa-solid fa-cart-shopping f-icon" ></i>
                    </div> */}
                    <div className="inner-items-in-nav-rightside">
                        <div className="btn-group">
                                <i className="fa-regular fa-user f-icon" data-bs-toggle="dropdown" aria-expanded="false">
                                </i>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/signup" >SIGN UP</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to='/login'>LOGIN</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <nav className={isBlack?"navbar navbar-expand-lg isblack":"navbar navbar-expand-lg second-nav-bg"}>
                <div className="container-fluid">
                    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav container nav-items-in-second-div">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" onClick={ ()=>{navigate('/')}}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                <a className="nav-link dropdown-toggle dropdown-icon" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Services</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle dropdown-icon" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
 
        {scroll ? <div className='scroll-btn' onClick={scrollToTop}><i className="fa-solid fa-arrow-up"></i></div>:null}
        </>

    );
}
