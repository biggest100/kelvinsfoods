import React, { useContext, useState } from 'react'
import './Navbar.css'
import { FaSearch } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import 'react-router-dom'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

function Navbar( {setshowlogin}) {

  const[menus,setmenus]=useState("HOME");

  const{getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className='navbar'>
       <Link to={'/'}> < img className='logo' src="/images/kelvin food logo.png" alt="" /></Link>
        <ul className="navbar-menu">
          <Link to='/' onClick={()=>setmenus("HOME")} className={menus==="HOME"?"active":""} >HOME</Link>
          <a href='#explore-menu' onClick={()=>setmenus("MENU")} className={menus===">MENU"?"active":""} >MENU</a>
          <a  href='#app-download' onClick={()=>setmenus("MOBILE")} className={menus==="MOBILE"?"active":""} >MOBILE</a>
          <a href='#footer' onClick={()=>setmenus("CONTACT US")} className={menus==="CONTACT US"?"active":""}  >CONTACT US</a>
          
        </ul>
        <div className="navbar-right">
          <FaSearch fontSize={20}/>
          
          <div className="navbar-search-icon">
            
            <Link to={'/Cart'}><CiShoppingCart fontSize={20}/></Link>
            <div className={getTotalCartAmount()===0?"" :"dot"}></div>
          </div>
          <button onClick={()=>setshowlogin(true)}>sign in</button>
        </div>
        
    </div>
  )
}


export default Navbar