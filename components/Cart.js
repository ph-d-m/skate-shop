import Commerce from "@chec/commerce.js";
import { createContext, useReducer, useContext, useEffect } from "react";
import getCommerce from "../utils/commerce";

const CartStateContent = createContext();
const CartDispatchContext = createContext();

const SET_CART = "SET_CART";

const initialState = {
    total_items: 0,
    total_unique_items: 0,
    line_items: []
}

const reducer = (state, action) => {
switch (action.type) {
    case SET_CART:
        return {...state, ...action.payload};

    default:
        throw new Error(`Unknown action: ${action.type}`)
 }
}

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        getCart();
    }, [])
    
    const setCart = (payload) => dispatch({ type: SET_CART, payload});
    
    const getCart = async () => {
        try {
            const cart = await getCommerce.cart.retrieve();
            setCart(cart)
    
    
        } catch (err) {
            console.log(err);
        }
    
        
        
    }

    return (
        <CartDispatchContext.Provider value={{setCart}}>
            <CartStateContent.Provider value={state}>{children}</CartStateContent.Provider>
        </CartDispatchContext.Provider>
    )
}



export const useCartState = () => useContext(CartStateContent)
export const useCartDispatch = () => useContext(CartDispatchContent)
