import React from 'react'
import './Landing.css'
import {Link} from 'react-router-dom'
import bottomImage from '../images/cta-logo-two.png'
import topImage from '../images/cta-logo-one.svg'

const Landing = () => {
    return (
        <div className='landing'>
            <div className='landing-info'>
                <img className='top-image' src={topImage} alt='topImage'/>
                <Link to='/home' className='to-home-button'>
                    <button className='to-home-button'>GET ALL THERE</button>
                </Link>
                <p className='main-text-info'>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1</p>
                <img className='bottom-image' src={bottomImage} alt='bottomImage'/>
            </div>
        </div>
    )
}

export default Landing
