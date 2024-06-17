import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({ category }) => {

    const { Food_list } = useContext(StoreContext)

    return (
        <div className='Food-display' id='Food-display'>
            <h2>Top dishes available</h2>
            <div className="food-display-list">

                {Food_list.map((item, index) => {

                    if (category ==="All" || category === item.category) {
                        return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                    }



                })}

            </div>

        </div>
    )
}

export default FoodDisplay