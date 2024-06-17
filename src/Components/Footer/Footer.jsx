import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='footer' id='footer'>

      <div className="footer-content">

        <div className="footer-content-left">
          <a href='/'> <img src={assets.logo} alt="" /></a>
          <p> Thanks so much for your order! We hope you enjoy your food! And Always Remember "People who love to eat are always the best people."</p>

          <div className="footer-social-icons">

            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>

        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>

            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li> privacy policy</li>
          </ul>


        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>

          <ul>

            <li>+2349078329541</li>
            <li>trustgod2030@gmail.com</li>
            
          </ul>


        </div>
      </div>


      <hr />
      <p className='footer-copyright'>Copyright 2024 @Kelvin-Osarobo/Kelvins-Food.com - All Right Reserved.</p>


    </div>
  )
}

export default Footer