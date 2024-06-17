import React from 'react'
import './Exploremenu.css'
 import { meun_list } from '../../assets/assets'

const Exploremenu = ({category,setcategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1> Explore our menu</h1>
        <p className='explore-menu-text'>Choose from a diverse meun featuring a delectable array of dishes crafted with finest ingredients and culinary expertise. our mission is to satisfy your cravings and elevate your dining experience, one delious at a time.</p>
        <div className="explore-menu-list">
            {meun_list.map((item,index)=>{
                return[
                    <div onClick={()=>setcategory (prev=>prev===item.menu_name?"All":item.menu_name)}  key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.meun_image} alt="" />
                        <p>{item.menu_name}</p>

                    </div>
                ]
            })}
        </div>
        <hr />
      
    </div>
  )
}

export default Exploremenu
