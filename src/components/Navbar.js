import React from 'react'
import './Navbar.css'
import mainLogo from '../images/logo.svg'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="left-side">
                <Link to="/home">
                    <img className="logo-image" src={mainLogo} alt="Disney"/>
                </Link>
            </div>
            <Link to='/home' className="right-side">
                <div >
                    <p className='login'>LOGIN</p>    
                </div>
            </Link>
        </div>
    )
}

export default Navbar
