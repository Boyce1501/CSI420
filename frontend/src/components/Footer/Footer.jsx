import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
           <div className="footer-content-left">
                <img src={assets.logo} />
                <p>OrangePeel blossomed from a passion for crafting exceptional dining
                     experiences. Inspired by the vibrant hues of 
                     the orange, we set out to create a culinary oasis where every bite 
                     tells a story. With a dedication to quality ingredients and creative 
                     flair, our chefs curate dishes that ignite the senses and leave taste buds dancing with delight.
                </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} />
                    <img src={assets.twitter_icon} />
                    <img src={assets.linkedin_icon} />
                </div>
            </div> 
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div> 
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+267 72896739</li>
                    <li>contact@orangepeel.com</li>
                </ul>
            </div> 
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer