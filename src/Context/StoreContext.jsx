import { createContext } from "react";
import { Food_list } from "../assets/assets";
import { useState } from "react";
import { useEffect } from "react";

export const StoreContext = createContext(null)

const StoreContextprovider = (props) => {

    const [CartItems, setCartItems] = useState({});

    const addToCart = (itemid) => {

        if (!CartItems[itemid]) {

            setCartItems((prev) => ({ ...prev, [itemid]: 1 }))

        }
        else {
            setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }))
        }

    }
    const removeFromCart = (itemid) => {
        setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }))

    }

    const getTotalCartAmount = () => {

        let totalAmount = 0;
        for (const item in CartItems) {
            if (CartItems[item] > 0) {
                let itemInfo = Food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * CartItems[item];

            }

        }
        return totalAmount;
    }



    const Contextvalue = {
        Food_list,
        CartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount

    }

    return (
        <StoreContext.Provider value={Contextvalue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextprovider