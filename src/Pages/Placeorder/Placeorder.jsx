import React from 'react'
import './Placeorder.css'
import { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
const Placeorder = () => {

   const{getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className="place-left">
        <p className='title'> Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="Email"placeholder='Email address' />
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone'/>
        
      </div>
      <div className="place-right">
      <div className="cart-total">
                    <h2>
                        Cart Total
                    </h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p> #{  getTotalCartAmount()} </p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p> #{2000} </p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b> #{  getTotalCartAmount() +2000} </b>
                        </div>
                      
                    </div>
                    <button >PROCEED TO PAYMENT</button>
                </div>

      </div>
      
    </form>
  )
}

export default Placeorder
