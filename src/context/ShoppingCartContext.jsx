import { createContext, useState } from 'react'


export const CartContext = createContext(null)

export const ShoppingCartProvider = ({ children }) => {
    const comision = 47190
    const [cart, setCart] = useState([])
    


    return (
        <CartContext.Provider value={{ comision, cart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}


export default ShoppingCartProvider
